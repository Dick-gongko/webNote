# 微信小程序全局变量globalData

作者：H口先生

**globalData在app.js文件中app()全局应用实例中：**

```js
// app.js
App({
  globalData: 1
})
```

**一般全局变量我们这样写**

```js
App({
    globalData: {
        name: '穹妹',
        age: 18
    }
})
```

**在其他页面获取变量值**

```js
var app = getApp();
Page({
    onLoad: function() {
        console.log(app.globalData.name);
    }
})
```

**修改值**

```js
var app = getApp();
Page({
    onLoad: function() {
        getApp().globalData.name = "悠哥";
    }
})
```

ps：据说微信小程序的缓存坑有点多。很多时候用globalData问题可以少一些。