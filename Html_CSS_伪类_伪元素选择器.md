# Html CSS 伪类选择器 伪元素选择器

## 伪类（伪类选择器）

**伪类**：同一个标签，根据其**不同的种状态，有不同的样式**。这就叫做“伪类”。伪类用冒号来表示。

比如div是属于box类，这一点很明确，就是属于box类。但是a属于什么类？不明确。因为需要看用户点击前是什么状态，点击后是什么状态。所以，就叫做“伪类”。

- 

### 伪元素选择器

伪元素选择器的标志性符号是 `::`。

**1、格式：（第一部分）**

- `E::before` 设置在 元素E 前面（依据对象树的逻辑结构）的内容，配合content属性一起使用。
- `E::after` 设置在 元素E 后面（依据对象树的逻辑结构）的内容，配合content属性一起使用。

`E:after`、`E:before `在旧版本里是伪类，在 CSS3 这个新版本里是伪元素。新版本里，`E:after`、`E:before`会被自动识别为`E::after`、`E::before`，按伪元素来对待，这样做的目的是用来做兼容处理。

举例：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>

        /*::before 和::after 是通过 css 模拟出的html标签的效果*/
        span::before{
            content:"smyhvae";
            color:red;
            background-color: pink;
            width: 50px;
            height: 50px;
            display: inline-block;
        }

        span::after{
            content:"永不止步";
            color:yellowgreen;
        }

        /*给原本的span标签设置一个默认的属性*/
        span{
            border: 1px solid #000;
        }
    </style>
</head>
<body>

<span>生命壹号</span>
</body>
</html>
```

效果如下：

[![img](https://camo.githubusercontent.com/c66171f335128da5a1b85df92fb39e8ca45cdd1e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313430392e706e67)](https://camo.githubusercontent.com/c66171f335128da5a1b85df92fb39e8ca45cdd1e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313430392e706e67)

**上图可以看出**：

- 通过伪元素选择器，就可以添加出类似于span标签的效果（记得要结合 content 属性使用）。
- 通过这两个属性添加的伪元素，是**行内元素**，需要转换成块元素才能设置宽高。

**2、格式：（第二部分）**

- `E::first-letter` 设置元素 E 里面的**第一个字符**的样式。
- `E::first-line` 设置元素 E 里面的**第一行**的样式。
- `E::selection` 设置元素 E 里面被鼠标选中的区域的样式（一般设置颜色和背景色）。

`E::first-letter` 的举例：

[![img](https://camo.githubusercontent.com/d83c163450aedd99a40ce06bdc7a037e6003553d/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313433302e706e67)](https://camo.githubusercontent.com/d83c163450aedd99a40ce06bdc7a037e6003553d/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313433302e706e67)

`E::first-line`的举例：

[![img](https://camo.githubusercontent.com/992fc7534ce6902b147cb2263179892c152ceb0e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313433332e706e67)](https://camo.githubusercontent.com/992fc7534ce6902b147cb2263179892c152ceb0e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313433332e706e67)

最后来张表格：

[![img](https://camo.githubusercontent.com/c1a3f22b1425e592f60a0319b9e44771a03fdd50/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313530332e706e67)](https://camo.githubusercontent.com/c1a3f22b1425e592f60a0319b9e44771a03fdd50/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313530332e706e67)



