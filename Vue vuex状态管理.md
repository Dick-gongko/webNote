# Vue vuex状态管理

作者：H口先生

用处：

- 状态管理（非父子通信）
- 数据快照
- 方便管理和调试（时光旅行）

用法：

我们创建脚手架的时候已经创建了vuex所以不用安装vuex，如果没有再安装

- 先安装vuex。命令：``cnpm install --save vuex``
- 没有文件创建文件在 ``src`` 里 名为 ``store.js`` 

**store.js代码**

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 自定义的共享状态（可以理解为全局变量）
        isTabbarShow: true
    },
    mutations: {
    },
    actions: {
    }
})

```

**main.js代码：**

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引入路由
import store from './store' // 引入vuex

Vue.config.productionTip = false

new Vue({
  // router是 router: router的缩写。这两个router前者是固定的，或者是变量。上面引入的变量
  router,
  // store: store缩写
  store,
  render: h => h(App)
}).$mount('#box')

```

**App.vue代码：**

```vue
<template>
<!-- 就这样拿到了实例化vuex.store里的state对象。这里可以理解为监听。当然也可以加this.$store简写不加this也没问题 -->
    <tabbar v-if="$store.state.isTabbarShow"></tabbar>
</template>
```

**如果那里组件的js要访问和修改变量的话就**

```vue
<script>
  import axios from 'axios'
  import swiper from './Detail/DetailSwiper'
  export default {

    // 显示就触发隐藏tabbar
    beforeMount() {
      this.$store.state.isTabbarShow = false
    },
    // 页面关闭显示tabbar
    beforeDestroy() {
      this.$store.state.isTabbarShow = true
    }
  }
</script>
```

上面状态自管理应用包含以下几个部分：

- **state**，驱动应用的数据源；
- **view**，以声明方式将 **state** 映射到视图；
- **actions**，响应在 **view** 上的用户输入导致的状态变化。

以下是一个表示“单向数据流”理念的简单示意：

![img](https://vuex.vuejs.org/flow.png)



但是，当我们的应用遇到**多个组件共享状态**时，单向数据流的简洁性很容易被破坏：

完整的流程是：

- Actions
- Mutations 记录数据改变的信息（时间）
- State
- Vue Components

![vuex](https://vuex.vuejs.org/vuex.png)

### 完整正确的修改组件状态方式 Mutations

**Mutations修改状态的唯一方法，且这个过程是同步的**

在Mutations中修改数据有记录用到mommit。

**前面安装方式一样，在Mutations里修改状态的话可以记录每次修改的时间和对象。大一点的项目到时候维护（调试）会好很多。**

**App.vue代码：**

```vue
<template>
<!-- 就这样拿到了实例化vuex.store里的state对象。这里可以理解为监听。当然也可以加this.$store简写不加this也没问题 -->
    <tabbar v-if="$store.state.isTabbarShow"></tabbar>
</template>
```

**如果那里组件的js要访问和修改变量的话就**

```vue
<script>
  import axios from 'axios'
  import swiper from './Detail/DetailSwiper'
  export default {

    // 显示就触发隐藏tabbar
    beforeMount() {
      // 第一个参数是mutation的名字，第二个是传递过去的值
      this.$store.commit("HideMaizuoTabbar", false)
    },
    // 页面关闭显示tabbar
    beforeDestroy() {
      this.$store.commit("ShowMaizuoTabbar", true)
    }
  }
</script>
```

**store.js代码**

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 自定义的共享状态（可以理解为全局变量）
        isTabbarShow: true
    },
    mutations: { // 唯一修改状态的位置。虽然可以跳过这个访问和修改，不过这样不好，修改信息不会记录
        HideMaizuoTabbar(state,data) { // 第一个参数传的是当前的state对象传进来，第二个参数是传过来的值
          console.log("HideMaizuoTabbar")
          // 修改值
          state.isTabbarShow = data
        },
        ShowMaizuoTabbar(state,data){
          state.isTabbarShow = data
        }
    },
    actions: {
    }
})
```

## vue-devtools插件下载与安装

devtools用来查看和调试修改状态的工具（查看修改记录）

[介绍地址:https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)

[下载安装谷歌浏览器的插件（需要科学上网）地址：https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

[火狐浏览器插件地址](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

**使用方式：**

打开控制台任务栏上就有一个vue，点击一下就打开了。

## 异步处理与数据缓存 (Actions)

**异步逻辑都应该封装到action里**

需求：没数据获取数据，与数据直接用旧数据渲染。

**使用到：**vuex的state（数据共享）和axtions异步处理。

**要获取数据的组件.vue文件代码:**

```vue
<template>
  <div>
    <ul>
      <li v-for="data in $store.state.comingList" :key="data.filmId">
		{{data.name}}
    </ul>
  </div>
</template>
<script>
  export default {
    mounted(){
      // 先看有什么缓存数据，有就使用，没有就发请求
      if (this.$store.state.comingList.length===0){
        // ajax请求，参数就是自定义的方法名
        this.$store.dispatch("getComingListAction")
      }else{
        console.log("使用缓存数据")
      }
    }
  }
</script>
```

一开始没有数据是不会渲染的

store里的缓存数据页面重新刷新就不在了。临时储存而已（因为储存在变量里而已嘛~）

**store.js代码**

```js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // 储存缓存数据的数组
        comingList: []
    },
    mutations: {
        comingListMutation(state,data){
          // 把获取的数据缓存到comingList变量里
          state.comingList = data
        },
    },
    
    actions: { //做异步处理的,上一个页面去请求数据的方法
      getComingListAction(store){
          axios({
            url:'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=1913477',
            headers:{
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603276896468688306176003"}',
              'X-Host': 'mall.film-ticket.film.list'
            }
          }).then(res =>{

              // 把获取的值传递给mutation的comingListMutation方法里
            store.commit('comingListMutation', res.data.data.films)
              
          })
        }
    }
})
```

## mapState用法

例如之前我们控制显示tabbar显示与隐藏的写法改成计算属性（computed）写法：

```vue
<template>
  <div>
    <!-- <tabbar v-if="$store.state.isTabbarShow"></tabbar> -->
    <!-- 计算属性写法 -->
    <tabbar v-if="isTabbarShow"></tabbar>
  </div>
</template>
<script>
export default {
  computed: {
    isTabbarShow() {
      return this.$store.state.isTabbarShow
    }
  }
}
</script>
```

用mapState写法（用法）等价于上面写法：

```vue
<template><div><tabbar v-if="isTabbarShow"></tabbar></div>
</template>
<script>
import {mapState} from 'vuex' //ES6导入，只导入vuex里的mapState下面解释
export default {
  // 参数数组可以是多个
  computed: mapState(["isTabbarShow"]),
}
</script>
```

**这样的写法有个缺点**，如果还用其他的计算属性属性就用不了了。

所以这样写才合适

```js
export default {
  // 参数数组可以是多个
  computed: {
      ...mapState(["isTabbarShow"])//ES6展开合并运算符（解构）
  }
}
```

### ES6导入导出介绍

一般我们在使用的库中的方法都是一次性导出的。写法是这样

```js
function a(){}
function b(){}
function c(){}
const all = {a,b,c}
export defuault all
```

**使用导入** `` import All from '/test'`` **全部一次性导入**

分别导出

```js
export function a(){}
export function b(){}
export function c(){}
```

**使用导入** `` import a from '/test'`` **单个导入**。多个导入 ``import {a,b} from '/test'`` 

**注意：名字要和方法里的名字一样**

改名导入的方法： `` import {a as d} from '/test'`` 这样就是导入a方法给变量d。就可以直接拿d使用了

## getters

**getters：可以从store中的state中派生一些状态，getters的会返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。**

- 可以认为是store的计算属性
- this.#store.getters.计算属性名字
- ...mapGetters(["getFilms"])

**和mapState的区别：mapState是用来获取原生数据的，getters是获得处理过的数据的。**

以下代码作用：获取异步得到数据comingList的前三个数据

用法：

**store.js部分代码：**

```js
import ......
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // 储存缓存数据的数组
        comingList: []
    },
    getters: {
      // 打开页面和数据变化会执行 方法名称自定义
        comingListGetter(state) {
          return state.comingList.filter((item,index) => index<3)
        }
    },
    ......
})
```

**使用数据的某插件vue代码:**

```vue
<template>
  <div>
    <ul>
      <li v-for="data in $store.getters.comingListGetter" :key="data.filmId">
          {{data.name}}
    </ul>
  </div>
</template>
```

## Mutations常量设计风格

用一个js的文件存常量名称。然后使用的时候引入常量使用。这样的话如果命名冲突了去改js文件的常量对应的值就可以了。就不用去其他的代码。方便很多。

- 常量的设计风格

``[SOME_MUTATIOIN] (state){}``

- 必须使用同步函数

``this.$store.commit("type", "payload")``

