# Html Css Js实战中运用遇到的问题

作者：H口先生

## 登录页面

### [text-decoration](https://www.runoob.com/cssref/pr-text-text-decoration.html)

text-decoration 属性规定添加到文本的修饰，下划线、上划线、删除线等。

```css
/*关键值*/
text-decoration: none;                     /*没有文本装饰*/
text-decoration: underline red;            /*红色下划线*/
text-decoration: underline wavy red;       /*红色波浪形下划线*/
```

英文：decoration[.dekə'reɪʃ(ə)n] **n.**装潢；装饰品；勋章；奖章

### [attr()](https://www.runoob.com/cssref/func-attr.html)

attr() 函数返回选择元素的属性值。

```css
content: attr(data-placeholder);
```

获取data-placeholder的值输出。

### [linear-gradient()函数](https://www.runoob.com/cssref/func-linear-gradient.html)

用法：

```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

以下实例演示了从左侧开始的线性渐变，从红色开始，转为黄色:

```css
background-image: linear-gradient(to right, red , yellow);
```

渐变角度120度：

```css
background: linear-gradient(120deg, #3498db, #8e44ad, #3498db);
```

### [outline](https://www.runoob.com/cssref/pr-outline.html)

outline（轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

可以设置的属性分别是（按顺序）：outline-color, outline-style, outline-width

默认值：invert none medium

### [cursor](https://www.runoob.com/cssref/pr-class-cursor.html)

cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状。

默认值：auto

| 值          | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| *url*       | 需使用的自定义光标的 URL。注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。 |
| default     | 默认光标（通常是一个箭头）                                   |
| auto        | 默认。浏览器设置的光标。                                     |
| crosshair   | 光标呈现为十字线。                                           |
| **pointer** | 光标呈现为指示链接的指针（一只手）                           |
| move        | 此光标指示某对象可被移动。                                   |
| e-resize    | 此光标指示矩形框的边缘可被向右（东）移动。                   |
| ne-resize   | 此光标指示矩形框的边缘可被向上及向右移动（北/东）。          |
| nw-resize   | 此光标指示矩形框的边缘可被向上及向左移动（北/西）。          |
| n-resize    | 此光标指示矩形框的边缘可被向上（北）移动。                   |
| se-resize   | 此光标指示矩形框的边缘可被向下及向右移动（南/东）。          |
| sw-resize   | 此光标指示矩形框的边缘可被向下及向左移动（南/西）。          |
| s-resize    | 此光标指示矩形框的边缘可被向下移动（南）。                   |
| w-resize    | 此光标指示矩形框的边缘可被向左移动（西）。                   |
| text        | 此光标指示文本。                                             |
| wait        | 此光标指示程序正忙（通常是一只表或沙漏）。                   |
| help        | 此光标指示可用的帮助（通常是一个问号或一个气球）。           |

### [background-position](https://www.runoob.com/cssref/pr-background-position.html)属性

background-position属性设置背景图像的起始位置。

默认值：0% 0%

| 值                                                           | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| left top left center left bottom right top right center right bottom center top center center center bottom | 如果仅指定一个关键字，其他值将会是"center"                   |
| *x% y%*                                                      | 第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％ |
| *xpos ypos*                                                  | 第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 [CSS单位](https://www.runoob.com/try/css-units.html)。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions |
| inherit                                                      | 指定background-position属性设置应该从父元素继承              |

例：

```css
background-position: right;
```

### js

#### 焦点事件

js焦点事件:onfocus、onblur、focus()、blur()、select();

onfocus：当元素获取到焦点的时候触发

onblur:当元素失去焦点的时候

obj.focus():给指定的元素设置焦点

obj.blur()：取消指定元素的焦点

obj.select()：全选当前的文字

odiv.onfocus = funcion(){}

**添加class：**

$("#id").addClass("className");