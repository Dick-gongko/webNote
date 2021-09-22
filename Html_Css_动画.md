# Html Css 动画

作者：H口先生

## 什么是 CSS3 中的动画？

动画是使元素从一种样式逐渐变化为另一种样式的效果。

您可以改变任意多的样式任意多的次数。

请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

0% 是动画的开始，100% 是动画的完成。

为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。

### 动画的写法

**实例**

当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变：

```css
@keyframes myfirst
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}
```

**实例**

```css
@keyframes myfirst
{
from {background: red;}
to {background: yellow;}
}
```

**动画调用**

```css
#div1 {
    animation: mymove 5s infinite;
}
/* mymove是动画名 
5s 是动画运行时间 
infinite是无限次执行，想要有执行次数直接在后面写数字就可以了
animation: mymove 5s 2;//两次的意思
什么都不加只执行一次
标签显示就开始执行
*/
```

**动画过度方式**

- linear（线性过渡）
- ease（平滑过渡）
- ease-in（由慢到快）
- ease-out（由快到慢）
- ease-in-out（由慢到快再到慢）

**例：**

```css
#div1 {
    animation: mymove 2s linear infinite;
}
/*
mynove动画2秒播放完，动画过度方式线性过度
*/
```

**动画延迟播放**

```css
#div1 {
    animation: mymove 5s infinite;
    animation-delay: 1s;
}/*动画延迟一秒后开始执行，也是连续播放*/
```

### 动画暂停与播放

**语法**

```css
animation-play-state: paused|running;（暂停|播放）
```

| 值      | 描述               |
| :------ | :----------------- |
| paused  | 规定动画已暂停。   |
| running | 规定动画正在播放。 |



## 动画按键（练习）


**代码**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>button</title>
	</head>
	<style>
		body{
			margin: 0;
			padding: 0;
			background: #0c002b;
			font-family: sans-serif;
		}
		a{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate( -50%, -50% );
			color: #1670f0;
			padding: 30px 60px;
			font-size: 30px;
			letter-spacing: 2px;
			text-transform: uppercase;
			text-decoration: none;
			box-shadow: 0 20px 50px rgba(0, 0, 0, .5);
			overflow: hidden;
		}
		a:before{
			content: '';
			position: absolute;
			top: 2px;
			left: 2px;
			bottom: 2px;
			width: 50%;
			background: rgba(255, 255, 255, 0.05);
		}
		a span:nth-child(1){
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background: linear-gradient( to right, #0c002b, #1779ff);
			animation: animate1 2s linear infinite;
		}
		@keyframes animate1
		{
			0%{
				transform: translateX(-100%);
			}
			to{transform: translateX(100%);
			}
		}
		a span:nth-child(2){
			position: absolute;
			top: 0;
			right: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient( to bottom, #0c002b, #1779ff);
			animation: animate2 2s linear infinite;
			animation-delay: 1s;
		}
		@keyframes animate2
		{
			0%{
				transform: translateY(-100%);
			}
			to{transform: translateY(100%);
			}
		}
		a span:nth-child(3){
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background: linear-gradient( to left, #0c002b, #1779ff);
			animation: animate3 2s linear infinite;
		}
		@keyframes animate3
		{
			0%{
				transform: translateX(100%);
			}
			to{transform: translateX(-100%);
			}
		}
		a span:nth-child(4){
			position: absolute;
			top: 0;
			left: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient( to top, #0c002b, #1779ff);
			animation: animate4 2s linear infinite;
			animation-delay: 1s;
		}
		@keyframes animate4
		{
			0%{
				transform: translateY(100%);
			}
			to{transform: translateY(-100%);
			}
		}
	</style>
	<body>
		<a href="#">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			BUTTON
		</a>
	</body>
</html>
```

## 过渡：transition

`transition`的中文含义是**过渡**。过渡是CSS3中具有颠覆性的一个特征，可以实现元素**不同状态间的平滑过渡**（补间动画），经常用来制作动画效果。

ransition 包括以下属性：

- `transition-property: all;` 如果希望所有的属性都发生过渡，就使用all。
- `transition-duration: 1s;` 过渡的持续时间。
- `transition-timing-function: linear;` 运动曲线。属性值可以是：
  - `linear` 线性
  - `ease` 减速
  - `ease-in` 加速
  - `ease-out` 减速
  - `ease-in-out` 先加速后减速
- `transition-delay: 1s;` 过渡延迟。多长时间后再执行这个过渡动画。

上面的四个属性也可以写成**综合属性**：

```css
	transition: 让哪些属性进行过度 过渡的持续时间 运动曲线 延迟时间;

	transition: all 3s linear 0s;
```

其中，`transition-property`这个属性是尤其需要注意的，不同的属性值有不同的现象。我们来示范一下。

如果设置 `transition-property: width`，意思是只让盒子的宽度在变化时进行过渡。效果如下：

[![img](https://camo.githubusercontent.com/a73574b2a82bcb83f5a347fee401b08cc4370bf5/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f313434302e676966)](https://camo.githubusercontent.com/a73574b2a82bcb83f5a347fee401b08cc4370bf5/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f313434302e676966)

如果设置 `transition-property: all`，意思是让盒子的所有属性（包括宽度、背景色等）在变化时都进行过渡。

## 2D 转换

**转换**是 CSS3 中具有颠覆性的一个特征，可以实现元素的**位移、旋转、变形、缩放**，甚至支持矩阵方式。

转换再配合过渡和动画，可以取代大量早期只能靠 Flash 才可以实现的效果。

在 CSS3 当中，通过 `transform` 转换来实现 2D 转换或者 3D 转换。

- 2D转换包括：缩放、移动、旋转。

我们依次来讲解。

### 1、缩放：`scale`

格式：

```css
	transform: scale(x, y);

	transform: scale(2, 0.5);
```

参数解释： x：表示水平方向的缩放倍数。y：表示垂直方向的缩放倍数。如果只写一个值就是等比例缩放。

取值：大于1表示放大，小于1表示缩小。不能为百分比。

### 2、位移：translate

格式：

```css
	transform: translate(水平位移, 垂直位移);

	transform: translate(-50%, -50%);
```

参数解释：

- 参数为百分比，相对于自身移动。
- 正值：向右和向下。 负值：向左和向上。如果只写一个值，则表示水平移动。

可以用来居中设置

### 3、旋转：rotate

格式：

```css
	transform: rotate(角度);

	transform: rotate(45deg);
```

参数解释：正值 顺时针；负值：逆时针。