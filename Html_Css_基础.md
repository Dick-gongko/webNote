



# Html Css 基础

## CSS的单位

html中的单位只有一种，那就是像素px，所以单位是可以省略的，但是在CSS中不一样。 **CSS中的单位是必须要写的**，因为它没有默认单位。

### 绝对单位

1 `in`=2.54`cm`=25.4`mm`=72`pt`=6`pc`。

各种单位的含义：

- `in`：英寸Inches (1 英寸 = 2.54 厘米)
- `cm`：厘米Centimeters
- `mm`：毫米Millimeters
- `pt`：点Points，或者叫英镑 (1点 = 1/72英寸)
- `pc`：皮卡Picas (1 皮卡 = 12 点)

### 相对单位

`px`：像素 

`em`：印刷单位相当于12个点  

`%`：百分比，相对周围的文字的大小

为什么说像素px是一个相对单位呢，这也很好理解。比如说，电脑屏幕的的尺寸是不变的，但是我们可以让其显示不同的分辨率，在不同的分辨率下，单个像素的长度肯定是不一样的啦。

## font 字体属性

CSS中，有很多**非布局样式**（与布局无关），包括：字体、行高、颜色、大小、背景、边框、滚动、换行、装饰性属性（粗体、斜体、下划线）等。

这一段，我们先来讲一下字体属性。

css样式中，常见的字体属性有以下几种：

```css
p{
	font-size: 50px; 		/*字体大小*/
	line-height: 30px;      /*行高*/
	font-family: 幼圆,黑体; 	/*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/
	font-style: italic ;		/*italic表示斜体，normal表示不倾斜*/
	font-weight: bold;	/*粗体*/
	font-variant: small-caps;  /*小写变大写*/
}
```

### 行高

CSS中，所有的行，都有行高。盒子模型的padding，绝对不是直接作用在文字上的，而是作用在“行”上的。

垂直方向来看，文字在自己的行里是居中的。比如，文字是14px，行高是24px，那么padding就是5px：

[![img](https://camo.githubusercontent.com/2cda6b0d0e35f83d8b373a58e87da3af995398d9/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303830385f323232302e706e67)](https://camo.githubusercontent.com/2cda6b0d0e35f83d8b373a58e87da3af995398d9/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303830385f323232302e706e67)



为了严格保证字在行里面居中，我们的工程师有一个约定： **行高、字号，一般都是偶数**。这样可以保证，它们的差一定偶数，就能够被2整除。

### 如何让单行文本垂直居中

小技巧：如果一段文本只有一行，如果此时设置**行高 = 盒子高**，就可以保证单行文本垂直居中。这个很好理解。

### `vertical-align: middle;` 属性

```css
vertical-align: middle; /*指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。*/
```

### 字号、行高、字体三大属性

（1）字号：

```css
	font-size:14px;
```

（2）行高：

```css
	line-height:24px;
```

（3）字体：（font-family就是“字体”，family是“家庭”的意思）

```css
	font-family:"宋体";
```

是否加粗属性以及上面这三个属性，我们可以连写：（是否加粗、字号 font-size、行高 line-height、字体 font-family）

格式：

```css
	font: 加粗 字号/行高/ 字体
```

举例：

```css
	font: 400 14px/24px "宋体";
```

PS：400是nomal，700是bold。

上面这几个属性可以连写，但是有一个要求，font属性连写至少要有**字号和字体**(其中一个就可以了），否则连写是不生效的（相当于没有这一行代码）。

**2、字体属性的说明：**

（1）网页中不是所有字体都能用，因为这个字体要看用户的电脑里面装没装，比如你设置：

```css
	font-family: "华文彩云";
```

上方代码中，如果用户的 Windows 电脑里面没有这个字体，那么就会变成宋体。

页面中，中文我们一般使用：微软雅黑、宋体、黑体。英文使用：Arial、Times New Roman。页面中如果需要其他的字体，就需要单独安装字体，或者切图。

（2）为了防止用户电脑里，没有微软雅黑这个字体。就要用英语的逗号，提供备选字体。如下：（可以备选多个）

```css
	font-family: "微软雅黑","宋体";
```

上方代码表示：如果用户电脑里没有安装微软雅黑字体，那么就是宋体。

（3）我们须将英语字体放在最前面，这样所有的中文，就不能匹配英语字体，就自动的变为后面的中文字体：

```css
	font-family: "Times New Roman","微软雅黑","宋体";
```

上方代码的意思是，英文会采用Times New Roman字体，而中文会采用微软雅黑字体（因为美国人设计的Times New Roman字体并不针对中文，所以中文会采用后面的微软雅黑）。比如说，对于`smyhvae哈哈哈`这段文字，`smyhvae`会采用Times New Roman字体，而`哈哈哈`会采用微软雅黑字体。

可是，如果我们把中文字体写在前面：(错误写法)

```css
	font-family: "微软雅黑","Times New Roman","宋体";
```

上方代码会导致，中文和英文都会采用微软雅黑字体。

（4）所有的中文字体，都有英语别名。

微软雅黑的英语别名：

```css
	font-family: "Microsoft YaHei";
```

于是，当我们把字号、行高、字体这三个属性合二为一时，也可以写成：

```css
	font:12px/30px  "Times New Roman","Microsoft YaHei","SimSun";
```

（5）**行高可以用百分比，表示字号的百分之多少。**

一般来说，百分比都是大于100%的，因为行高一定要大于字号。

比如说， `font:12px/200% “宋体”`等价于`font:12px/24px “宋体”`。`200%`可以理解成word里面的2倍行高。

反过来， `font:16px/48px “宋体”;`等价于`font:16px/300% “宋体”`。

## 文本属性

CSS样式中，常见的文本属性有以下几种：

- `letter-spacing: 0.5cm ;` 单个字母之间的间距
- `word-spacing: 1cm;` 单词之间的间距
- `text-decoration: none;` 字体修饰：none 去掉下划线、**underline 下划线**、line-through 中划线、overline 上划线
- `text-transform: lowercase;` 单词字体大小写。uppercase大写、lowercase小写
- `color:red;` 字体颜色
- `text-align: center;` 在当前容器中的对齐方式。属性值可以是：left、right、center（**在当前容器的中间**）、justify
- `text-transform: lowercase;` 单词的字体大小写。属性值可以是：`uppercase`（单词大写）、`lowercase`（单词小写）、`capitalize`（每个单词的首字母大写）

这里来一张表格的图片吧，一览无遗：

![img](https://camo.githubusercontent.com/eedba3fdcf4a77513183078909dfdbdca8362c81/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30332d6373732d31382e706e67)

## 列表属性

```
ul li{
	list-style-image:url(images/2.gif) ;  /*列表项前设置为图片*/
	margin-left:80px;  /*公有属性*/
}
```

另外还有一个简写属性叫做`list-style`，它的作用是：将上面的多个属性写在一个声明中。

这里来一张表格的图片吧，一览无遗：

[![img](https://camo.githubusercontent.com/8d85ff3a6d81a463641c609288ae20ee8023c56e/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30332d6373732d32362e706e67)](https://camo.githubusercontent.com/8d85ff3a6d81a463641c609288ae20ee8023c56e/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30332d6373732d32362e706e67)

## CSS float 属性

| 值      | 描述                                                 |
| :------ | :--------------------------------------------------- |
| left    | 元素向左浮动。                                       |
| right   | 元素向右浮动。                                       |
| none    | 默认值。元素不浮动，并会显示在其在文本中出现的位置。 |
| inherit | 规定应该从父元素继承 float 属性的值。                |

**ps:li标签中用``float：left``是平铺的作用



## overflow属性：超出范围的内容要怎么处理

`overflow`属性的属性值可以是：

- `visible`：默认值。多余的内容不剪切也不添加滚动条，会全部显示出来。
- `hidden`：不显示超过对象尺寸的内容。
- `auto`：如果内容不超出，则不显示滚动条；如果内容超出，则显示滚动条。
- `scroll`：Windows 平台下，无论内容是否超出，总是显示滚动条。Mac 平台下，和 `auto` 属性相同。

## 鼠标的属性 cursor

鼠标的属性`cursor`有以下几个属性值：

- `auto`：默认值。浏览器根据当前情况自动确定鼠标光标类型。
- `pointer`：IE6.0，竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。
- `hand`：和`pointer`的作用一样：竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。

比如说，我想让鼠标放在那个标签上时，光标显示手状，代码如下：

```css
p:hover{
	cursor: pointer;
}
```

另外还有以下的属性：（不用记，需要的时候查一下就行了）

- all-scroll :　 IE6.0 有上下左右四个箭头，中间有一个圆点的光标。用于标示页面可以向上下左右任何方向滚动。

- col-resize :　 IE6.0 有左右两个箭头，中间由竖线分隔开的光标。用于标示项目或标题栏可以被水平改变尺寸。

- crosshair :　 简单的十字线光标。

- default :　 客户端平台的默认光标。通常是一个箭头。

- hand :　 竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。

- move :　 十字箭头光标。用于标示对象可被移动。

- help :　 带有问号标记的箭头。用于标示有帮助信息存在。

- no-drop :　 IE6.0 带有一个被斜线贯穿的圆圈的手形光标。用于标示被拖起的对象不允许在光标的当前位置被放下。

- not-allowed :　 IE6.0 禁止标记(一个被斜线贯穿的圆圈)光标。用于标示请求的操作不允许被执行。

- progress :　 IE6.0 带有沙漏标记的箭头光标。用于标示一个进程正在后台运行。

- row-resize :　 IE6.0 有上下两个箭头，中间由横线分隔开的光标。用于标示项目或标题栏可以被垂直改变尺寸。

- text :　 用于标示可编辑的水平文本的光标。通常是大写字母 I 的形状。

- vertical-text :　 IE6.0 用于标示可编辑的垂直文本的光标。通常是大写字母 I 旋转90度的形状。

- wait :　 用于标示程序忙用户需要等待的光标。通常是沙漏或手表的形状。

- *-resize :　 用于标示对象可被改变尺寸方向的箭头光标。

- ```
                   w-resize | s-resize | n-resize | e-resize | ne-resize | sw-resize | se-resize | nw-resize
  ```

- url ( url ) :　 IE6.0 用户自定义光标。使用绝对或相对 url 地址指定光标文件(后缀为 .cur 或者 .ani )。

## 滤镜

这里只举一个滤镜的例子吧。比如说让图片变成灰度图的效果，可以这样设置滤镜：

```css
	<img src="3.jpg" style="filter:gray()">
```



# 背景属性

## background 的常见背景属性

**css2.1** 中，常见的背景属性有以下几种：（经常用到，要记住）

- `background-color:#ff99ff;` 设置元素的背景颜色。
- `background-image:url(images/2.gif);` 将图像设置为背景。
- `background-repeat: no-repeat;` 设置背景图片是否重复及如何重复，默认平铺满。（重要）
  - `no-repeat`不要平铺；
  - `repeat-x`横向平铺；
  - `repeat-y`纵向平铺。
- `background-position:center top;` 设置背景图片在当前容器中的位置。
- `background-attachment:scroll;` 设置背景图片是否跟着滚动条一起移动。 属性值可以是：`scroll`（与fixed属性相反，默认属性）、`fixed`（背景就会被固定住，不会被滚动条滚走）。
- 另外还有一个综合属性叫做`background`，它的作用是：将上面的多个属性写在一个声明中。

**CSS3** 中，新增了一些background属性：

- background-origin
- background-clip 背景裁切
- background-size 调整尺寸

## `background-repeat`属性

`background-repeat:no-repeat;`设置背景图片是否重复及如何重复，默认平铺满。属性值可以是：

- `no-repeat`（不要平铺）
- `repeat-x`（横向平铺）
- `repeat-y`（纵向平铺）

## `background-position`属性

`background-position`属性指的是**背景定位**属性。公式如下：

在描述属性值的时候，有两种方式：用像素描述、用单词描述。下面分别介绍。

**1、用像素值描述属性值：**

格式如下：

```
	background-position:向右偏移量 向下偏移量;
```

属性值可以是正数，也可以是负数。比如：`100px 200px`、`-50px -120px`。

**2、用单词描述属性值：**

格式如下：

```
	background-position: 描述左右的词 描述上下的词;
```

- 描述左右的词：left、center、right
- 描述上下的词：top 、center、bottom

比如说，`right center`表示将图片放到右边的中间；`center center`表示将图片放到正中间。

比如说，`bottom`表示图片的底边和父亲**底边贴齐**（好好理解）。

## background-attachment 属性

- ```
  background-attachment:scroll;
  ```

   

  设置背景图片是否固定。属性值可以是：

  - `fixed`（背景就会被固定住，不会被滚动条滚走）。
  - `scroll`（与fixed属性相反，默认属性）

## background-color：背景颜色的表示方法

css2.1 中，颜色的表示方法有三种：单词、rgb表示法、十六进制表示法。

### 十六进制表示法

比如红色：

```
background-color: #ff0000;
```

PS:所有用`#`开头的值，都是16进制的。

**十六进制可以简化为3位，所有#aabbcc的形式，能够简化为#abc**。

### RGB 表示法

RGB 表示三原色“红”red、“绿”green、“蓝”blue。

比如红色：

```css
background-color: rgb(255,0,0);
```

### RGBA 表示法

```css
    background-color: rgba(0, 0, 255, 0.3);
```

### HSLA 表示法

举例：

```
	background-color: hsla(240,50%,50%,0.4);
```

解释：

- `H` 色调，取值范围 0~360。0或360表示红色、120表示绿色、240表示蓝色。
- `S` 饱和度，取值范围 0%~100%。值越大，越鲜艳。
- `L` 亮度，取值范围 0%~100%。亮度最大时为白色，最小时为黑色。
- `A` 透明度，取值范围 0~1。

**关于设置透明度的其他方式：**

（1）`opacity: 0.3;` 会将整个盒子及子盒子设置透明度。也就是说，当盒子设置半透明的时候，会影响里面的子盒子。

（2）`background: transparent;` 可以单独设置透明度，但设置的是完全透明（不可调节透明度）。

### background 综合属性

background属性和border一样，是一个综合属性，可以将多个属性写在一起。(在[盒子模型](http://www.cnblogs.com/smyhvae/p/7256371.html)这篇文章中专门讲到border)

举例1:

```css
	background:red url(1.jpg) no-repeat 100px 100px fixed;
```

等价于：

```css
	background-color:red;
	background-image:url(1.jpg);
	background-repeat:no-repeat;
	background-position:100px 100px;
	background-attachment:fixed;
```

以后，我们可以用小属性层叠掉大属性。

上面的属性中，可以任意省略其中的一部分。

比如说，对于下面这样的属性：

```css
	background: blue url(images/wuyifan.jpg) no-repeat 100px 100px;
```

## `background-size`属性：背景尺寸

`background-size`属性：设置背景图片的尺寸。

格式举例：

```
	/* 宽、高的具体数值 */
	background-size: 500px 500px;

	/* 宽高的百分比（相对于容器的大小） */
	background-size: 50% 50%;   // 如果两个属性值相同，可以简写成：background-size: 50%;

	background-size: 100% auto;  //这个属性可以自己试验一下。

	/* cover：图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */
	background-size: cover;

	/* contain：将图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。  */
	background-size: contain;
```

这里我们对属性值 `cover` 和 `contain` 进行再次强调：

- `cover`：图片始终**填充满**容器，且保证**长宽比不变**。图片如果有超出部分，则超出部分会被隐藏。
- `contain`：将图片**完整地**显示在容器中，且保证**长宽比不变**。可能会导致容器的部分区域留白。

## 背景原点：`background-origin` 属性

`background-origin` 属性：控制背景从什么地方开始显示。

格式举例：

```css
	/* 从 padding-box 内边距开始显示背景图 */
	background-origin: padding-box;           //默认值

	/* 从 border-box 边框开始显示背景图  */
	background-origin: border-box;

	/* 从 content-box 内容区域开始显示背景图  */
	background-origin: content-box;
```

## `background-clip`属性：设置元素的背景（背景图片或颜色）是否延伸到边框下面

格式举例：

`background-clip: content-box;` 超出的部分，将裁剪掉。属性值可以是：

- `border-box` 超出 border-box 的部分，将裁剪掉
- `padding-box` 超出 padding-box 的部分，将裁剪掉
- `content-box` 超出 content-box 的部分，将裁剪掉

## 同时设置多个背景

我们可以给一个盒子同时设置多个背景，用以逗号隔开即可。可用于自适应局。

## 渐变：background-image

渐变是CSS3当中比较丰富多彩的一个特性，通过渐变我们可以实现许多炫丽的效果，有效的减少图片的使用数量，并且具有很强的适应性和可扩展性。

渐变分为：

- 线性渐变：沿着某条直线朝一个方向产生渐变效果。
- 径向渐变：从一个**中心点**开始沿着**四周**产生渐变效果。
- 重复渐变。

### 线性渐变

格式：

```css
    background-image: linear-gradient(方向, 起始颜色, 终止颜色);
    background-image: linear-gradient(to right, yellow, green);
```

参数解释：

- 方向可以是：`to left`、`to right`、`to top`、`to bottom`、角度`30deg`（指的是顺时针方向30°）。

格式举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 500px;
            height: 100px;
            margin: 10px auto;
            border: 1px solid #000;
        }
        /* 语法：
            linear-gradient(方向，起始颜色，终止颜色);
            方向：to left   to right  to top   to bottom 　角度　30deg
            起始颜色
            终止颜色
        */
        div:nth-child(1) {
            background-image: linear-gradient(to right, yellow, green);
        }
        /* 不写方向，表示默认的方向是：从上往下 */
        div:nth-child(2) {
            background-image: linear-gradient(yellow, green);
        }
        /* 方向可以指定角度 */
        div:nth-child(3) {
            width: 100px;
            height: 100px;
            background-image: linear-gradient(135deg, yellow, green);
        }
        /* 0%的位置开始出现黄色，40%的位置开始出现红色的过度。70%的位置开始出现绿色的过度，100%的位置开始出现蓝色 */
        div:nth-child(4) {
            background-image: linear-gradient(to right,
            yellow 0%,
            red 40%,
            green 70%,
            blue 100%);
        }
        /* 颜色之间，出现突变 */
        div:nth-child(5) {
            background-image: linear-gradient(45deg,
            yellow 0%,
            yellow 25%,
            blue 25%,
            blue 50%,
            red 50%,
            red 75%,
            green 75%,
            green 100%
            );
        }
        div:nth-child(6) {
            background-image: linear-gradient(to right,
            #000 0%,
            #000 25%,
            #fff 25%,
            #fff 50%,
            #000 50%,
            #000 75%,
            #fff 75%,
            #fff 100%
            );
        }
    </style>
</head>
<body>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</body>
</html>
```

效果如下：

[![img](https://camo.githubusercontent.com/145801276052be9615911cf68f7ceb4f06e8fcb6/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f323232322e706e67)](https://camo.githubusercontent.com/145801276052be9615911cf68f7ceb4f06e8fcb6/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f323232322e706e67)



### 径向渐变

格式：

```css
	background-image: radial-gradient(辐射的半径大小, 中心的位置, 起始颜色, 终止颜色);
	background-image: radial-gradient(100px at center,yellow ,green);
```

解释：围绕中心点做渐变，半径是150px，从黄色到绿色做渐变。

中心点的位置可以是：at left right center bottom top。如果以像素为单位，则中心点参照的是盒子的左上角。

当然，还有其他的各种参数。格式举例：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 250px;
            height: 250px;
            border: 1px solid #000;
            margin: 20px;
            float: left;
        }
        /*
            径向渐变：
            radial-gradient（辐射的半径大小, 中心的位置，起始颜色，终止颜色）;
            中心点位置：at  left  right  center bottom  top
        */
        /*辐射半径为100px，中心点在中间*/
        div:nth-child(1) {
            background-image: radial-gradient(100px at center, yellow, green);
        }
        /*中心点在左上角*/
        div:nth-child(3) {
            background-image: radial-gradient(at left top, yellow, green);
        }
        div:nth-child(2) {
            background-image: radial-gradient(at 50px 50px, yellow, green);
        }
        /*设置不同的颜色渐变*/
        div:nth-child(4) {
            background-image: radial-gradient(100px at center,
            yellow 0%,
            green 30%,
            blue 60%,
            red 100%);
        }
        /*如果辐射半径的宽高不同，那就是椭圆*/
        div:nth-child(5) {
            background-image: radial-gradient(100px 50px at center, yellow, green);
        }
    </style>
</head>
<body>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</body>
</html>
```

效果如下：

[![img](https://camo.githubusercontent.com/29004158f3db92395c0a9d1e54900ca69310d375/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f323235362e706e67)](https://camo.githubusercontent.com/29004158f3db92395c0a9d1e54900ca69310d375/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f323235362e706e67)

## clip-path：裁剪出元素的部分区域做展示

`clip-path`属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。

虽然`clip-path`不是背景属性，但这个属性非常强大，但往往会结合背景属性一起使用，达到一些效果。

举例：（鼠标悬停时，放大裁剪的区域）

```css
    .div1 {
        width: 320px;
        height: 320px;
        border: 1px solid red;
        background: url(http://img.smyhvae.com/20191006_1410.png) no-repeat;
        background-size: cover;

        /* 裁剪出圆形区域 */
        clip-path: circle(50px at 100px 100px);
        transition: clip-path .4s;
    }
    .div1:hover{
        /* 鼠标悬停时，裁剪出更大的圆形 */
        clip-path: circle(80px at 100px 100px);
    }
```

`clip-path`属性的好处是，即使做了任何裁剪，**容器的占位大小是不变的**。比如上方代码中，容器的占位大小一直都是 320px * 320px。这样的话，也方便我们做一些动画效果。

`clip-path: polygon()`举例：

[![img](https://camo.githubusercontent.com/05965269d07a47f388b3a9b831a4e3db527bce7f/687474703a2f2f696d672e736d79687661652e636f6d2f32303139313030365f313433302e706e67)](https://camo.githubusercontent.com/05965269d07a47f388b3a9b831a4e3db527bce7f/687474703a2f2f696d672e736d79687661652e636f6d2f32303139313030365f313433302e706e67)



## CSS的继承性

我们来看下面这样的代码，来引入继承性：

```css
div{
	color:red;
}
```

上方代码中，我们给div标签增加红色属性，却发现，div里的每一个子标签`<p>`也增加了红色属性。于是我们得到这样的结论：

> 有一些属性，当给自己设置的时候，自己的后代都继承上了，这个就是**继承性。**

继承性是从自己开始，直到最小的元素。

但是呢，如果再给上方的代码加一条属性：

```css
div{
    color: red;
    border: 2px solid red;
}
```

这样的话只有div加了border。而p标签没有border属性。因为：

- 关于文字样式的属性，都具有继承性。这些属性包括：color、 text-开头的、line-开头的、font-开头的。
- 关于盒子、定位、布局的属性，都不能继承。

## CSS的层叠性

**层叠性：就是css处理冲突的能力。** 所有的权重计算，没有任何兼容问题！

如果个div里加的一样的属性，值不一样。比如加了class和id。最后用的是id的值。

当多个选择器，选择上了某个元素的时候，要按照如下顺序统计权重：

- id 选择器
- 类选择器、属性选择器、伪类选择器
- 标签选择器、伪元素选择器

因为对于相同方式的样式表，其选择器排序的优先级为：

**ID选择器 > 类选择器 > 标签选择器**

### 层叠性举例

#### 举例1：计算权重

[![img](https://camo.githubusercontent.com/f445a4e1c18d8e09c14f4d5b5fc14373f752fd89/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732355f323133382e706e67)](https://camo.githubusercontent.com/f445a4e1c18d8e09c14f4d5b5fc14373f752fd89/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732355f323133382e706e67)

如上图所示，统计各个选择器的数量，优先级高的胜出。文字的颜色为红色。

PS：不进位，实际上能进位（奇淫知识点：255个标签，等于1个类名）但是没有实战意义！

#### 举例2：权重相同时

第一个样式和第二个样式的权重相同。但第二个样式的书写顺序靠后，因此以第二个样式为准（就近原则）

**如果大家的权重相同，那么就采用就近原则：谁描述的近，用谁的**

这里说的近不是class=“ a b“ 的b近。而是写style的时候谁写最后

### CSS样式表的冲突的总结

- 1、对于相同的选择器（比如同样都是类选择器），其样式表排序：行级样式 > 内嵌样式表 > 外部样式表（就近原则）
- 2、对于相同类型的样式表（比如同样都是内部样式表），其选择器排序：ID选择器 > 类选择器 > 标签选择器

> 总结：就近原则。ID选择器优先级最大。

### !important标记：优先级最高

用法：

```css
div{
    color: green !impotrant;
}
#div1{
    color: red;
}
<div id="div1">我是绿色</div>
```

字体是绿色

因为加了``!important``权重无穷大

**错误的语法：**

```css
font-size:60px; !important;    不能把!important写在外面
font-size:60px important;      不能忘记感叹号
```

**（2）!important无法提升继承的权重**

```css
	div{
		color:red !important;
	}
	p{
		color:blue;
	}
	/*html*/
	<div>
		<p>蓝色</p>
	</div>
```

字体是蓝色

PS：做网站的时候，!important 尽量不要用。否则会让css写的很乱。

### 各种选择器

IE6层面兼容的选择器： 标签选择器、id选择器、类选择器、后代、交集选择器、并集选择器、通配符。如下：

```css
p
#box
.spec
div p
div.spec
div,p
*
```

IE7能够兼容的：儿子选择器、下一个兄弟选择器。如下：

```css
div>p
h3+p
```

IE8能够兼容的：

```css
ul li:first-child
ul li:last-child
```

## 盒子模型

### 前言

盒子模型，英文即box model。无论是div、span、还是a都是盒子。

但是，图片、表单元素一律看作是文本，它们并不是盒子。这个很好理解，比如说，一张图片里并不能放东西，它自己就是自己的内容。

### 盒子中的区域

一个盒子中主要的属性就5个：width、height、padding、border、margin。如下：

- width和height：**内容**的宽度、高度（不是盒子的宽度、高度）。
- padding：内边距。
- border：边框。
- margin：外边距。

CSS盒模型和IE盒模型的区别：

- 在 **标准盒子模型**中，**width 和 height 指的是内容区域**的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。
- **IE盒子模型**中，**width 和 height 指的是内容区域+border+padding**的宽度和高度。

### `<body>`标签也有margin

`<body>`标签有必要强调一下。很多人以为`<body>`标签占据的是整个页面的全部区域，其实是错误的，正确的理解是这样的：整个网页最大的盒子是`<document>`，即浏览器。而`<body>`是`<document>`的儿子。

**浏览器给`<body>`默认的margin大小是8个像素**，此时`<body>`占据了整个页面的一大部分区域，而不是全部区域。

**如果想保持一个盒子的真实占有宽度不变，那么加width的时候就要减padding。加padding的时候就要减width**。因为盒子变胖了是灾难性的，这会把别的盒子挤下去。

### 认识padding

#### padding区域也有颜色

padding就是内边距。padding的区域有背景颜色，css2.1前提下，并且背景颜色一定和内容区域的相同。也就是说，background-color将填充**所有border以内的区域。**

### padding有四个方向

padding是4个方向的，所以我们能够分别描述4个方向的padding。

方法有两种，第一种写小属性；第二种写综合属性，用空格隔开。

小属性的写法：

```css
	padding-top: 30px;
	padding-right: 20px;
	padding-bottom: 40px;
	padding-left: 100px;
```

综合属性的写法：(上、右、下、左)（顺时针方向，用空格隔开。margin的道理也是一样的）

```css
padding:30px 20px 40px 100px;
```

如果只写了三个值，则顺序为：上、右、下。左和右一样。

### 一些元素，默认带有padding

一些元素，默认带有`padding`，比如ul标签，不加任何样式的ul，也是有40px的padding-left。

所以，我们做站的时候，为了便于控制，总是喜欢清除这个默认的padding。

可以使用`*`进行清除：

```
		*{
			margin: 0;
			padding: 0;
		}
```

但是，`*`的效率不高，所以我们使用并集选择器，罗列所有的标签（不用背，有专业的清除默认样式的样式表，今后学习）：

```css
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{
    margin:0;
    padding:0;
}
```

## 认识border

border就是边框。边框有三个要素：像素（粗细）、线型、颜色。

比如：

```
.div1{
	width: 10px;
	height: 10px;
	border: 2px solid red;
}
```

颜色如果不写，默认是黑色。另外两个属性如果不写，则无法显示边框。

### border-style

border的所有的线型如下：（我们可以通过查看`CSS参考手册`得到）

[![img](https://camo.githubusercontent.com/3cb90e6054796fbd542aefecdda409edb9eea6fd/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313433352e706e67)](https://camo.githubusercontent.com/3cb90e6054796fbd542aefecdda409edb9eea6fd/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313433352e706e67)

比如`border:10px ridge red;`这个属性，在chrome和firefox、IE中有细微差别：（因为可以显示出效果，因此并不是兼容性问题，只是有细微差别而已）

如果公司里面的设计师是处女座的，追求极高的**页面还原度**，那么不能使用css来制作边框。就要用到图片，就要切图了。

所以，比较稳定的border-style就几个：solid、dashed、dotted。

### border拆分

border是一个大综合属性。比如说：

```
border:1px solid red;
```

就是把上下左右这四个方向的边框，都设置为 1px 宽度、线型实线、red颜色。

border属性是能够被拆开的，有两大种拆开的方式：

- （1）按三要素拆开：border-width、border-style、border-color。（一个border属性是由三个小属性综合而成的）
- （2）按方向拆开：border-top、border-right、border-bottom、border-left。

现在我们明白了：**一个border属性，是由三个小属性综合而成的**。如果某一个小属性后面是空格隔开的多个值，那么就是上右下左的顺序。举例如下：

```css
border-width:10px 20px;
border-style:solid dashed dotted;
border-color:red green blue yellow;
```

（1）按三要素拆：

```css
border-width:10px;    //边框宽度
border-style:solid;   //线型
border-color:red;     //颜色。
```

等价于：

```css
border:10px solid red;
```

### border-image 属性

比如：

```
border-image: url(.img.png) 30 round;
```

这个属性在实际开发中用得不多，暂时忽略。

### 举例1：利用 border 属性画一个三角形（小技巧）

完整代码如下：

```css
div{
	width: 0;
	height: 0;
	border: 50px solid transparent;
	border-top-color: red;
	border-bottom: none;
}
```

步骤如下：

（1）当我们设置盒子的width和height为0时，此时效果如下：

[![img](https://camo.githubusercontent.com/898f7bf969e81f4f107509e3146742e062b0b9fb/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313633392e706e67)](https://camo.githubusercontent.com/898f7bf969e81f4f107509e3146742e062b0b9fb/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313633392e706e67)

（2）然后将border的底部取消：

[![img](https://camo.githubusercontent.com/2d487e3ade5ad6722389b587605fb65ed6276ef0/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313634352e706e67)](https://camo.githubusercontent.com/2d487e3ade5ad6722389b587605fb65ed6276ef0/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313634352e706e67)

（3）最后设置border的左边和右边为白色或者**透明**：

[![img](https://camo.githubusercontent.com/d7fe1f760b1f4417ac35dfc43483b5cc4067229d/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313634392e706e67)](https://camo.githubusercontent.com/d7fe1f760b1f4417ac35dfc43483b5cc4067229d/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732385f313634392e706e67)

这样，一个三角形就画好了。

### 举例2：利用 border 属性画一个三角形（更推荐的技巧）

上面的例子1中，画出来的是直角三角形，可如果我想画等边三角形，要怎么做呢？

完整代码如下：（用 css 画等边三角形）

```css
.div1{
	width: 0;
	height: 0;
	border-top: 30px solid red;
	/* 通过改变 border-left 和 border-right 中的像素值，来改变三角形的形状 */
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
}
```

效果如下：

[![img](https://camo.githubusercontent.com/9f7b4e7d0c7eca21351534d985dc31f614aa89f5/687474703a2f2f696d672e736d79687661652e636f6d2f32303139313030345f313833302e706e67)](https://camo.githubusercontent.com/9f7b4e7d0c7eca21351534d985dc31f614aa89f5/687474703a2f2f696d672e736d79687661652e636f6d2f32303139313030345f313833302e706e67)

另外，我们在上方代码的基础之上，再加一个 `border-radus: 20px;` 就能画出一个扇形。

## 行内元素和块状元素

**行内元素和块级元素的区别：**（非常重要）

行内元素：

- 与其他行内元素并排；
- 不能设置宽、高。默认的宽度，就是文字的宽度。

块级元素：

- 霸占一行，不能与其他任何元素并列；
- 能接受宽、高。如果不设置宽度，那么宽度将默认变为父亲的100%。

**行内元素和块级元素的分类：**

在以前的HTML知识中，我们已经将标签分过类，当时分为了：文本级、容器级。

从HTML的角度来讲，标签分为：

- 文本级标签：p、span、a、b、i、u、em。
- 容器级标签：div、h系列、li、dt、dd。

> PS：为甚么说p是文本级标签呢？因为p里面只能放文字&图片&表单元素，p里面不能放h和ul，p里面也不能放p

现在，从CSS的角度讲，CSS的分类和上面的很像，就p不一样：

- 行内元素：除了p之外，所有的文本级标签，都是行内元素。p是个文本级，但是是个块级元素。
- 块级元素：所有的容器级标签都是块级元素，还有p标签。

我们把上面的分类画一个图，即可一目了然：

[![img](https://camo.githubusercontent.com/1d60eb929868357791a218d380598c4e90c31926/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732395f313534352e706e67)](https://camo.githubusercontent.com/1d60eb929868357791a218d380598c4e90c31926/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732395f313534352e706e67)

### 行内元素和块级元素的相互转换

我们可以通过`display`属性将块级元素和行内元素进行相互转换。display即“显示模式”。

#### 块级元素可以转换为行内元素：

一旦，给一个块级元素（比如div）设置：

```
display: inline;
```

那么，这个标签将立即变为行内元素，此时它和一个span无异。inline就是“行内”。也就是说：

那么，这个标签将立即变为行内元素，此时它和一个span无异。inline就是“行内”。也就是说：

- 此时这个div不能设置宽度、高度；
- 此时这个div可以和别人并排了。

#### 行内元素转换为块级元素：

同样的道理，一旦给一个行内元素（比如span）设置：

```
display: block;
```

那么，这个标签将立即变为块级元素，此时它和一个div无异。block”是“块”的意思。也就是说：

- 此时这个span能够设置宽度、高度
- 此时这个span必须霸占一行了，别人无法和他并排
- 如果不设置宽度，将撑满父亲

## 浮动的性质

> 浮动是css里面布局用的最多的属性。

如果给这两个div增加一个浮动属性，比如`float: left;`这样的话``div``就并排。**例：**

```html
<div style="width:100px;height:100px;float: left;background-color: #66ccff;"></div>
<div style="width:100px;height:100px;float: left;background-color:#ccff66"></div>
```

输出：

<div style="width:100px;height:100px;float: left;background-color: #66ccff;"></div><div style="width:100px;height:100px;float: left;background-color:#ccff66"></div>







### 性质1：浮动的元素脱标

脱标即脱离标准流。我们来看几个例子。

```html
<div style="width:100px;height:100px;float: left;background-color: #66ccff;"></div>
<div style="width:200px;height:200px;background-color:#ccff66"></div>
```

输出：

<div style="width:100px;height:100px;float: left;background-color: #66ccff;"></div>
<div style="width:200px;height:200px;background-color:#ccff66"></div>

在默认情况下，两个div标签是上下进行排列的。现在由于float属性让上图中的第一个`<div>`标签出现了浮动，于是这个标签在另外一个层面上进行排列。而第二个`<div>`还在自己的层面上遵从标准流进行排列。

### 性质2：浮动的元素互相贴靠

我们来看一个例子就明白了。

我们给三个div均设置了`float: left;`属性之后，然后设置宽高。当改变浏览器窗口大小时，可以看到div的贴靠效果：

[![img](https://camo.githubusercontent.com/52d8fcf508e93a7876d49c4f60a7b8abc4cd5356/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303733305f313931302e676966)](https://camo.githubusercontent.com/52d8fcf508e93a7876d49c4f60a7b8abc4cd5356/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303733305f313931302e676966)

上图显示，3号如果有足够空间，那么就会靠着2号。如果没有足够的空间，那么会靠着1号大哥。 如果没有足够的空间靠着1号大哥，3号自己去贴左墙。

不过3号自己去贴墙的时候，注意：

[![img](https://camo.githubusercontent.com/6801a7f4f3ac6bcc4533cd9d1cedc7ffcd2b04d3/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303733305f313932382e676966)](https://camo.githubusercontent.com/6801a7f4f3ac6bcc4533cd9d1cedc7ffcd2b04d3/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303733305f313932382e676966)

上图显示，3号贴左墙的时候，并不会往1号里面挤。

同样，float还有一个属性值是`right`，这个和属性值`left`是对称的。

### 性质3：浮动的元素有“字围”效果

我们让div浮动，p不浮动。

```css
div{
    float:left;
}
```

[![img](https://camo.githubusercontent.com/b2600df1d3e53b67ae1df3db8e7894e72172729f/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303733305f323030352e706e67)](https://camo.githubusercontent.com/b2600df1d3e53b67ae1df3db8e7894e72172729f/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303733305f323030352e706e67)

**div挡住了p，但不会挡住p中的文字**，形成“字围”效果。

总结：**标准流中的文字不会被浮动的盒子遮挡住**。（文字就像水一样）

关于浮动我们要强调一点，浮动这个东西，为避免混乱，我们在初期一定要遵循一个原则：**永远不是一个东西单独浮动，浮动都是一起浮动，要浮动，大家都浮动。**

### 性质4：收缩

收缩：一个浮动的元素，如果没有设置width，那么将自动收缩为内容的宽度（这点非常像行内元素）。

```html
<div style="float: left;background-color: #ccff66;">
H口先生
</div>
```

<div style="float: left;background-color: #ccff66;">
H口先生
</div>



## 相对定位

**相对定位**：让元素相对于自己原来的位置，进行位置调整（可用于盒子的位置微调）

```css
div{
	position: relative;
}
```

**相对定位**：不脱标，老家留坑，**别人不会把它的位置挤走**。

### 相对定位的定位值

- left：盒子右移
- right：盒子左移
- top：盒子下移
- bottom：盒子上移

PS：负数表示相反的方向。

## 绝对定位

**绝对定位**：定义横纵坐标。原点在父容器的左上角或左下角。横坐标用left表示，纵坐标用top或者bottom表示。

格式举例如下：

```css
position: absolute;  /*绝对定位*/
```

### 绝对定位脱标

**绝对定位的盒子脱离了标准文档流。**

所以，所有的标准文档流的性质，绝对定位之后都不遵守了。

绝对定位之后，标签就不区分所谓的行内元素、块级元素了，不需要`display:block`就可以设置宽、高了。

### 绝对定位的参考点（重要）

（1）如果用**top描述**，那么参考点就是**页面的左上角**，而不是浏览器的左上角

（2）如果用**bottom描述**，那么参考点就是**浏览器首屏窗口尺寸**（好好理解“首屏”二字），对应的页面的左下角：

用bottom的定位的时候，参考的是浏览器首屏大小对应的页面左下角。

### 以盒子为参考点

**一个绝对定位的元素，如果父辈元素中也出现了已定位**（无论是绝对定位、相对定位，还是固定定位）的元素，那么将以**父辈这个元素，为参考点。**

（1） 要听最近的已经定位的祖先元素的，不一定是父亲，可能是爷爷：

（2）不一定是相对定位，任何定位，都可以作为儿子的参考点：

子绝父绝、**子绝父相**、子绝父固，都是可以给儿子定位的。但是在工程上，如果子绝、父绝，没有一个盒子在标准流里面了，所以页面就不稳固，没有任何实战用途。

**工程应用：**

“**子绝父相**”有意义：这样可以保证父亲没有脱标，儿子脱标在父亲的范围里面移动。于是，工程上经常这样做：

> 父亲浮动，设置相对定位（零偏移），然后让儿子绝对定位一定的距离。

（3）绝对定位的儿子，无视参考的那个盒子的padding（就是padding的左上角不包括padding的大小）

### 让绝对定位中的盒子在父亲里居中

我们知道，如果想让一个**标准流中的盒子在父亲里居中**（水平方向上），可以将其设置`margin: 0 auto`属性（相对定位才可以这样的）。

可如果盒子是绝对定位的，此时已经脱标了，如果还想让其居中（位于父亲的正中间），可以这样做：

```css
	div {
		width: 600px;
		height: 60px;
		position: absolute;  绝对定位的盒子
		left: 50%;           首先，让左边线居中
		top: 0;
		margin-left: -300px;  然后，向左移动宽度（600px）的一半
	}
```

## 固定定位

**固定定位**：就是相对浏览器窗口进行定位。无论页面如何滚动，这个盒子显示的位置不变。

备注：IE6不兼容。

**用途1**：网页右下角的“返回到顶部”

比如我们经常看到的网页右下角显示的“返回到顶部”，就可以固定定位。

```css
<style type="text/css">
		.backtop{
			position: fixed;   /*固定定位*/
			bottom: 100px;
			right: 30px;
			width: 60px;
			height: 60px;
			background-color: gray;
			text-align: center;
			line-height:30px;
			color:white;
			text-decoration: none;   /*去掉超链接的下划线*/
		}
	</style>
```

### 5、z-index属性：

**z-index**属性：表示谁压着谁。数值大的压盖住数值小的。

有如下特性：

（1）属性值大的位于上层，属性值小的位于下层。

（2）z-index值没有单位，就是一个正整数。默认的z-index值是0。

（3）如果大家都没有z-index值，或者z-index值一样，那么在HTML代码里写在后面，谁就在上面能压住别人。定位了的元素，永远能够压住没有定位的元素。

（4）只有定位了的元素，才能有z-index值。也就是说，不管相对定位、绝对定位、固定定位，都可以使用z-index值。**而浮动的元素不能用**。

（5）从父现象：父亲怂了，儿子再牛逼也没用。就是父级小了子级再大也没用。

z-index属性的应用还是很广泛的。当好几个已定位的标签出现覆盖的现象时，我们可以用这个z-index属性决定，谁处于最上方。也就是**层级**的应用。

**层级：**

（1）必须有定位（除去static）

（2）用`z-index`来控制层级数。

## 文本

### text-shadow：设置文本的阴影

格式举例：

```
	text-shadow: 20px 27px 22px pink;
```

参数解释：水平位移 垂直位移 模糊程度 阴影颜色

### 举例：凹凸文字效果

text-shadow 可以设置多个阴影，每个阴影之间使用逗号隔开。我们来看个例子。

代码如下：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            background-color: #666;
        }

        div {
            font-size: 100px;
            text-align: center;
            font-weight: bold;
            font-family: "Microsoft Yahei";
            color: #666;
        }

        /* text-shadow 可以设置多个阴影，每个阴影之间使用逗号隔开*/
        .tu {
            text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
        }

        .ao {
            text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff;
        }
    </style>
</head>
<body>
<div class="ao">生命壹号</div>
<div class="tu">生命壹号</div>
</body>
</html>
```

效果如下：

[![img](https://camo.githubusercontent.com/c33d421d400d45b0d2da75720de183ed0cd0282c/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313631372e706e67)](https://camo.githubusercontent.com/c33d421d400d45b0d2da75720de183ed0cd0282c/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313631372e706e67)

上图中，实现凹凸文字效果的方式比较简单，给左上角放白色的阴影，右下角放黑色的阴影，就达到了凹下去的效果。

## 盒模型中的 box-sizing 属性

我们在**[之前的文章](http://www.cnblogs.com/smyhvae/p/7256371.html)**中专门讲过盒子模型。

CSS3 对盒模型做出了新的定义，即允许开发人员**指定盒子宽度和高度的计算方式**。

这就需要用到 `box-sizing`属性。它的属性值可以是：`content-box`、`border-box`。解释如下。

**外加模式：**（css的默认方式）

```css
	box-sizing: content-box;
```

解释：此时设置的 width 和 height 是**内容区域**的宽高。`盒子的实际宽度 = 设置的 width + padding + border`。此时改变 padding 和 border 的大小，也不会改变内容的宽高，而是盒子的总宽高发生变化。

**内减模式：**【需要注意】

```css
	box-sizing: border-box;
```

解释：此时设置的 width 和 height 是**盒子**的总宽高。`盒子的实际宽度 = 设置的 width`。此时改变 padding 和 border 的大小，会改变内容的宽高，盒子的总宽高不变。

## 边框

边框的属性很多，其中**边框圆角**和**边框阴影**这两个属性，应用十分广泛，兼容性也相对较好，且符合**渐进增强**的原则，需要重点熟悉。

### 边框圆角：`border-radius` 属性

边框的每个圆角，本质上是一个圆，圆有**水平半径**和**垂直半径**：如果二者相等，就是圆；如果二者不等， 就是椭圆。

单个属性的写法：

```css
	border-top-left-radius: 60px 120px;        //参数解释：水平半径   垂直半径

	border-top-right-radius: 60px 120px;

	border-bottom-left-radius: 60px 120px;

	border-bottom-right-radius: 60px 120px;
```

复合写法：

```css
	border-radius: 60px/120px;             //参数：水平半径/垂直半径

	border-radius: 20px 60px 100px 140px;  //从左上开始，顺时针赋值。如果当前角没有值，取对角的值

	border-radius: 20px 60px;
```

最简洁的写法：（四个角的半径都相同时）

```css
	border-radius: 60px;
```

### 边框阴影：`box-shadow` 属性

格式举例：

```
	box-shadow: 水平偏移 垂直偏移 模糊程度 阴影大小 阴影颜色

	box-shadow: 15px 21px 48px -2px #666;
```

参数解释：

- 水平偏移：正值向右 负值向左。
- 垂直偏移：正值向下 负值向上。
- 模糊程度：不能为负值。

效果如下：

[![img](https://camo.githubusercontent.com/74a1102fa873aa67f86d8ca9e909361d0e457693/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f323032372e706e67)](https://camo.githubusercontent.com/74a1102fa873aa67f86d8ca9e909361d0e457693/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f323032372e706e67)

另外，后面还可以再加一个inset属性，表示内阴影。如果不写，则默认表示外阴影。例如：

```css
	box-shadow:3px 3px 3px 3px #666 inset;
```

### 边框图片

边框图片有以下属性：

```css
	/* 边框图片的路径*/
	border-image-source: url("images/border.png");

	/* 图片边框的裁剪*/
	border-image-slice: 27;

	/*图片边框的宽度*/
	border-image-width: 27px;

	/*边框图片的平铺*/
	/* repeat :正常平铺 但是可能会显示不完整*/
	/*round: 平铺 但是保证 图片完整*/
	/*stretch: 拉伸显示*/
	border-image-repeat: stretch;
```

我们也可以写成一个综合属性：

```css
	 border-image: url("images/border.png") 27/20px round;
```

