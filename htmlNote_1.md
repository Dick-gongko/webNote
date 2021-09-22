





# HTML基础比较_1

## HTML的专有名词

- 网页 ：由各种标记组成的一个页面就叫网页。
- 主页(首页) : 一个网站的起始页面或者导航页面。
- 标记： 比如`<p>`称为开始标记 ，`</p>`称为结束标记，也叫标签。每个标签都规定好了特殊的含义。
- 元素：比如`<p>内容</p>`称为元素.
- 属性：给每一个标签所做的辅助信息。
- XHTML：符合XML语法标准的HTML。
- DHTML：dynamic，动态的。`javascript + css + html`合起来的页面就是一个 DHTML。
- HTTP：超文本传输协议。用来规定客户端浏览器和服务端交互时数据的一个格式。SMTP：邮件传输协议，FTP：文件传输协议。

## HTML基础知识

#### html骨架标签分类

| 标签名            | 定义       | 说明                                                    |
| ----------------- | ---------- | ------------------------------------------------------- |
| `<html></html>`   | HTML标签   | 页面中最大的标签，我们成为根标签                        |
| `<head></head>`   | 文档的头部 | 注意在head标签中我们必须要设置的标签是title             |
| `<title></title>` | 文档的标题 | 让页面拥有一个属于自己的网页标题                        |
| `<body></body>`   | 文档的主体 | 元素包含文档的所有内容，页面内容 基本都是放到body里面的 |

### 页面语言 `lang`

下面这行标签，用于指定页面的语言类型：

```
<html lang="en">
```

最常见的语言类型有两种：

- en：定义页面语言为英语。
- zh-CN：定义页面语言为中文。

### 头标签内部的常见标签如下：

- `<title>`：指定整个网页的标题，在浏览器最上方显示。
- `<base>`：为页面上的所有链接规定默认地址或默认目标。
- `<meta>`：提供有关页面的基本信息
- `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
- `<link>`：定义文档与外部资源的关系。

### `<body>`标签

`<body>`标签的属性有：

- `bgcolor`：设置整个网页的背景颜色。
- `background`：设置整个网页的背景图片。
- `text`：设置网页中的文本颜色。
- `leftmargin`：网页的左边距。IE浏览器默认是8个像素。
- `topmargin`：网页的上边距。
- `rightmargin`：网页的右边距。
- `bottommargin`：网页的下边距。

`<body>`标签另外还有一些属性，这里用个例子来解释：



## 排版标签：

- `<h1>`    			     标题
- `<p>`                       段落标签
- `<hr />`                水平线标签
- `<br />`                换行标签
- `<div>`                  把标签中的内容划分为独立的区块
- `<sspan>`              同上
- `<center>`            内容居中标签，这个标签的内容都会居于浏览器中间。不建议使用，建议用css布局实现。
- `<pre>`                  预定义。保留标签内的全部空白和换行符。原封不动的输出。

HTML标签是分等级的，HTML将所有的标签分为两种：

- **文本级标签**：p、span、a、b、i、u、em。文本级标签里只能放**文字、图片、表单元素**。（a标签里不能放a和input）
- **容器级标签**：div、h系列、li、dt、dd。容器级标签里可以放置任何东西。

从学习p的第一天开始，就要牢牢记住：**p标签是一个文本级标签，p里面只能放文字、图片、表单元素**。其他的一律不能放。

## 字体标签

### 下划线、中划线、斜体

- `<u>`：下划线标记
- `<s>`或`<del>`：中划线标记（删除线）。例：`<s>删除线</s>`    <s>删除线</s>
- `<i>`或`<em>`：斜体标记
- `<b>`或`<strong>`:粗体标签。例：`<b>粗</b>`   <b>粗</b>
- `<font>`:字体标签。例：`<font face="微软雅黑" color="#66CCFF" size="5">Text</font>`   <font face="微软雅黑" color="#66CCFF" size="5">Text</font>

## 超链接

### 1、外部链接：链接到外部文件

举例：

```
<a href="02页面.html">点击进入另外一个文件</a>
```

a是英语`anchor`“锚”的意思，就好像这个页面往另一个页面扔出了一个锚。是一个文本级的标签。

当然，我们也可以直接点进链接，访问一个网址。代码举例如下：

```
<a href="http://www.baidu.com" target="_blank">点我点我</a>
```

### 2、锚链接

**锚链接**：给超链接起一个名字，作用是**在本页面或者其他页面的的不同位置进行跳转**。比如说，在网页底部有一个向上箭头，点击箭头后回到顶部，这个就可以利用锚链接。

### 3、邮件链接

代码举例：

```
<a href="mailto:xxx@163.com">点击进入我的邮箱</a>
```

效果：点击之后，会弹出outlook，作用不大。

### 超链接的属性

- `href`：目标URL

- `title`：悬停文本。

- `name`：主要用于设置一个锚点的名称。

- `target`：告诉浏览器用什么方式来打开目标页面。`target`属性有以下几个值：
  - `_self`：在同一个网页中显示（默认值）
  - `_blank`：**在新的窗口中打开**。
- `_parent`：在父窗口中显示
  - `_top`：在顶级窗口中显示

`title`属性举例：

```
<a href="09_img.html" title="很好看哦">结婚照</a>
```

例：<a href="09_img.html" title="很好看哦">结婚照</a>

`target`属性举例：

```
<a href="1.html" title="悬停文本" target="_blank">链接的内容</a>
```

blank就是“空白”的意思，就表示新建一个空白窗口。为啥有一个_ ，就是规定，无需解释。 也就是说，如果不写`target=”_blank”`那么就是在相同的标签页打开，如果写了`target=”_blank”`，就是在新的空白标签页中打开。



#### 备注1：分清楚img和a标签的各自的属性

区别如下：

```
<img src="1.jpg" />
<a href="1.html"></a>
```

#### 备注2：a是一个文本级的标签

比如一个段落中的所有文字都能够被点击，那么应该是p包裹a：

```
<p>
	<a href="">段落段落段落段落段落段落</a>
</p>
```

而不是a包裹p：

```
<a href="">
	<p>
		段落段落段落段落段落段落
	</p>
</a>
```

a的语义要小于p，a就是可以当做文本来处理，所以p里面相当于放的就是纯文字。



## img标签介绍

### 介绍

img: 英文全称 image（图像），代表的是一张图片。

如果要想在网页中显示图像，就可以使用img 标签，它是一个单标签。语法如下：

```
<img src="图片的URL" />
```

## img标签的其他属性

### width、height 属性

- `width`：图像的宽度。
- `height`：图像的高度。

width和height，在 HTML5 中的单位是 CSS 像素，在 HTML 4 中既可以是像素，也可以是百分比。可以只指定 width 和 height 中的一个值，浏览器会根据原始图像进行缩放。

**重要提示**：如果要想保证图片等比例缩放，请只设置width和height中其中一个。

### title 属性

- `title`：**提示性文本**。鼠标悬停时出现的文本。

title 属性不该被用作一幅图片在 alt 之外的补充说明信息。如果一幅图片需要小标题，使用 figure 或 figcaption 元素。

title 元素的值一般作为提示条(tooltip)呈现给用户，在光标于图片上停下后显示出来。尽管这确实能给用户提供更多的信息，您不该假定用户真的能看到：用户可能只有键盘或触摸屏。如果要把特别重要的信息提供给用户，可以选择上面提供的一种方法将其内联显示，而不是使用 title。

举例：

```
<img src="images/1.jpg" width="300" height="`188" title="这是我老婆">
```

### align属性

图片的`align`属性：**图片和周围文字的相对位置**。属性取值可以是：bottom（默认）、center、top、left、right。

**默认**情况下文字在图片低端对齐

**center**`<img src="tets.jpg" align="center">`这样就是文字在图片高度中间的位置对齐。

**left**`<img src="tets.jpg" align="left">`这样如果标签左边有文字也会挤过去右边。然后图片在窗口的最右边。

## 列表标签

列表标签分为三种。

### 1、无序列表`<ul>`，无序列表中的每一项是`<li>`

英文单词解释如下：

- ul：unordered list，“无序列表”的意思。
- li：list item，“列表项”的意思。

例如：

```
<ul>
	<li>Text1</li>
	<li>Text2</li>
</ul>
```

<ul><li>Text1</li><li>Text2</li></ul>

注意：

- li不能单独存在，必须包裹在ul里面；反过来说，ul的“儿子”不能是别的东西，只能有li。
- 再次强调，ul的作用，并不是给文字增加小圆点的，而是增加无序列表的“语义”的。

**属性：**

- `type="属性值"`。属性值可以选： `disc`(实心原点，默认)，`square`(实心方点)，`circle`(空心圆)。

- 例（空心圆）：`<ul type="circle"><li>Text</li></ul>`

  <ul type="circle"><li>Text</li></ul>

声明：ul的儿子，只能是li。但是li是一个容器级标签，**li里面什么都能放，甚至可以再放一个ul**。

**属性：**

- `type="属性值"`。属性值可以是：1(阿拉伯数字，默认)、a、A、i、I。结合`start`属性表示`从几开始`。

举例：

```
<ol type="1">
	<li>呵呵</li>
	<li>呵呵</li>
	<li>呵呵</li>
</ol>
```

### 定义列表`<dl>`

> 定义列表的作用非常大。

`<dl>`英文单词：definition list，没有属性。dl的子元素只能是dt和dd。

- `<dt>`：definition title 列表的标题，这个标签是必须的
- `<dd>`：definition description 列表的列表项，如果不需要它，可以不加

备注：dt、dd只能在dl里面；dl里面只能有dt、dd。

举例：

```
<dl>
	<dt>第一条</dt>
	<dd>你若是觉得你有实力和我玩，良辰不介意奉陪到底</dd>
	<dd>我会让你明白，我从不说空话</dd>
	<dd>我是本地的，我有一百种方式让你呆不下去；而你，无可奈何</dd>

	<dt>第二条</dt>
	<dd>良辰最喜欢对那些自认能力出众的人出手</dd>
	<dd>你可以继续我行我素，不过，你的日子不会很舒心</dd>
	<dd>你只要记住，我叫叶良辰</dd>
	<dd>不介意陪你玩玩</dd>
	<dd>良辰必有重谢</dd>

</dl>
```

**效果：**

第一条

​			若是觉得你有实力和我玩，良辰不介意奉陪到底。。。。。

第二条

​			。。。。 



由上可以看出，定义列表表达的语义是两层：

- （1）是一个列表，列出了几个dd项目
- （2）每一个词儿都有自己的描述项。

备注：dd是描述dt的。

定义列表用法非常灵活，可以一个dt配很多dd：

真实案例：（京东最下方）

**结构如下**

```
<dl>
	<dt>购物指南</dt>
	<dd>
		<a href="#">购物流程</a>
		<a href="#">会员介绍</a>
		<a href="#">生活旅行/团购</a>
		<a href="#">常见问题</a>
		<a href="#">大家电</a>
		<a href="#">联系客服</a>
	</dd>
</dl>
<dl>
	<dt>配送方式</dt>
	<dd>
		<a href="#">上门自提</a>
		<a href="#">211限时达</a>
		<a href="#">配送服务查询</a>
		<a href="#">配送费收取标准</a>
		<a href="#">海外配送</a>
	</dd>
</dl>
```

## 表格标签

表格标签用`<table>`表示。 一个表格`<table>`是由每行`<tr>`组成的，每行是由每个单元格`<td>`组成的。 所以我们要记住，一个表格是由行组成的（行是由列组成的），而不是由行和列组成的。 在以前，要想固定标签的位置，唯一的方法就是表格。现在可以通过CSS定位的功能来实现。但是现在在做页面的时候，表格作用还是有一些的。

例如，一行的单元格：

```html
<table>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
```

上面的表格中没有加文字，所以在生成的网页中什么都看不到。 例如，3行4列的单元格：

```html
<table>

	<tr>
		<td>许嵩</td>
		<td>29</td>
		<td>男</td>
		<td>安徽</td>
	</tr>

	<tr>
		<td>邓紫棋</td>
		<td>23</td>
		<td>女</td>
		<td>香港</td>
	</tr>

</table>
```

例（输出是没有边框的，只是这里显示了边框）：

<table><tr>
		<td>许嵩</td>
		<td>29</td>
		<td>男</td>
		<td>安徽</td>
	</tr><tr>
	<td>邓紫棋</td>
	<td>23</td>
	<td>女</td>
	<td>香港</td>
</tr></table>



**`<table>`**属性

- `border`：边框。像素为单位。
- `style="border-collapse:collapse;"`：单元格的线和表格的边框线合并（表格的两边框合并为一条）
- `width`：宽度。像素为单位。
- `height`：高度。像素为单位。
- `bordercolor`：表格的边框颜色。
- `align`：**表格**的水平对齐方式。属性值可以填：left right center。 注意：这里不是设置表格里内容的对齐方式，如果想设置内容的对齐方式，要对单元格标签`<td>`进行设置）
- `cellpadding`：单元格内容到边的距离，像素为单位。默认情况下，文字是紧挨着左边那条线的，即默认情况下的值为0。 注意不是单元格内容到四条边的距离哈，而是到一条边的距离，默认是与左边那条线的距离。如果设置属性`dir="rtl"`，那就指的是内容到右边那条线的距离。
- `cellspacing`：单元格和单元格之间的距离（外边距），像素为单位。默认情况下的值为0
- `bgcolor="#99cc66"`：表格的背景颜色。
- `background="路径src/..."`：背景图片。 背景图片的优先级大于背景颜色。
- `bordercolorlight`：表格的上、左边框，以及单元格的右、下边框的颜色
- `bordercolordark`：表格的右、下边框，以及单元格的上、左的边框的颜色 这两个属性的目的是为了设置3D的效果。
- `dir`：公有属性，单元格内容的排列方式(direction)。 可以 取值：`ltr`：从左到右（left to right，默认），`rtl`：从右到左（right to left） 既然说`dir`是共有属性，如果把这个属性放在任意标签中，那表明这个标签的位置可能会从右开始排列。



## 框架标签

如果我们希望在一个网页中显示多个页面，那框架标签就派上用场了。

> - 注意，框架标签不能放在`<body>`标签里面，因为`<body>`标签代表的只是一个页面，而框架标签代表的是多个页面。于是：`<frameset>`和`<body>`只能二选一。
> - 框架的集合用`<frameset>`表示，然后在`<frameset>`集合里放入一个一个的框架`<frame>`

**补充**：`frameset`和`frame`已经从 Web标准中删除，建议使用 iframe 代替。

### `<frameset>`：框架的集合

一个框架的集合可以包含多个框架或框架的集合。**属性：**

- `rows`：水平分割，将框架分为上下部分。写法有两种：

1、绝对值写法：`rows="200,*"` 其中`*`代表剩余的。这里其实包含了两个框架：上面的框架占200个像素，下面的框架占剩下的部分。

2、相对值写法：`rows="30%,*"` 其中`*`代表剩余的。这里其实包含了两个框架：上面的框架占30%，下面的框架占70%。

注：如果你想将框架分成很多行，在属性值里用逗号隔开就行了。

- `cols`：垂直分割，将框架分为左右部分。写法有两种：

1、绝对值写法：`cols="200,*"` 其中`*`代表剩余的。这里其实包含了两个框架：左边的框架占200个像素，右边的框架占剩下的部分。

2、相对值写法：`cols="30%,*"` 其中`*`代表剩余的。这里其实包含了两个框架：左边的框架占30%，右边的框架占70%。

注：如果你想将框架分成很多列，在属性值里用逗号隔开就行了。   

**例：**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Frameset学习</title>
	</head>
	<frameset rows="20%,*"> <!-- 分上下 -->
		<frame src="http://gongko.top/index.html" />
		<frameset cols="30%,*">
			<frame src="http://tianyihum.gongko.top/index.html" />
			<frame src="http://blog.gongko.top/index.php" />
		</frameset>
	</frameset>
</html>
```

**输出：**

上：20%

下：左30%右70%



### `<frame>`：框架

一个框架显示一个页面。

**属性：**

- `scrolling="no"`：是否需要滚动条。默认值是true。
- `noresize`：不可以改变框架大小。默认情况下，单个框架的边界是可以拖动的，这样的话，框架大小就不固定了。如果用了这个属性值，框架大小将固定。

举例：

```
<frame src="top.html" noresize></frame>
```

- `bordercolor="#00FF00"`：给框架的边框定义颜色。这个属性在框架集合`<frameset>`中同样适用。 颜色这个属性在IE浏览器中生效，但是在google浏览器中无效，不知道为啥。
- `frameborder="0"`或`frameborder="1"`：隐藏或显示边框（框架线）。
- `name`：给框架起一个名字。

利用`name`这个属性，我们可以在框架里进行超链。

举例：

[![img](https://camo.githubusercontent.com/d2d5e7871314548e2b78343b81ed3eba6bc1b80f/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f32382e706e67)](https://camo.githubusercontent.com/d2d5e7871314548e2b78343b81ed3eba6bc1b80f/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f32382e706e67)

效果：

[![img](https://camo.githubusercontent.com/ba804141e423bc8aac285cb1650bd1074003b942/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f676966332e676966)](https://camo.githubusercontent.com/ba804141e423bc8aac285cb1650bd1074003b942/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f676966332e676966)

## 内嵌框架

内嵌框架用`<iframe>`表示。`<iframe>`是`<body>`的子标记。

内嵌框架inner frame：嵌入在一个页面上的框架(仅仅IE、新版google浏览器支持，可能有其他浏览器也支持，暂时我不清楚)。

**属性：**

- `src="subframe/the_second.html"`：内嵌的那个页面
- `width=800`：宽度
- `height=“150`：高度
- `scrolling="no"`：是否需要滚动条。默认值是true。
- `name="mainFrame"`：窗口名称。公有属性。

效果：

[![img](https://camo.githubusercontent.com/0ca1eeae2731465d0a6fc982b8f340698fd76608/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f32392e706e67)](https://camo.githubusercontent.com/0ca1eeae2731465d0a6fc982b8f340698fd76608/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f32392e706e67)

内嵌框架举例：（在内嵌页面中切换显示不同的压面）

```
 <body>

 	<a href="文字页面.html" target="myframe">默认显示文字页面</a><br>
 	<a href="图片页面.html" target="myframe">点击进入图片页面</a><br>
 	<a href="表格页面.html" target="myframe">点击进入表格页面</a><br>

 	<iframe src="文字页面.html" width="400" height="400" name="myframe"></iframe>
 	<br>
 	嘿嘿

 </body>
```

效果演示： [![img](https://camo.githubusercontent.com/5a1d1f0599f60a29a86b30ae0cf227280bbd299e/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f4749462e676966)](https://camo.githubusercontent.com/5a1d1f0599f60a29a86b30ae0cf227280bbd299e/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f4749462e676966)

## 表单标签

表单标签用`<form>`表示，用于与服务器的交互。表单就是收集用户信息的，就是让用户填写的、选择的。

**属性：**

- `name`：表单的名称，用于JS来操作或控制表单时使用；
- `id`：表单的名称，用于JS来操作或控制表单时使用；
- `action`：指定表单数据的处理程序，一般是PHP，如：action=“login.php”
- `method`：表单数据的提交方式，一般取值：get(默认)和post

注意：表单和表格嵌套时，是在

标记中套标记。



form标签里面的action属性和method属性，在《Ajax》课程上给大家讲解。稍微说一下：action属性就是表示，表单将提交到哪里。 method属性表示用什么HTTP方法提交，有get、post两种。

**get提交和post提交的区别：**

GET方式： 将表单数据，以"name=value"形式追加到action指定的处理程序的后面，两者间用"?"隔开，每一个表单的"name=value"间用"&"号隔开。 特点：只适合提交少量信息，并且不太安全(不要提交敏感数据)、提交的数据类型只限于ASCII字符。

POST方式： 将表单数据直接发送(隐藏)到action指定的处理程序。POST发送的数据不可见。Action指定的处理程序可以获取到表单数据。 特点：可以提交海量信息，相对来说安全一些，提交的数据格式是多样的(Word、Excel、rar、img)。

**Enctype：** 表单数据的编码方式(加密方式)，取值可以是：application/x-www-form-urlencoded、multipart/form-data。Enctype只能在POST方式下使用。

- Application/x-www-form-urlencoded：**默认**加密方式，除了上传文件之外的数据都可以
- Multipart/form-data：**上传附件时，必须使用这种编码方式**。



## 表单标签

表单标签用`<form>`表示，用于与服务器的交互。表单就是收集用户信息的，就是让用户填写的、选择的。

**属性：**

- `name`：表单的名称，用于JS来操作或控制表单时使用；
- `id`：表单的名称，用于JS来操作或控制表单时使用；
- `action`：指定表单数据的处理程序，一般是PHP，如：action=“login.php”
- `method`：表单数据的提交方式，一般取值：get(默认)和post

注意：表单和表格嵌套时，是在

标记中套标记。



form标签里面的action属性和method属性，在《Ajax》课程上给大家讲解。稍微说一下：action属性就是表示，表单将提交到哪里。 method属性表示用什么HTTP方法提交，有get、post两种。

**get提交和post提交的区别：**

GET方式： 将表单数据，以"name=value"形式追加到action指定的处理程序的后面，两者间用"?"隔开，每一个表单的"name=value"间用"&"号隔开。 特点：只适合提交少量信息，并且不太安全(不要提交敏感数据)、提交的数据类型只限于ASCII字符。

POST方式： 将表单数据直接发送(隐藏)到action指定的处理程序。POST发送的数据不可见。Action指定的处理程序可以获取到表单数据。 特点：可以提交海量信息，相对来说安全一些，提交的数据格式是多样的(Word、Excel、rar、img)。

**Enctype：** 表单数据的编码方式(加密方式)，取值可以是：application/x-www-form-urlencoded、multipart/form-data。Enctype只能在POST方式下使用。

- Application/x-www-form-urlencoded：**默认**加密方式，除了上传文件之外的数据都可以
- Multipart/form-data：**上传附件时，必须使用这种编码方式**。

### `<input>`：输入标签（文本框）

用于接收用户输入。

```
<input type="text" />
```

**属性：**

- **`type="属性值"`**：文本类型。属性值可以是：
  - `text`（默认）
  - `password`：密码类型
  - `radio`：单选按钮，名字相同的按钮作为一组进行单选（单选按钮，天生是不能互斥的，如果想互斥，必须要有相同的name属性。name就是“名字”。 ）。非常像以前的收音机，按下去一个按钮，其他的就抬起来了。所以叫做radio。
  - `checkbox`：多选按钮，**name 属性值相同的按钮**作为一组进行选择。
  - `checked`：将单选按钮或多选按钮默认处于选中状态。当`<input>`标签设置为`type="radio"`或者`type=checkbox`时，可以用这个属性。属性值也是checked，可以省略。
  - `hidden`：隐藏框，在表单中包含不希望用户看见的信息
  - `button`：普通按钮，结合js代码进行使用。
  - `submit`：提交按钮，传送当前表单的数据给服务器或其他程序处理。这个按钮不需要写value自动就会有“提交”文字。这个按钮真的有提交功能。点击按钮后，这个表单就会被提交到form标签的action属性中指定的那个页面中去。
  - `reset`：重置按钮，清空当前表单的内容，并设置为最初的默认值
  - `image`：图片按钮，和提交按钮的功能完全一致，只不过图片按钮可以显示图片。
  - `file`：文件选择框。 提示：如果要限制上传文件的类型，需要配合JS来实现验证。对上传文件的安全检查：一是扩展名的检查，二是文件数据内容的检查。
- **`value="内容"`**：文本框里的默认内容（已经被填好了的）
- `size="50"`：表示文本框内可以显示**五十个字符**。一个英文或一个中文都算一个字符。 注意**size属性值的单位不是像素哦**。
- `readonly`：文本框只读，不能编辑。因为它的属性值也是readonly，所以属性值可以不写。 用了这个属性之后，在google浏览器中，光标点不进去；在IE浏览器中，光标可以点进去，但是文字不能编辑。
- `disabled`：文本框只读，不能编辑，光标点不进去。属性值可以不写。

> 备注：HTML5中，input的类型又增加了很多（比如date、color，我们会在 html5 中讲到）。

**举例**：

```
	<form>
		姓名：<input value="呵呵" >逗比<br>
		昵称：<input value="哈哈" readonly=""><br>
		名字：<input type="text" value="name" disabled=""><br>
		密码：<input type="password" value="pwd" size="50"><br>
		性别：<input type="radio" name="gender" id="radio1" value="male" checked="">男
			  <input type="radio" name="gender" id="radio2" value="female" >女<br>
		爱好：<input type="checkbox" name="love" value="eat">吃饭
			  <input type="checkbox" name="love" value="sleep">睡觉
			  <input type="checkbox" name="love" value="bat">打豆豆
	</form>
```

效果：

[![img](https://camo.githubusercontent.com/4679532938c3fca2dca738facc86d2645602f8ea/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f33332e706e67)](https://camo.githubusercontent.com/4679532938c3fca2dca738facc86d2645602f8ea/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f33332e706e67)

注意，多个个单选框的input标签中，name 的属性值可以相同，但是 **id 的属性值必须是唯一的**。我们知道，html的标签中，id的属性值是唯一的。

**四种按钮的举例**：

```
	<form>
		<input type="button" value="普通按钮"><br>
		<input type="submit"  value="提交按钮"><br>
		<input type="reset" value="重置按钮"><br>
		<input type="image" value="图片按钮1"><br>
		<input type="image" src="1.jpg" width="800" value="图片按钮2"><br>
		<input type="file" value="文件选择框">
	</form>
```

**前端开发工程师，重点关心页面的美、样式、板式、交互。至于数据的提供和比较重的业务逻辑，都是后台工程师做的事情。**

效果：

[![img](https://camo.githubusercontent.com/94ebdb2aba54b27737eee8469490e2fe9b5a9232/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f33352e706e67)](https://camo.githubusercontent.com/94ebdb2aba54b27737eee8469490e2fe9b5a9232/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30322d636e626c6f67735f68746d6c5f33352e706e67)



### `<select>`：下拉列表标签

`<select>`标签里面的每一项用`<option>`表示。select就是“选择”，option“选项”。

select标签和ul、ol、dl一样，都是组标签。

**`<select>`标签的属性：**

- `multiple`：可以对下拉列表中的选项进行多选。属性值为 multiple，也可以没有属性值。也就是说，既可以写成 `multiple=""`，也可以写成`multiple="multiple"`。
- `size="3"`：如果属性值大于1，则列表为滚动视图。默认属性值为1，即下拉视图。

**`<option>`标签的属性：**

- `selected`：预选中。没有属性值。

举例：

```html
	<form>
		<select>
			<option>小学</option>
			<option>初中</option>
			<option>高中</option>
			<option>大学</option>
			<option selected="">研究生</option>
		</select>
		<br><br><br>

		<select size="3">
			<option>小学</option>
			<option>初中</option>
			<option>高中</option>
			<option>大学</option>
			<option>研究生</option>
		</select>
		<br><br><br>

		<select multiple="">
			<option>小学</option>
			<option>初中</option>
			<option selected="">高中</option>
			<option selected="">大学</option>
			<option>研究生</option>
		</select>
		<br><br><br>

	</form>
```

**输出：**

<select>
			<option>小学</option>
			<option>初中</option>
			<option>高中</option>
			<option>大学</option>
			<option selected="">研究生</option>
		</select>

<select size="3">
			<option>小学</option>
			<option>初中</option>
			<option>高中</option>
			<option>大学</option>
			<option>研究生</option>
		</select>

<select multiple="">
			<option>小学</option>
			<option>初中</option>
			<option selected="">高中</option>
			<option selected="">大学</option>
			<option>研究生</option>
		</select>

### `<textarea>`标签：多行文本输入框

text 就是“文本”，area 就是“区域”。

**属性：**

- `rows="4"`：指定文本区域的行数。
- `cols="20"`：指定文本区域的列数。
- `readonly`：只读。

举例：

```html
	<form>
		<textarea name="txtInfo" rows="4" cols="20">1、不爱摄影不懂设计的程序猿不是一个好的产品经理。</textarea>
	</form>
```

效果：

<form>
		<textarea name="txtInfo" rows="4" cols="20">1、不爱摄影不懂设计的程序猿不是一个好的产品经理。</textarea>
	</form>

### 表单的语义化

比如，我们在注册一个网站的信息的时候，有一部分是必填信息，有一部分是选填信息，这个时候可以利用表单的语义化。 举例：

```html
	<form>

		<fieldset>
		<legend>账号信息</legend>
		姓名：<input value="呵呵" >逗比<br>
		密码：<input type="password" value="pwd" size="50"><br>
		</fieldset>

		<fieldset>
		<legend>其他信息</legend>
		性别：<input type="radio" name="gender" value="male" checked="">男
			  <input type="radio" name="gender" value="female" >女<br>
		爱好：<input type="checkbox" name="love" value="eat">吃饭
			  <input type="checkbox" name="love" value="sleep">睡觉
			  <input type="checkbox" name="love" value="bat">打豆豆
		</fieldset>

	</form>
```

**输出**

<form><fieldset><legend>账号信息</legend>姓名：<input value="呵呵" >逗比<br>
密码：<input type="password" value="pwd" size="50"><br></fieldset><fieldset>
		<legend>其他信息</legend>
		性别：<input type="radio" name="gender" value="male" checked="">男
			  <input type="radio" name="gender" value="female" >女<br>
		爱好：<input type="checkbox" name="love" value="eat">吃饭
			  <input type="checkbox" name="love" value="sleep">睡觉
			  <input type="checkbox" name="love" value="bat">打豆豆
		</fieldset></form>

### `<label>`标签

我们先来看下面一段代码：

```
<input type="radio" name="sex" /> 男
<input type="radio" name="sex" /> 女
```

对于上面这样的单选框，我们只有点击那个单选框（小圆圈）才可以选中，点击“男”、“女”这两个文字时是无法选中的；于是，label标签派上了用场。

本质上来讲，“男”、“女”这两个文字和input标签时没有关系的，而label就是解决这个问题的。我们可以通过label把input和汉字包裹起来作为整体。

解决方法如下：

```html
<input type="radio" name="sex" id="nan" /> <label for="nan">男</label>
<input type="radio" name="sex" id="nv"  /> <label for="nv">女</label>
```

**输出：**

<div><input type="radio" name="sex" id="nan" /> <label for="nan">男</label>
<input type="radio" name="sex" id="nv"  /> <label for="nv">女</label></div>

上方代码中，让label标签的**for 属性值**，和 input 标签的 **id 属性值相同**，那么这个label和input就有绑定关系了。

当然了，复选框也有label：（任何表单元素都有label）

```html
<input type="checkbox" id="kk" />
<label for="kk">10天内免登陆</label>
```

**输出：**

<div><input type="checkbox" id="kk" />
<label for="kk">10天内免登陆</label></div>

## `<marquee>`：滚动字幕标签

如果在这个标签里设置了内容，那么，打开网页时，内容会像弹幕一样自动移动。 **属性：**

- `direction="right"`：移动的目标方向。属性值可以是：`left`（从右向左移动，默认值）、`right`（从左向右移动）、`up`（从下向上移动）、`down`（从上向下移动）。
- `behavior="slide"`：行为方式。属性值可以是：`slide`（只移动一次）、`scroll`（循环移动，默认值）、`alternate`（循环移动）、。 `alternate`和`scroll`属性值都是循环移动，区别在于：假设在`direction="right"`的情况下，`behavior="scroll"`表示从左到右、从左到右、从左到右···`behavior="alternate"`表示从左到右、从右到左、从左到右···
- `scrollamount="30"`：移动的速度
- `loop="3"`: 循环多少圈。负值表示无限循环
- `scrolldelay="1000"`：移动一次休息多长时间。单位是毫秒。

举例：

```html
	<marquee behavior="alternate" direction="down"  width="300" height="200" bgcolor="#8c5dc1">我来了</marquee>
```

效果：

<div><marquee behavior="alternate" direction="down"  width="300" height="200" bgcolor="#8c5dc1">我来了</marquee></div>

## html废弃标签介绍

HTML现在只负责语义，而不负责样式。但是HTML一开始，连样式也包办了。这些样式的标签，都已经被废弃。

2004年之前的东西：

```
<font size="9" color="red">哈哈</font>
```

下面这些标签都是css钩子，而不是原意：

```
	<b>加粗</b>
	<u>下划线</u>
	<i>倾斜</i>
    <del>删除线</del>
	<em>强调</em>
	<strong>强调</strong>
```

这些标签，是有着浓厚的样式的作用，干涉了css的作用，所以HTML抛弃了他们。

类似的还有水平线标签：

```html
<hr />
```

换行标签：

```
<br />
```

但是，网页中99.9999%需要换行的时候，是因为另起了一个段落，所以要用p，而不要用`<br />`。不到万不得已，不要用br标签。

标准的div+css页面，只会用到种类很少的标签：

```html
div  p  h1  span   a   img   ul   ol    dl    input
```

知道每个标签的特殊用法、属性。比如a标签，img的属性。