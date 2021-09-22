# Nuxt.js 框架使用

作者：H口先生

[官网：https://www.nuxtjs.cn/](https://www.nuxtjs.cn/)

## 安装cteate-nuxt-app脚手架

两种方式安装：

## 安装前注意事项

安装最新版本的会少一些东西。所以请安装旧版本的。

2.9.2版本： ``create-nuxt-app@2.9.2`` 

安装代码： ``npx create-nuxt-app@2.9.2 myapp`` 

### 全局安装

```text
// 全局安装命令
cnpm install -g create-nuxt-app

// 安装完到创建项目命令
create-nuxt-app myapp1
//myapp1是创建项目的名称。下次使用不用再次安装了，直接创建就可以了。
```

### 第二种

```txt
npx create-nuxt-app myapp
// 命令解释
// 这个命令会检查你电脑是否全局安装了create-nuxt-app。没有就给你下载安装局部的create-nuxt-app后再执行创建myapp项目。
// 如果有安装了create-nuxt-app了就直接创建myapp项目
// myapp 是自定义的项目名
```



### 创建项目

创建项目选项：

- ?Project name myapp 。询问你项目名称是myapp吗？是就回车。
- ？Project language。用什么语言。javaScript
- ？Project manageer。用什么管理安装包。什么都可以。我选择Npm
- ?Ui framework。用什么框架。我用Element
- Nuxt.js modules。需要请求库。选择Axios空格选择，选择了回车
- Linting tools.要安装代码格式化工具？可以安装可以不安装。我跳过，直接回车
- Testing framework 之后要不要测试。我直接跳过。选择none。回车
- **Rendering mode。选择Universal(SSR/SSG)这个是后端渲染模板。**如果选择了Single Page App 就是单页面开发了。回车。
- 一路回车



或者：

- ?Project name myapp 。询问你项目名称是myapp吗？是就回车。
- ？project description。项目描述。回车
- Author name。回车
- ？Project manageer。用什么管理安装包。什么都可以。我选择Npm
- ?Ui framework。用什么框架。我用Element
- ？Choose custom server framework。用什么后端引擎渲染。选择Express
- Nuxt.js modules。需要请求库。选择Axios空格选择，选择了回车
- Linting tools.要安装代码格式化工具？可以安装可以不安装。我跳过，直接回车
- Choose test framework 之后要不要测试。我直接跳过。选择none。回车
- **Rendering mode。选择Universal(SSR/SSG)这个是后端渲染模板。**如果选择了Single Page App 就是单页面开发了。回车。



### 启动项目

- 先进入到项目中 ``cd .\myapp\``
- 启动 ``npm run dev`` 
- 启动会问你是否同意他们收集异常are you interested in participation?同意接口可以了。

命令其实可以看项目里的 ``package.json`` 文件



### 目录结构介绍

- assets/放静态资源的
- components/放组件的和之前的 Vue CLI一样。组件写法也一样
- layouts/布局组件（根组件）。可以指定页面渲染的模板。后面会讲
- middleware/中间件。做路由拦截的话可以在中间件中做
- pages/和Vue CLI的views/文件夹一样。放页面级的组件和依赖的子组件都放这里
- plugins/放插件。例如放element-ui.js插件
- server/是对sever.js配置。一般我们不会去动它
- static/是放静态资源的。小图标这些。
- store/如果用vuex的话就放这里面。

### 没有server文件夹请老老实实安装旧版本

如果没有serVer文件解决方法：[https://blog.csdn.net/jokerjiaojiao/article/details/108041009](https://blog.csdn.net/jokerjiaojiao/article/details/108041009)

**经过测试没有用。**



### 声明式导航

**layouts/default.vue代码**

```vue
<template>
  <div>
	<ul>
		<nuxt-link to="/film" tag="li" activeClass="axtive">film</nuxt-link>
		<nuxt-link to="/cinema" tag="li" activeClass="axtive">cinema</nuxt-link>
		<nuxt-link to="/center" tag="li" activeClass="axtive">center</nuxt-link>
	</ul>
    <!-- 路由容器 -->
    <nuxt />
  </div>
</template>
```

用法和其他的没什么不同

## 路由

vue代码写在pagers文件夹下回自动匹配成一级路由。

### **Nuxt.js依据pagees目录结构自动生成vue-router模块的路由配置。**

​	**（1）要在页面之间使用路由，我们建议使用 ``<nuxt-Link>`` 标签。支持axtiveClass, tag** 

​	**（2）嵌套路由**

​		创建内嵌子路由，需要添加一个Vue文件，同时添加一个与该文件同名的目录来存放子视图文件。

​		Warning：还要在父组件  (.vue文件) 内增加 ``<nuxt-child />`` 用于显示子视图内容

```txt
pages/
--| film/
----|childname.vue
--|film.vue
```

​	**（3）重定向**

​				a. nuxt.config.js加上这段代码

```js
// 重定向 改了核心文件就要重启服务器
router: {
	// 路由扩长
	extendRoutes (routes) {
		routes.push({
			path: "/", //路径是/的重定向到/film/nowplaying
			redirect: '/film/nowplaying'
		})
	}
}
```

​				b. 利用中间件来处理。

middleware/redirect.js中间件文件夹里的代码。文件名是自定义的

```js
export default function({ isHMR, app, store, route, params, error, redirect}) { //导出一个方法
	if (isHMR) return
	// 路径是/film 就跳转到/film/nowplaying
	if(route.fullPath == '/film') {
		return redirect('/film/nowplaying')
	}
}
```

同时在nuxt.config.js加上这段代码

```js
// 重定向 改了核心文件就要重启服务器
router: {
	// 导入中间件文件 名字是自定义的，不过要和中间件的一样
	middleware: 'redirect',
	}
}
```

​	**（4）动态路由** 

`例如pages/下跳转到/detail组件。` 目录结构如下。文件名要是加下划线（名可以随便。下划线一定要）。（文件夹也可以加下划线（多级嵌套））

```txt
pages/
--| detail/
----| _myid.vue

// 跳转方法，点击事件里加这句代码就可以了 this.$router.push("/detail");
// 如果要传值的话 this.$router.push(`/detail/${id}`)
```

接收值方式，跳转到的组件中加：

```vue
{{$route.params.myid}}
```



## 标签介绍

- ``<nuxt />`` 路由容器



## 视图（自定义根组件）

- 在layout/里写好一个要改为根组件的vue。假设为test1.vue
- 然后给自定义根组件加内容。
- 在要访问自定义根组件的组件js代码里开头加一句：

```js
export default {
	layout: 'detailtemplate'
}
```



## 数据请求(asyncData)

### （1）如果数据不需要异步获取或处理，可以直接返回指定的字面对象作为组件的数据

- 在服务器端调用**asyncData**时，您可以访问用户请求的req和res对象。
- 在当前页面刷新，服务器端执行此函数
- 从其他页面跳转过来，客户端执行此函数

用这种方式是为了让搜索引擎可以爬取得到数据

代码：

```vue
<template>
	<div>
		<ul>
			<li v-for="data in datalist" :key="data.filmId" @click="handleClick(data)">
				<p>{{data.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	// 引入axios
	import axios from 'axios'
	export default {
		data() {
			return {
				datalist: []
			}
		},
        
		// 刷新当前页面服务器去获得了数据返回给用户，其他页面进来就用户自己获得数据。
		asyncData() {
			// 一定要retuen才可以拿得到数据
			return axios({
				url:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8337914",
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1603276896468688306176003"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
			}).then(res =>{
				console.log(res.data) // 如果是在当前页面刷新就打印在服务器上不是在客户端上。如果是其他页面进来的话就打印在用户端
				return {
					datalist: res.data.data.films // 服务器自己请求了数据得到结果后赋值给变量datalist。数据改变了页面而已渲染了
				} // 状态
			})
		}
	}
</script>
```

#### asyncDate()获取路由的传参

```vue
<template>
	<div>detail--{{$route.params.myid}}</div>
</template>
<script>
	export default {
		asyncData(data) {
			console.log(data.params)
			// this.$route.params.myid在这里（js）是用不了的
			// 不过在标签中可以拿到传过来的数据。
		}
	}
</script>
```

## 反向代理

**注意：**测试的时候可能没有看出来需不要代理。以为在当前页面刷新的话本来就是服务器获取了数据后才发送给客户端的。所以要其他页面跳转过来才可以看出来跨域不。

### 反向代理的配置

安装 ``proxy `` 安装命令：`` cnpm install --save @nuxtjs/proxy  `` 或 ``npm i @nuxtjs/proxy -D``

请求路径为：``https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=88EC112012CD11EBBCEA4DAE5F0887A0DBA69B016276499A968979C25768E0B8&optimus_risk_level=71&optimus_code=10`` 

在**nuxt.config.js文件**里写好以下内容。（modules这些本来就有的了，添加相应的内容就可以了）：

```js
modules: [
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
'@nuxtjs/proxy'
],
axios: {
	proxy:true
},
proxy:{
	'/ajax': { // 路径是/ajax的全部拦截 
		target: "https://m.maoyan.com",
		changeOrigin: true
	}
},
```

知识补充：在 ``asyncData(){}`` 里有个参数 ``process.server`` 如果是服务器请求(直接刷新或者访问当前页)时``process.server`` 为true，客户端发请求(其他页面进来的)``process.server``值为false。

请求数据的组件代码：

```vue
import axios from 'axios'
export default {
	asyncData(data) {
		console.log(data.params)
		// this.$route.params.myid在这里（js）是用不了的
		// 不过在标签中可以拿到传过来的数据。
		return axios({
			//三目写法，服务器发请求的process.server值为true。客户端发请求值为false。如果这样写服务器访问就访问不到地址了。因为没有开头的域名
			 url: process.server?"https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=88EC112012CD11EBBCEA4DAE5F0887A0DBA69B016276499A968979C25768E0B8&optimus_risk_level=71&optimus_code=10":"/ajax/movieOnInfoList?token=&optimus_uuid=88EC112012CD11EBBCEA4DAE5F0887A0DBA69B016276499A968979C25768E0B8&optimus_risk_level=71&optimus_code=10"
		 }).then(res=>{
			 console.log(res.data);
			 return {
				 datalist:res.data.movieList
			 }
		 })
	}
}
```



## 安装sass

命令： ``cnpm install --save sass-loader node-sass``

