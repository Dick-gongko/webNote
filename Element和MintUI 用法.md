# Element和MintUI 用法

**Element UI 用于pc**

[ElementUi官网：https://element.eleme.cn/#/zh-CN](https://element.eleme.cn/#/zh-CN)

**Mint UI 用于移动端**

[Mint UI官网：http://mint-ui.github.io/#!/zh-cn](http://mint-ui.github.io/#!/zh-cn)

Mint UI要科学上网才可以使用

## Element UI用法

**脚手架（Vue CLI）中安装Element-ui：**

下载命令： ``cnpm install --save element-ui`` 

**引入ElementUI：**

在main.js文件中加上

```js
// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

具体用法看官网教学，很简单

## Mint UI用法

**脚手架（Vue CLI）中安装Mint-ui：**

下载命令： ``cnpm install --save mint-ui`` 

**引入MintUI：**

在main.js文件中加上：

```js
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
```

### indicator加载提示框

在使用的页面引入

```javascript
import { Indicator } from 'mint-ui';
```

在使用页面的mounted（）{}里加入事件：

```js
Indicator.open({
  text: '加载中...',
  spinnerType: 'fading-circle'
}),
```

在获取数据结束后的代码后加上关闭加载提示框的代码：`` Indicator.close();``

## Infinite Scroll 无限滚动指令（懒加载）

详情看官方文档，这里简单介绍：

### 例子

为 HTML 元素添加 `v-infinite-scroll` 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 `infinite-scroll-distance` 设置）时，绑定到 `v-infinite-scroll` 指令的方法就会被触发。

- v-infinite-scroll 参数是到底后执行的事件（自定义事件）
- infinite-scroll-distance 参数是距离底部的值
- infinite-scroll-disabled 参数是布尔值（变量）是true就禁用到底执行事件（不然每次到底数据还没有回来都会触发）
- infinite-scroll-immediate-check 参数是布尔值，真的话一开始就经常是否到底。有时候一开始数据还没有一开始就到底了。这时候就要把值给为false。

```html
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10"
  infinite-scroll-immediate-check="false">
  <li v-for="item in list">{{ item }}</li>
</ul>
```

在要使用的组件js部分写入：

```js
export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      loadMore() {
        console.log("到底")
        this.loading = true;//禁用
        // 模拟代码两秒钟后回来
        setTimeout(()=>{
          this.loading = false;
        },2000)
      }
    }
}
```

#### 注意事项

- 到底要this.loading要改为true
- 数据请求完了记得把this.loading改回false
- 最后一次请求后一定要把this.loading改为true。不然到底了没数据了还会不停的发请求。

## [Message box弹出提示框](http://mint-ui.github.io/docs/#/zh-cn2/message-box)

详情看官网

### 引入

```javascript
import { MessageBox } from 'mint-ui';
```

### 例子

以标题与内容字符串为参数进行调用

```javascript
MessageBox('提示', '操作成功');
```

**或者传入一个对象**

```javascript
MessageBox({
  title: '提示',
  message: '确定执行此操作?',
  showCancelButton: true
});
```

返回值选择确定是字符串 ``confirm`` 

接收数据：

```js
MessageBox({
  title: '提示',
  message: '确定执行此操作?',
  showCancelButton: true
}).then(res => {
  if(res==="confirm"){
    Console.log("点击了确定")
  }
})
```

## [Swipe轮播图](http://mint-ui.github.io/docs/#/zh-cn2/swipe)

详情看官网

### 引入

**可以不引入的**，一开始我们就引入在main.js里的。这个和之前的不太一样，这个是弄成了组件，所以可以直接使用了。

```javascript
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
```

### 例子

基础用法

```html
<mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

### 注意事项

- ``<mt-swipe>`` 要加个id给它加样式加高度
- ``:auto`` 一定要有值才可以
- 输入布尔值的时候要在前面加 `` : `` 不然当字符串看待
- 想要控制其他样式就要打开控制台看对应的样式的class名然后在修改样式（注意优先级）

不显示轮播小点点：

```html
<!-- :showIndicators="false"不显示小点点 -->
<mt-swipe :auto="14000" id="swipe" :showIndicators="false">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

id是为了加高度。

## Index List 索引列表

### 引入

可以不引入

```javascript
import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
```

### 例子

```html
<mt-index-list>
  <mt-index-section index="A">
    <mt-cell title="Aaron"></mt-cell>
    <mt-cell title="Alden"></mt-cell>
    <mt-cell title="Austin"></mt-cell>
  </mt-index-section>
  <mt-index-section index="B">
    <mt-cell title="Baldwin"></mt-cell>
    <mt-cell title="Braden"></mt-cell>
  </mt-index-section>
  ...
  <mt-index-section index="Z">
    <mt-cell title="Zack"></mt-cell>
    <mt-cell title="Zane"></mt-cell>
  </mt-index-section>
</mt-index-list>
```

#### 注意

-  ``<mt-cell>`` 不可以直接加点计事件，可以在外面套个div。也有别的方式（百度）
- 有可能列表大于屏幕大小，所以要动态改变样式 

``<mt-index-list ref="mylist">`` 

`` this.$refs.mylist.$el.style.heigth = document.documentElement.clientHeight-50+"px";``

#### 实例：

需求获得的数据按照拼音abc排布在indexLIst里。

获得的数据里有拼音和城市名和城市id，拼音是小写的。

```vue
<template>
  <div>
    <mt-index-list ref="mylist">
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <!-- 因为mt-cell不可以直接用click事件所以就套一个div -->
        <div @click="handleClick(city.cityId)" v-for="city in data.list" :key="data.cityId">
          <mt-cell :title="city.name" ></mt-cell>
        </div>
      </mt-index-section>
  </mt-index-list>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
  data() {
    return{
      datalist: []
    }
  },
  mounted() {
    // 调整大小
    this.$refs.mylist.$el.style.heigth = document.documentElement.clientHeight-50+"px";
    // 请求数据
    axios({
      url: "https://m.maizuo.com/gateway?k=1507218",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603276896468688306176003","bc":"440100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res =>{
      // 把数据传到handlecity方法处理后返回值赋值给datalist
      this.datalist = this.handleCity(res.data.data.cities);
    })
  },
  methods:{
    handleCity(datalist){
      var letterArr = []
      // 写入A~Z入letterArr里
      for(var i=65; i<91; i++){
        letterArr.push(String.fromCharCode(i));
      }
      // console.log(letterArr)
      var newlist = []
      // 给newlist写入数据
      for(var j=0; j<letterArr.length; j++){
        // substring是取出pinyin字符串中的第一个字母和当前letterArr的字母对比是否一样。toLowerCase()是把字母变成小写。因为里面字符串是大写。
        // item.pinyin是城市的拼音
        var arr = datalist.filter(item => item.pinyin.substring(0,1)===letterArr[j].toLowerCase())
        // 把不是空的字符串都写进去
        if(arr.length>0){
          newlist.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      console.log(newlist)
      return newlist
    },
    handleClick(id) {
      console.log(id)
      // 把城市的id存在localStorage（缓存）中
      localStorage.setItem("cityId", id)
      // 跳转
      this.$router.push('/about')
    }
  }
}
</script>
```

