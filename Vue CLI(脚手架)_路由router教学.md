# Vue CLI(脚手架) 路由router教学

作者：H口先生

路由可以简单的理解为路径切换了只是切换一个大组件。

## router简单代码解释

### 一级路由基础配置讲解

新版的vue cli没有没有 ``router.js`` 和 ``store.js`` 文件（这两个文件位置在src文件夹下，与App.vue同级）。需要要自己创建和写代码，下面是别人提供的代码（之前默认的代码）

[点就查看去赋值代码](https://www.jianshu.com/p/118f4df11e09)

**router.js代码解释：**

```js
import Vue from 'vue'
import Router from 'vue-router' //引用路由
//import Index from './views/Index.vue'
//导入组件（这些组件是用来当页面的，所以可以理解为一个页面（大组件）
// @等于src 相对于简写, 这些组件我们一般放在src/views页面里。.vue可以省略
import Index from '@/views/index'
import About from '@/views/about'
import Guid from '@/views/guid'

//使用注册vue的路由插件
Vue.use(Router)
//ES6的导出方式
export default new Router({
    // 作用：可以理解为点击加载部分页面（页面级的组件）
    routes: [ //数组，这个和微信小程序的那个tabbar页面选项那个比较像
        {
            path: '/index', // 组件路径
            name: 'Index', // 这个可以不要
            component: Index // 组件名
        },
        {
            path: '/about',
            name: 'About',
            component: About // 组件名
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        // {
        //     path: '/info/:id',
        //     name: 'info',
        //     component: () => import('./views/ShopInfo.vue')
        // }
        ,
        {
            path: '/guid',
            name: 'Guid',
            component: Guid // 组件名
            // component: () => import('./views/Guid.vue')
        },
        // 重定向，上面的都不匹配的话显示下面地址的组件
        // 因为一开始输入域名是不会自动开启上面的组件的，所以需要这个才可以设置默认渲染的组件
        {
          path: '*',
          redirect: '/index'
        }
    ]
})

```

**main.js代码解释：**

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引入路由。
// import store from './store'

Vue.config.productionTip = false

new Vue({
  // router是 router: router的缩写。这两个router前者是固定的，或者是变量。上面引入的变量
  router,
  // store,
  render: h => h(App)
}).$mount('#box')
```

**App.vue代码解释**

```vue
<template>
	<div>
        <!-- 路由容器,只需要加上这个就可以了，不用打其他名字 -->
		<router-view></router-view>
  	</div>
</template>
```

**路由的组件一般都是写在 ``src/views`` 文件夹里面（有几个自带的组件，删除就可以了）**

index.vue组件里先随便写点东西：

```vue
<template>
  <div>
    index
  </div>
</template>
```

其他组件以此类推，组件名为vue文件的名

**上面那三个都要有相应的改变**

添加了路由容器之后改变地址``http://localhost:8080/#/ ``后面的内容就加入相应的组件。例如这里要加入index组件地址改为 ``http://localhost:8080/#/index`` ，App.vue 的内容是不会改变的只会添加多个组件而已。

## 路由声明式导航

**用 `` <router-link>`` 写个导航组件**

```vue
<template>
  <nav>
    <!-- 声明式导航 -->
    <ul>
      <!-- router-link是路由中提供的组件可以监听到路径的切换和切换路径 to 是路径 -->
      <!-- tag属性值为什么就是相对于是什么标签，active-class是访问后改变的样式，也可以写成activeClass -->
      <router-link to="/index" tag="li" active-class="myActive">index</router-link>
      <router-link to="/about" tag="li" active-class="myActive">about</router-link>
      <router-link to="/guid" tag="li" active-class="myActive">guid</router-link>
    </ul>
  </nav>
</template>
<style>
  .myActive{
    color: red;
  }
</style>
```

然后App.vue加入组件就可以了

```vue
<template>
	<div>
        <!-- 路由容器 -->
        <router-view></router-view>
		<tabbaer></tabbaer>
    </div>
</template>
<script>
	import tabbar from '@/components/Tabbar'
    export default {
        components: { // 局部组件
    		tabbar
 		 }
    }
</script>
```

## 二级路由

**router.js文件**

重点 ``children数组``声明路由

```js
import Vue from 'vue'
import Router from 'vue-router' //引用路由
import Index from '@/views/index'
import About from '@/views/about'
import Test1 from '@/views/index/Test1' // 二级路由组件
import Test2 from '@/views/index/Test2'
//使用注册vue的路由插件
Vue.use(Router)
//ES6的导出方式
export default new Router({
    // 作用：可以理解为点击加载部分页面（页面级的组件）
    routes: [ //数组，这个和微信小程序的那个tabbar页面选项那个比较像
        {
            path: '/index', // 组件路径
            component: Index, // 组件名
            
            children: [ // 二级路由
              {// 绝对路径从views文件里开始找。文件我放在views/index/文件夹里
                path: '/index/test1',
                component: Test1
              },
              {
                path: 'test2', // 相对路径从index文件的路径开始找，前面不可以加/
                component: Test2
              },
              // 二级路由重定向，输入域名不输入其他的就渲染了index也test1。
              {
                path: '',
                redirect: '/index/test1'
              }
            ]
        },
        
        {
            path: '/about',
            component: About // 组件名
        },
        // 重定向，上面的都不匹配的话显示下面地址的组件
        {
          path: '*',
          redirect: '/index'
        }
    ]
})
```

在``index.vue`` （这里是index）里留下路由容器

```vue
<template>
  <div>
    index
    <p>
      下面是二级组件
    </p>
    <!-- 二级路由插入的地方 -->
    <router-view></router-view>
  </div>
</template>
```

二级路由的组件我都放在了``src/views/index/`` 文件夹里（推荐大家也都这样做，规范一点）

## 动态路由（传递数据）和命名路由：

我在二级路由test1里写数据，点击传递给guid.vue组件

**代码解释和使用看下面代码注释**

下面代码我只呈现部分，因为大部分都经常出现。

**router.js文件**

```js
export default new Router({
    routes: [
        {
            path: '/index', // 组件路径
            component: Index, // 组件名
            children: [ // 二级路由
              {
                path: '/index/test1',
                component: Test1
              },
              {
                path: 'test2', 
                component: Test2
              },
              {
                path: '',
                redirect: '/index/test1'
              }
            ]
        },
        {
            path: '/about',
            component: About // 组件名
        },
        
        // 重点。新知识！！！！！！！！！
        { // 动态路由
          // :id是个变量，到时候用来接收信息的。这样的话打路径http://localhost:8081/#/guid是不会显示页面的了
            path: '/guid/:id',
            name: 'guid', // 命名，name可以用来跳转，也可以不命名。
            component: Guid // 组件名
        },
        
        {
          path: '*',
          redirect: '/index'
        }
    ]
})
```

**Test1.vue文件。点击跳转加传递数据**

```vue
<template>
  <div>Test1
    <ul>
      <li v-for="data in list" :key="data" @click="handleClick(data)">
        {{data}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: ["111", "222", "333"]
      }
    },
      
    // 重点。新知识！！！！！！
    methods: {
      handleClick(id) {
        console.log("点击了" + id)
        //编程式导航
        // 因为开始main.js初始化对象router了。所以就相当于在this里挂载了$router这个属性
        // 可以理解为router.js里创建出来的router对象。(我也不是很理解，记住用法就好了)
        // 效果就是点击了就跳转的/guid/${id}路径id是变量，并且显示guid组件
        this.$router.push(`/guid/${id}`)
        // 编程式导航-名字跳转
        // params:{id:id}传递过去的数据，第一个id的话是router.js里写的那个：id名字要一样。后面那个id是这里传入的变量
       	// name是一开始router.js里的那个name
        // this.$router.push({name: "guid", params:{id:id}})
      }
    }
  }
</script>
```

**接收数据。guid.vue文件**

```vue
<template>
  <div>
    guid
  </div>
</template>

<script>
  export default {
    // 节点加载完后执行下面事件
    mounted() {
      //获取传来的信息。 看准了是$route。数据在$route.params里
      console.log("获取到的信息" + this.$route.params.id)
    }
  }
</script>
```

## Vue history模式

history模式链接中没有#号。不过每次请求都会去请求后端。导致后端找不到文件返回404。这样的话就要和后端协商处理。(好看的代价)

**开启方式，router.js：**

```js
export default new Router({
    // 默认是mode:'hash'路径带个#号，好用。
    // mode:'history'路径就没有#号，不过每次请求都会去请求后端。
    // 导致找不到文件返回404。这样的话就要和后端协商处理。(好看的代价)
    mode:'history', 
    routes: []
})
```

[后端处理方式，与官方文档](https://router.vuejs.org/zh/guide/essentials/history-mode.html)

## [路由守卫(拦截)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

[官方文档](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

 **``router.beforeEach((to, from, next) => {}) ``** 

### 全局守卫

**看代码（router.js文件）：** 

```js
// ....引入需要的东西
import Login from '@/views/Login'
// ...
// 赋值给router
const router = new Router({
    // ...记得加入login的组件
})

//全局守卫
router.beforeEach((to, from, next) => {
  // 判断是否是要跳转atout组件(实例用about来做示例)
  if(to.path==='/about'){
    console.log("检查是否登录了")
    // 假设未登录
    if(false){
      // 如果登录了就正常执行
      next();
    }else{
      // 未登录就渲染login组件（括号里面的是路径）。一般执行这步过去登录
      next("/login")
    }
  }else{
    // 不是点击atout组件就正常执行渲染
    next()
  }
})
// ES6的导出方式
export default router
```

### 组件内的守卫(局部守卫)

 **``beforeRouteEnter (to, from, next) {}``** 

**写在点击要显示的组件里。这里写在about.vue里面：**

```vue
<template>
  <div>
    about
  </div>
</template>
<script>
  export default {
    // 页面还没渲染就执行了下面代码
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建。
        // 假设未登录
        if(false){
          // 如果登录了就是true就正常执行
          next();
        }else{
          // 未登录就渲染login组件（括号里面的是路径）。一般执行这步过去登录
          next("/login")
        }
      }
  }
</script>
```



