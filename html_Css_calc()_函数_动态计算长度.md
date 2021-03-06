# Html Css calc() 函数 动态计算长度

## 定义与用法

calc() 函数用于动态计算长度值。

- 需要注意的是，运算符前后都需要保留一个空格，例如：`width: calc(100% - 10px)`；
- 任何长度值都可以使用calc()函数进行计算；
- calc()函数支持 "+", "-", "*", "/" 运算；
- calc()函数使用标准的数学运算优先级规则；

支持版本：CSS3

例：

```html
#div1 {
    position: absolute;
    left: 50px;
    width: calc(100% - 100px);
    border: 1px solid black;
    background-color: yellow;
    padding: 5px;
    text-align: center;
}
<div id="div1"></div>
```





## CSS 语法

```
calc(expression)
```

| 值           | 描述                                             |
| :----------- | :----------------------------------------------- |
| *expression* | 必须，一个数学表达式，结果将采用运算后的返回值。 |

