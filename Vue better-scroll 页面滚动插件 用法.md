# better-scroll 页面滚动插件 用法

作者：H口先生

## vue cli中下载better-scroll

**先下载better-scroll**

命令； ``cnpm install --save better-scroll`` 

**注意事项**

创建好内容了才可以实例化better-scroll。不然有问题。

内容超出better-scroll外宽的大小

**用法：**

```vue
<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId">
        {{data.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  // 导入better-scroll
  // 一开始先下载better-scroll。命令：cnpm install --save better-scroll
  // 要使用better-scroll要确保外面的容器小于里面的容器才可以
  import BetterScroll from 'better-scroll'
  export default {
    data() {
      return {
        datalist: [],
        mystyle: {
          height: '0px'
        }
      } 
    },
    // 页面加载完了
    mounted() {
      // 赋值屏幕大小减去底部大小
      this.mystyle.height = document.documentElement.clientHeight - 50 + "px";
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=3587655',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603276896468688306176003","bc":"440100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then( res=>{
        console.log(res.data.data.cinemas)
        this.datalist = res.data.data.cinemas
          
        // this.$nextTick()是等上面的节点插入到节点之后才进行立面的操作。vue特有的
        this.$nextTick(()=>{
          // 使用BetterScroll 要等节点写入了再执行下面操作才可以。不加别的就new BetterScroll(".cinema")就可以了
          new BetterScroll(".cinema",{
            // 加滚动条,用滚动条外框要加定位（可以是相对定位）。不然滚动条会跑出界
            scrollbar: {
              fade: true,
              interactive: false
            }
            })
        })
      })

    }
  }
</script>
<style lang="scss" scoped>
  li{
    height: 50px;
  }
  /*  控制大小用calc()不行，不太清楚为什么 */
  .cinema{
    height: 500px;
    overflow: hidden;
    position: relative;
  }
</style>

```

