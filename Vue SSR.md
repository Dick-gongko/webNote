# Vue SSR 服务端渲染

[官网：https://ssr.vuejs.org/zh/](https://ssr.vuejs.org/zh/)





vue文件在服务端渲染过程。

## 渲染一个 Vue 实例

```js
// 第 1 步：创建一个 Vue 实例
const Vue = require('vue')
const app = new Vue({
  template: `<div>{{myname}}--{{myage}}</div>`,
  data:{
	  myname:"悠哥",
	  myage: "16"
  }
})

// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer()

// 第 3 步：将 Vue 实例渲染为 HTML
//这个是旧的写法
// renderer.renderToString(app, (err, html) => {
//   if (err) throw err
//   console.log(html)
//   // => <div data-server-rendered="true">Hello World</div>
// })

// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
})
```

运行上面代码需要安装 ``vue-server-renderer`` 模块和 ``vue`` 模块

安装命令： ``cnpm install --save vue vue-server-renderer`` 安装vue和vue-server-renderer

运行上面代码命令： ``node .\01-rendertostring.js`` 。 ``01-rendertostring.js`` 是文件名

## 与服务器集成

在 Node.js 服务器中使用时相当简单直接，例如 [Express](https://expressjs.com/)：

```bash
npm install express --save
```

------

```js
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {// get任何请求都走这个回调函数
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    // 不加这句中文会有问题
	res.writeHead(200,{"Content-Type":'text/html;charset=utf8'})
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)
```

安装 ``express``  : ``cnpm install --save express`` 

还要安装 ``vue-server-renderer`` 模块和 ``vue`` 模块。不过上面已经安装了。所以就不用安装了。

