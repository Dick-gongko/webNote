# Css 进阶（经常用到的样式）

### 让flex盒子中的子元素们，居中

flex布局常用的三行代码：

```css
    display: flex;
    justify-content: center; // 子元素在横轴的对齐方式 （左右居中）
    align-items: center;  // 子元素在竖轴的对齐方式（上下居中）
```

### 让文字只显示一行，超出显示省略号

```css
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
```

### 让文字最多只显示两行，超出后显示省略号

```css
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
```

### 文本内容里自带了换行，但是在前端没有展示出来

解决办法：增加如下属性即可。

```css
white-space: pre-wrap;
```

或者：

```css
white-space: pre-line;
```

价格中的羊角符号，有半角和全角之分：

- ¥半角
- ￥全角

可以看出，半角的宽度更小。考虑到容器的空间一般比较紧张，所以推荐使用**半角**。

### 图片的宽度固定，高度自适应

这个场景下，别用background。直接放img元素就好了，将图片的高度设置为`auto`。

### 通过CSS扩大点击热区

```css
.button {
	position: relative;
	/* [其余样式] */
}

.button::before {
	content: '';
	position: absolute;
	top: -10px;
	right: -10px;
	bottom: -10px;
	left: -10px;
}
```

## 隐藏盒子的几种方式

隐藏盒子，有以下几种方式：

（1）方式一：

```css
overflow：hidden;   //隐藏盒子超出的部分
```

（2）**方式二**：

```css
display: none;	  隐藏盒子，而且不占位置(用的最多)
```

比如，点击`X`，关闭京东首页上方的广告栏。

（3）方式三：

```css
visibility: hidden;   //隐藏盒子，占位置。
visibility: visible;   //让盒子重新显示
```

（4）方式四：

```css
opacity: 0;       //设置盒子的透明度（不建议，因为内容也会半透明），占位置
```

（4）方式五：

```css
Position/top/left/...-999px   //把盒子移得远远的，占位置。
```

（5）方式六：

```css
margin-left: 1000px;
```

### 设置盒子的半透明

方式一：`opacity: 0.4`。优点是方便。缺点是：里面的内容也会半透明。

方式二：css3的技术来解决半透明。如下：

- background: rgba(0,0,0,0.3);
- background: rgba(0,0,0,.3);

备注：`a`指的是alpha透明度。

### 给标签的形状设置为圆角矩形

```css
border-radius: 50%;
border-radius: 10px 0 0 10px;
```

### 行高的问题：儿子把父亲撑开

比如对于下面这样的标签：

```css
	<div>
		<a href=""></a>
	</div>
```

前置条件：如果我们给父亲div的行高设为31px，然后给儿子a的行高也设置为31

结果：当我们给儿子a设置了字体属性之后，会发现，父亲被撑高为32px了。因为font字体自身会比较大，多撑出了一个像素。

解决办法：**行内元素尽量不要设置font属性**。对于行内元素而言，如果它和父亲都设置了行高，就不要去给自己设置font属性了。要么就，不要同时设置行高。

### 背景图不能撑开盒子

高和行高都可以城开盒子，但背景图不能撑开盒子。

## JS

### 超链接`<a>`的href跳转

一个空白的超链接如下：

```css
<a href=""></a>
```

当点击超链接时，由于 href 的属性值的不同，可以产生很多种情况：

```css
	href=""                    //刷新页面

	href="#"                   //跳转到当前页面的顶部（不会刷新）

	href="javascript:void(0)"  // 什么都不做

	href="javascript:;"        // 什么都不做
```