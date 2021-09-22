# Vue CLI  安装与使用

- **安装：** cmd命令中输入 ``npm install -g @vue/cli`` 就可以了

**脚手架创建项目：**

- 安装后关闭窗口。创建个文件夹然后按住 ``shift`` + 右键点击空白处。然后点击用 ``PowerShell`` 打开
- 命令 ``vue create myapp`` 创建一个工程名为myapp，然后回车。（可以理解为创建一个文件夹，等等东西放里面）
- 选择 ``Manually select features`` 手动选择特性，回车。其他的是选好特性的了。
- 在默认选定的选项上加 ``Router`` ``Vuex`` ``Css Pre-processors``  ``Lomter / Formatter`` 。键盘上下，空格选定。回车（执行）
- 然后选择2.0（我随便选的）。回车
- 然后输入Y。回车
- 选择Sass/SCSS。回车
- 选择 ``ESLint + Standard config`` 。（eslint是用来规范代码的，可以不勾选，太麻烦了）回车
- 全选 ``Lint on save`` ``Lint and fix on commit`` 。回车
- 选择 ``in dadicated config files`` 。回车
- Y。回车就开始下载了

**如果是下载GitHub网站内容出错的话参考下面内容**

- **下载过程中**可能出现问题，一般都是下载github网站内容的东西出现问题的。这时候按 ``ctrl`` + ``C`` 停止下载，不用瞎等了。停止了之后就去删除文件夹里的 ``node modules``文件夹。然后执行命令
- 然后进入到你工程文件，我的话是进入到 ``myapp`` 文件夹。 命令 ``cd. \myapp\`` 。
- 然后执行命令``cnpm i`` 就可以了

### 脚手架使用介绍

- 用编辑器打开创建的工程文件。在编辑器中使用命令行窗口（终端）打开，在这里我在编辑器里点击myapp文件夹右键选择 ``命令行窗口（终端）打开``。然后在下面执行命令 ``npm run serve`` 就可以了
- ``http://localhost:8080/`` 这里就可以看到我们创建的工程文件了。工程文件就在文件夹 ``publlic`` 里的 ``index.html `` 

**main.js介绍：**

-  ``src`` 文件夹里的 ``main.js`` 可以理解为引入其他文件的文件。 
- js里的代码 ``$mount('#app')`` 指的是vue挂载点（index.html里的div  id=“app”的标签“）。
- ``import Vue from 'vue'`` 是ES6模块导入方式相对于 ：`` var Vue = require("vue")``
-  ``import App from './App.vue'`` 相对于 ``var Vue = require("./App.vue")`` 

**vue文件介绍：**

- **重点来了** ``App.vue`` 文件就是我们的组件文件。写法和我们之前的不太一样。
- ``<template>`` 里写的是组件的html内容。
- ``<script>`` 里写的是组件js文件
- ``<style>`` 里写的是组件的css文件。 如果写的是 ``scss`` 文件的话就这样写 ``<style leng="scss">`` 
- js里的组件方法和变量写在 ``export default{}`` 里。这个就相当于之前组件的 ``Vue component()`` 只是里面不用写组件名了。



**例子**

```vue
/* app.vue里的内容 */
<template>
  <div>
    点击加1
    <button @click="add">
    add
    </button>
    {{num}}
  </div>
</template>
<script>
// 相当于 commonJS module.exports
// ES6 的导出
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    add () {
      this.num++
    }
  }
}
</script>
<style>
</style>
```



![img](https://upload-images.jianshu.io/upload_images/3868852-a70486dfb5c22189.png?imageMogr2/auto-orient/strip|imageView2/2/w/538/format/webp)

 

## 终端常用命令

- **页面启动。**终端运行命令 ``npm run serve`` 。
- **代码修正**。终端运行命令 **``npm run lint`` **在根目录执行代码才可以（可以重新创建一个新的命令行窗口（终端）），按照eslint设定的规则修正。
- **打包上线。**  终端运行命令：``npm run build`` 。打包好了生成一个dist文件夹，代码都放在了里面

## Vue 脚手架关闭eslint功能（检测代码错误）

网上的方法是更改build/webpack.config.js
但是在新版的vue-cli中已经隐藏了这个文件

在根目录新建一个vue.config.js

```js
module.exports = {
    lintOnSave: false
}
```

## Vue脚手架代码自动修正、

- 终端运行代码 **``npm run lint`` **在根目录执行代码才可以（可以重新创建一个新的命令行窗口（终端））

## 组件创建与使用

- 组件文件写在 ``src/components`` 文件夹里。
- 组件只可以包含一个root节点。``<template> `` 不算节点。
-  组件要引入才可以用 ``import name from 'src'`` 。要输入vue也要重新引入
- 为了确保样式不相互干扰。在样式标记中加上 ``scoped`` 最好，不然样式相互干扰了 ``<style scoped>`` 

**用法注意事项看代码注释：**

```vue
<!-- app.vue根组件代码 -->
<template>
  <div>
    hello vue
    {{num}}
    <navbar>
      <button @click="isShow=!isShow">click</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
  </div>
</template>
<script>
// 引入组件
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
// 文件导入还不行还没有注册组件

// 注册为全局组件
// 如果要注册全局组件的话还要引入一次Vue
// import Vue from 'vue'
// Vue.component("navbar", navbar)
// Vue.component("sidebar", sidebar)

// 相当于 commonJS module.exports
// ES6 的导出
export default {
  data () {
    return {
      isShow: false
    }
  },
  // 和之前写的方式一样,以为刚才引入了navbar这些，所以直接赋值就可以了
  components: {
    navbar: navbar,
    sidebar: sidebar
  }
}
</script>

    <!-- navbar组件代码 -->
<template>
  <div>
    navbar
    <slot></slot>
  </div>
</template>

    <!-- Sidebar组件代码 -->
<template>
  <div>
    Sidebar.vue
    <ul>
      <li>1111</li>
      <li>2222</li>
    </ul>
  </div>
</template>
```



## 网络请求

用axios的话要下载个第三方的库。用fetch要引入兼容库。

**axios的第三方库要在根目录终端执行命令 ``cnpm install --save axios`` 。**

**存在的问题：**可能会在编辑器里运行不了，如果运行不了就用``Windows PowerShell`` 在工程文件根目录运行就可以了。如果还是不行可能是没有安装``cnpm`` 这样的话就执行 命令``npm install -g cnpm --registry=https://registry.npm.taobao.org`` 。如果是提示是系统上禁止运行脚本的话就：

```txt
1、在系统中搜索框 输入 Windos PowerShell
2、点击“管理员身份运行”
3、输入“ set-ExecutionPolicy RemoteSigned”回车
4、根据提示，输入A，回车
5、再次回到cnpm -v执行成功。
```

然后代码：

```vue
<script>
// 引入axios，不然提示axios未定义,引入之前记得下好了第三方库
import axios from 'axios'
export default {
  mounted () {
    axios.get("https://m.maoyan.com/ajax/movieOnInfoList?token=").then(res=>{
      console.log(res.data)
    })
  }
}
</script>
```

上面的代码还是会有个问题，如果出现跨域的问题的话就要处理了。

**[Vue.config.js的配置文件](https://cli.vuejs.org/zh/config/#%E7%9B%AE%E6%A0%87%E6%B5%8F%E8%A7%88%E5%99%A8)**

[vue cli代理用法官方文档](https://cli.vuejs.org/zh/config/#devserver-proxy)

### 跨域解决：

- 和 `package.json` 同级的（也是根目录）创建一个文件 ``vue.config.js`` 
-  ``vue.config.js``  内容(上面官方文档有内容）：

```js
module.exports = {
    // 改了配置文件就要重启服务器，不然没有效果
    devServer: {
      proxy: {
        // 把所有开头为/ajax请求的全部拦截下来
        // 由自己的服务器自己去https://m.maoyan.com的服务器上请求数据。再转发回来
        // 但是axios的get请求那里的链接要删除掉开头的https://m.maoyan.com部分
        '/ajax': {
          target: 'https://m.maoyan.com',
          // ws: true,
          changeOrigin: true
        },
        // '/foo': {
        //   target: '<other_url>'
        // }
      }
    }
}
```



## Vue 的全局变量（事件总线）

创建个文件专门放全局变量（我放在src/bus/index.js)文件里

需求：点击跳转页面后tabbar（底部的导航栏隐藏，返回后显示）

**例子的代码：**

```js
//index.js 事件总线
import Vue from 'vue'
var bus = new Vue()

// commonJs moudle.exports
// ES6的导出（要导出才可以使用)
export default bus;

```

**App.vue(主页部分代码):**

```vue
<script>
// 引入全局变量文件
import bus from '@/bus'
// ES6 的导出
export default {
  data () {
    return {
      isShow: true
    }
  },
  // 一开始就执行，不可以写在mounted（加载完在执行）里，不然一开始不是打开这个页面的话会有bug
  // 另外一边传递数据了，这边都还没有监听
  beforeCreate() {
    // 全局监听maizuo， data是传递过来的值
    bus.$on("maizuo", (data)=>{
      console.log("被通知了maizuo")
      this.isShow = data;
    })
  }
}
</script>
```

**Detail.vue(需要隐藏tabbar组件的组件部分代码)：**

```vue
<script>
  import bus from '@/bus'
  export default {
    // 显示就触发隐藏tabbar(传递值false给bus)，App.vue接收到就隐藏tabbar组件了
    beforeMount() {
      console.log("hidetabbar")
      // 传递给bus
      bus.$emit("maizuo", false)
    },
    // 页面关闭显示tabbar
    beforeDestroy() {
      bus.$emit("maizuo", true)
    }
  }
</script>

```

