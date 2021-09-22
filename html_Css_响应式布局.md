# html_CSS响应式布局



开头``head``里要有一句``<meta name="viewport" content="width=device-width, initial-scale=1.0">``

### 设备

| 值         | 描述                                         |
| :--------- | :------------------------------------------- |
| screen     | 计算机屏幕（默认）。                         |
| tty        | 电传打字机以及类似的使用等宽字符网格的媒介。 |
| tv         | 电视机类型设备（低分辨率、有限的滚屏能力）。 |
| projection | 放映机。                                     |
| handheld   | 手持设备（小屏幕、有限带宽）。               |
| print      | 打印预览模式/打印页面。                      |
| braille    | 盲人点字法反馈设备。                         |
| aural      | 语音合成器。                                 |
| all        | 适用于所有设备。                             |

## 值

| 值                  | 描述                                                         |
| :------------------ | :----------------------------------------------------------- |
| width               | 规定目标显示区域的宽度。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (min-width:500px)" |
| height              | 规定目标显示区域的高度。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (max-height:700px)" |
| device-width        | 规定目标显示器/纸张的宽度。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (device-width:500px)" |
| device-height       | 规定目标显示器/纸张的高度。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (device-height:500px)" |
| orientation         | 规定目标显示器/纸张的方向。 可能的值："portrait" （纵向）或 "landscape"（横向）。 例子：media="all and (orientation: landscape)" |
| aspect-ratio        | 规定目标显示区域的宽度/高度比。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (aspect-ratio:16/9)" |
| device-aspect-ratio | 规定目标显示器/纸张的 device-width/device-height 比率。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (aspect-ratio:16/9)" |
| color               | 规定目标显示器的 bits/color。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (color:3)" |
| color-index         | 规定目标显示器可以处理的颜色数。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (min-color-index:256)" |
| monochrome          | 规定单色帧缓冲中的 bits/pixel。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (monochrome:2)" |
| resolution          | 规定目标显示器/纸张的像素密度 (dpi 或 dpcm)。 可使用 "min-" 和 "max-" 前缀。 例子： media="print and (resolution:300dpi)" |
| scan                | 规定 tv 显示器的扫描方式。 可能的值："progressive" 和 "interlace"。 例子：media="tv and (scan:interlace)" |
| grid                | 规定输出设备是否是网格或位图。 可能的值："1" 为网格，否则为 "0"。 例子：media="handheld and (grid:1)" |



**代码：**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- 响应式布局开头代码 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 通用属性    -->
    <link rel="stylesheet" href="common.css">
    <!-- 电脑端属性,小于500px就不用这个样式 -->
    <link media="(min-width:500px)" rel="stylesheet" href="desktop.css">
    <!-- 移动端属性,大于500px就不用这个样式 -->
    <link media="(max-width:500px)" rel="stylesheet" href="mobile.css">
    <title>响应式布局</title>
</head>

<body>
    <div class="menu">
        <!-- 传递事件给input -->
        <label for="menu-checkbox">控制显示</label>
        <!-- 用来控制显示内容按键 -->
        <input id="menu-checkbox" type="checkbox">
        <text>
            text text text text text text text text text text text text text text text text text text text text text
            text
            text text text text text
        </text>
    </div>
</body>

</html>
```

代码解释

```less
//把事件传递给input，在这里主要传递点击事件
<label for="menu-checkbox">控制显示</label>
//选择按键
<input id="menu-checkbox" type="checkbox">

//然后我们在css里吧input的选择按钮给隐藏就可以了

//在这里隐藏文章的css这样写

//移动端css：inpu被点击后它兄弟节点下的text节点被隐藏
#menu-checkbox:checked ~ text{
    display: none;
}
```

