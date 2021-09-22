# HTML5 基础

## 语义化的标签

### 语义化的作用

语义标签对于我们并不陌生，如`<p>`表示一个段落、`<ul>`表示一个无序列表。**标签语义化的作用：**

- 能够便于开发者阅读和写出更优雅的代码。
- 同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容。
- 更好地搜索引擎优化。

总结：HTML的职责是描述一块内容是什么（或其意义），而不是它长什么样子；它的外观应该由CSS来决定。

### H5在语义上的改进

在此基础上，HTML5 增加了大量有意义的语义标签，更有利于搜索引擎或辅助设备理解 HTML 页面内容。HTML5会让HTML代码的内容更结构化、标签更语义化。

我们常见的 css+div 布局是：

[![img](https://camo.githubusercontent.com/0d42ecc9f9a9abdc3a1bc34c912942635eb51c7a/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313534362e706e67)](https://camo.githubusercontent.com/0d42ecc9f9a9abdc3a1bc34c912942635eb51c7a/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313534362e706e67)

在html5中，我们可以这样写：

[![img](https://camo.githubusercontent.com/9f73e4aff6426bbd7191e4b93428ef5c098a694e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313535302e706e67)](https://camo.githubusercontent.com/9f73e4aff6426bbd7191e4b93428ef5c098a694e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313535302e706e67)

传统的做法中，我们通过增加类名如`class="header"`、`class="footer"`，使HTML页面具有语义性，但是不具有通用性。

HTML5 则是通过新增语义标签的形式来解决这个问题，例如`<header></header>`、`<footer></footer>`等，这样就可以使其具有通用性。

**传统网页布局：**

```html
<!-- 头部 -->
<div class="header">
    <ul class="nav"></ul>
</div>

<!-- 主体部分 -->
<div class="main">
    <!-- 文章 -->
    <div class="article"></div>
    <!-- 侧边栏 -->
    <div class="aside"></div>
</div>

<!-- 底部 -->
<div class="footer">

</div>
```

**H5 的经典网页布局：**

```html
<!-- 头部 -->
<header>
    <ul class="nav"></ul>
</header>

<!-- 主体部分 -->
<div class="main">
    <!-- 文章 -->
    <article></article>
    <!-- 侧边栏 -->
    <aside></aside>
</div>

<!-- 底部 -->
<footer>

</footer>
```

## H5中新增的语义标签

- `<section>` 表示区块
- `<article>` 表示文章。如文章、评论、帖子、博客
- `<header>` 表示页眉
- `<footer>` 表示页脚
- `<nav>` 表示导航
- `<aside>` 表示侧边栏。如文章的侧栏
- <figure> 表示媒介内容分组。
- `<mark>` 表示标记 (用得少)
- `<progress>` 表示进度 (用得少)
- `<time>` 表示日期

本质上新语义标签与`<div>`、`<span>`没有区别，只是其具有表意性，使用时除了在HTML结构上需要注意外，其它和普通标签的使用无任何差别，可以理解成`<div class="nav">` 相当于`<nav>`。

**PS：单标签不用写关闭符号。**

## H5中新增的语义标签

- `<section>` 表示区块
- `<article>` 表示文章。如文章、评论、帖子、博客
- `<header>` 表示页眉
- `<footer>` 表示页脚
- `<nav>` 表示导航
- `<aside>` 表示侧边栏。如文章的侧栏
- <figure> 表示媒介内容分组。
- `<mark>` 表示标记 (用得少)
- `<progress>` 表示进度 (用得少)
- `<time>` 表示日期

本质上新语义标签与`<div>`、`<span>`没有区别，只是其具有表意性，使用时除了在HTML结构上需要注意外，其它和普通标签的使用无任何差别，可以理解成`<div class="nav">` 相当于`<nav>`。

PS：单标签不用写关闭符号。

### 新语义标签的兼容性处理

IE8 及以下版本的浏览器不支持 H5 和 CSS3。解决办法：引入`html5shiv.js`文件。

引入时，需要做if判断，具体代码如下：

```html
    <!--  条件注释 只有ie能够识别-->

    <!--[if lte ie 8]>
        <script src="html5shiv.min.js"></script>
    <![endif]-->
```

上方代码是**条件注释**：虽然是注释，但是IE浏览器可以识别出来。解释一下：

- l：less 更小
- t：than 比
- e：equal等于
- g：great 更大

PS:我们在测试 IE 浏览器的兼容的时候，可以使用软件 ietest，模拟IE6-IE11。

在不支持HTML5新标签的浏览器，会将这些新的标签解析成行内元素(inline)对待，所以我们只需要将其转换成块元素(block)即可使用。

但是在IE9版本以下，并不能正常解析这些新标签，但是可以识别通过document.createElement('tagName')创建的自定义标签。于是我们的解决方案就是：将HTML5的新标签全部通过document.createElement('tagName')来创建一遍，这样IE低版本也能正常解析HTML5新标签了。

当然，在实际开发中我们更多采用的办法是：检测IE浏览器的版本，来加载第三方的JS库来解决兼容问题（如上方代码所示）。

## H5中的表单

传统的Web表单已经越来越不能满足开发的需求，HTML5 在 Web 表单方向做了很大的改进，如拾色器、日期/时间组件等，使表单处理更加高效。

### H5中新增的表单类型

- `email` 只能输入email格式。自动带有验证功能。
- `tel` 手机号码。
- `url` 只能输入url格式。
- `number` 只能输入数字。
- `search` 搜索框
- `range` 滑动条
- `color` 拾色器
- `time` 时间
- `date` 日期
- `datetime` 时间日期
- `month` 月份
- `week` 星期

上面的部分类型是针对移动设备生效的，且具有一定的兼容性，在实际应用当中可选择性的使用。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>表单类型</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #F7F7F7;
        }

        form {
            max-width: 500px;
            width: 100%;
            margin: 32px auto 0;
            font-size: 16px;
        }

        label {
            display: block;
            margin: 10px 0;
        }

        input {
            width: 100%;
            height: 25px;
            margin-top: 2px;
            display: block;
        }

    </style>
</head>
<body>
<form action="">
    <fieldset>
        <legend>表单类型</legend>
        <label for="">
            email: <input type="email" name="email" required>
        </label>
        <label for="">
            color: <input type="color" name="color">
        </label>
        <label for="">
            url: <input type="url" name='url'>
        </label>
        <label for="">
            number: <input type="number" step="3" name="number">
        </label>
        <label for="">
            range: <input type="range" name="range" value="100">
        </label>
        <label for="">
            search: <input type="search" name="search">
        </label>
        <label for="">
            tel: <input type="tel" name="tel">
        </label>
        <label for="">
            time: <input type="time" name="time">
        </label>
        <label for="">
            date: <input type="date" name="date">
        </label>
        <label for="">
            datetime: <input type="datetime">
        </label>
        <label for="">
            week: <input type="week" name="month">
        </label>
        <label for="">
            month: <input type="month" name="month">
        </label>
        <label for="">
            datetime-local: <input type="datetime-local" name="datetime-local">
        </label>
        <input type="submit">
    </fieldset>
</form>
</body>
</html>
```

**输出：**

<div>
    		<style>
		       body {
		           margin: 0;
		           padding: 0;
		           background-color: #F7F7F7;
		       }
		       form {
		           max-width: 500px;
		           width: 100%;
		           margin: 32px auto 0;
		           font-size: 16px;
		       }
		       label {
		           display: block;
		           margin: 10px 0;
		       }
		       input {
		           width: 100%;
		           height: 25px;
		           margin-top: 2px;
		           display: block;
		       }
		   </style>
		<form action="">
		    <fieldset>
		        <legend>表单类型</legend>
		        <label for="">
		            email: <input type="email" name="email" required>
		        </label>
		        <label for="">
		            color: <input type="color" name="color">
		        </label>
		        <label for="">
		            url: <input type="url" name='url'>
		        </label>
		        <label for="">
		            number: <input type="number" step="3" name="number">
		        </label>
		        <label for="">
		            range: <input type="range" name="range" value="100">
		        </label>
		        <label for="">
		            search: <input type="search" name="search">
		        </label>
		        <label for="">
		            tel: <input type="tel" name="tel">
		        </label>
		        <label for="">
		            time: <input type="time" name="time">
		        </label>
		        <label for="">
		            date: <input type="date" name="date">
		        </label>
		        <label for="">
		            datetime: <input type="datetime">
		        </label>
		        <label for="">
		            week: <input type="week" name="month">
		        </label>
		        <label for="">
		            month: <input type="month" name="month">
		        </label>
		        <label for="">
		            datetime-local: <input type="datetime-local" name="datetime-local">
		        </label>
		        <input type="submit">
		    </fieldset>
		</form>
</div>



代码解释：

`<fieldset>` 标签将表单里的内容进行打包，代表一组；而`<legend> `标签的则是 fieldset 里的元素定义标题。

### 表单元素（标签）

这里讲两个表单元素。

**1、`<datalist>` 数据列表：**

```
<input type="text" list="myData">
<datalist id="myData">
    <option>本科</option>
    <option>研究生</option>
    <option>不明</option>
</datalist>
```

上方代码中，input里的list属性和 datalist 进行了绑定。

效果：

[![img](https://camo.githubusercontent.com/10fc58d05d60cfd3c393c12ae8c492fa829350a7/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313834352e676966)](https://camo.githubusercontent.com/10fc58d05d60cfd3c393c12ae8c492fa829350a7/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313834352e676966)

上图可以看出，数据列表可以自动提示。

2、`<keygen>`元素：

keygen 元素的作用是提供一种验证用户的可靠方法。

keygen 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键：一个公钥，一个私钥。

私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。

3、`<meter>`元素：度量器

- low：低于该值后警告
- high：高于该值后警告
- value：当前值
- max：最大值
- min：最小值。

举例：

```
	<meter  value="81"    min="0" max="100"  low="60"  high="80"/>
```

### 表单属性

- `placeholder` 占位符（提示文字）
- `autofocus` 自动获取焦点
- `multiple` 文件上传多选或多个邮箱地址
- `autocomplete` 自动完成（填充的）。on 开启（默认），off 取消。用于表单元素，也可用于表单自身(on/off)
- `form` 指定表单项属于哪个form，处理复杂表单时会需要
- `novalidate` 关闭默认的验证功能（只能加给form）
- `required` 表示必填项
- `pattern` 自定义正则，验证表单。例如

代码举例：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        form {
            width: 100%;
            /* 最大宽度*/
            max-width: 640px;
            /* 最小宽度*/
            min-width: 320px;
            margin: 0 auto;
            font-family: "Microsoft Yahei";
            font-size: 20px;
        }

        input {
            display: block;
            width: 100%;
            height: 30px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

<form action="">
    <fieldset>
        <legend>表单属性</legend>
        <label for="">
            用户名：<input type="text" placeholder="例如：smyhvae" autofocus name="userName" autocomplete="on" required/>
        </label>

        <label for="">
            电话：<input type="tel" pattern="1\d{10}"/>
        </label>

        <label for="">
            multiple的表单: <input type="file" multiple>
        </label>

        <!-- 上传文件-->
        <input type="file" name="file" multiple/>

        <input type="submit"/>
    </fieldset>
</form>

</body>
</html>
```

### 表单事件

- `oninput()`：用户输入内容时触发，可用于输入字数统计。
- `oninvalid()`：验证不通过时触发。比如，如果验证不通过时，想弹出一段提示文字，就可以用到它。

举例：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        form {
            width: 100%;
            /* 最大宽度*/
            max-width: 400px;
            /* 最小宽度*/
            min-width: 200px;
            margin: 0 auto;
            font-family: "Microsoft Yahei";
            font-size: 20px;
        }

        input {
            display: block;
            width: 100%;
            height: 30px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
<form action="">
    <fieldset>
        <legend>表单事件</legend>
        <label for="">
            邮箱：<input type="email" name="" id="txt1"/>
        </label>
        <label for="">
            输入的次数统计：<input type="text" name="" id="txt2"/>
        </label>

        <input type="submit"/>
    </fieldset>
</form>
<script>

    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var num = 0;

    txt1.oninput = function () {  //用户输入时触发

        num++;  //用户每输入一次，num自动加 1
        //将统计数显示在txt2中
        txt2.value = num;
    }
    txt1.oninvalid = function () {  //验证不通过时触发
        this.setCustomValidity('亲，请输入正确哦');  //设置验证不通过时的提示文字
    }

</script>
</body>
</html>
```

效果：

[![img](https://camo.githubusercontent.com/07fade797202d28f7da335eafee955e7db3ccdc5/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313932302e676966)](https://camo.githubusercontent.com/07fade797202d28f7da335eafee955e7db3ccdc5/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313932302e676966)

## 多媒体

在HTML5之前，在网页上播放音频/视频的通用方法是利用Flash来播放。但是大多情况下，并非所有用户的浏览器都安装了Flash插件，由此使得音频、视频播放的处理变得非常复杂；并且移动设备的浏览器并不支持Flash插件。

H5里面提供了视频和音频的标签。

### 音频

HTML5通过`<audio>`标签来解决音频播放的问题。

使用举例：

```
	<audio src="music/yinyue.mp3" autoplay controls> </audio>
```

效果如下：

[![img](https://camo.githubusercontent.com/986191029ef4bdcc7d04dc487bfa4f83a15da5b8/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313935382e706e67)](https://camo.githubusercontent.com/986191029ef4bdcc7d04dc487bfa4f83a15da5b8/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313935382e706e67)

我们可以通过附加属性，来更友好地控制音频的播放，如：

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。
- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）
- `loop` 循环播放。
- `preload` 预加载 同时设置 autoplay 时，此属性将失效。

**处理兼容性问题：**

由于版权等原因，不同的浏览器可支持播放的格式是不一样的：

[![img](https://camo.githubusercontent.com/b44d8e23a17d99f2d6498079625cb51fe156e2b8/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313934352e706e67)](https://camo.githubusercontent.com/b44d8e23a17d99f2d6498079625cb51fe156e2b8/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313934352e706e67)

为了做到多浏览器支持，可以采取以下兼容性写法：

```html
<!--推荐的兼容写法：-->
<audio controls loop>
    <source src="music/yinyue.mp3"/>
    <source src="music/yinyue.ogg"/>
    <source src="music/yinyue.wav"/>
    抱歉，你的浏览器暂不支持此音频格式
</audio>
```

代码解释：如果识别不出音频格式，就弹出那句“抱歉”。

### 视频

HTML5通过`<video>`标签来解决视频播放的问题。

使用举例：

```
	<video src="video/movie.mp4" controls autoplay></video>
```

我们可以通过附加属性，来更友好地控制视频的播放，如：

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。
- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）
- `loop` 循环播放。
- `preload` 预加载 同时设置 autoplay 时，此属性将失效。
- `width`：设置播放窗口宽度。
- `height`：设置播放窗口的高度。

由于版权等原因，不同的浏览器可支持播放的格式是不一样的：

[![img](https://camo.githubusercontent.com/2ff8793bbda3c4982e35833618b3d42d4ba38081/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f323032352e706e67)](https://camo.githubusercontent.com/2ff8793bbda3c4982e35833618b3d42d4ba38081/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f323032352e706e67)

兼容性写法：

```html
    <!--<video src="video/movie.mp4" controls  autoplay ></video>-->
    <!--  行内块 display:inline-block -->
    <video controls autoplay>
        <source src="video/movie.mp4"/>
        <source src="video/movie.ogg"/>
        <source src="video/movie.webm"/>
        抱歉，不支持此视频
    </video>
```

## DOM 操作

### 获取元素

- document.querySelector("selector") 通过CSS选择器获取符合条件的第一个元素。
- document.querySelectorAll("selector") 通过CSS选择器获取符合条件的所有元素，以类数组形式存在。

### 类名操作

- Node.classList.add("class") 添加class
- Node.classList.remove("class") 移除class
- Node.classList.toggle("class") 切换class，有则移除，无则添加
- Node.classList.contains("class") 检测是否存在class

### 自定义属性

js 里可以通过 `box1.index=100;` `box1.title` 来自定义属性和获取属性。

H5可以直接在标签里添加自定义属性，**但必须以 `data-` 开头**。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<!-- 给标签添加自定义属性 必须以data-开头 -->
<div class="box" title="盒子" data-my-name="smyhvae" data-content="我是一个div">div</div>
<script>
    var box = document.querySelector('.box');

    //自定义的属性 需要通过 dateset[]方式来获取
    console.log(box.dataset["content"]);  //打印结果：我是一个div
    console.log(box.dataset["myName"]);    //打印结果：smyhvae

    //设置自定义属性的值
    var num = 100;
    num.index = 10;
    box.index = 100;
    box.dataset["content"] = "aaaa";

</script>
</body>
</html>
```

