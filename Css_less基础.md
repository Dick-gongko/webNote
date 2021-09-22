# less  css基础

  作者：H口先生



用法：可以下载[考拉编译(需要梯子才可以访问)](http://koala-app.com/)，一般我用编辑器里的插件编译。

**less用法(和css几乎一样类名这些安装HTML例的嵌套关系写css就可以了)：**

```less
.div1{
    .div1_1{
        
    }
}
```

## less注释：

```less
/*想暴露出去的注释（就是编译到css里的注释*/
//见不得人的注释。只在less里显示而已
```

## 变量

```less
@themeColor:#66ccff;
@m:margin;
@class:#div1;
@var:0;
*{
    @{m}:0;//用于属性要加{},一般不会这样用的
    padding:0;
}
.div{
    color:@themeColor;//相当于color: #66ccff
   @var:1;
    @{class}{
        @var:2;
        three:@var;//输出的是3
        @var:3;
    }
    one:@var;//输出的是1
    }
```

**重点：less变量延迟加载** 

## 嵌套规则

**&的使用**

```less
div1{
    div2{
        color:#000;
        &:hover{		//如果加的是伪类的话要加&，不加的话默认在css里加空格，写成：
            			//div1 div2 :hover父子关系而不是div1 div2:hover
            background:#66ccff;
        }
    }
}
```

## 混合( mix in )

用于解决代码重复的问题

**普通混合**

```less
.hunhe(){		//()可以不加（也可以用），不过一般都加，不然会当class输出。
    color:#66ccff;
}
.div{
    .div1_1{
        .hunhe;
    }
    .div1_2{
        .hunhe;
    }
}
```

**带参数混合**

```less
.hunhe(@c){
    color:@c;
}
.div{
    .hunhe(#66ccff);	//输出color:#66ccff
}
//带默认值
.test(@c:#66ccff,@m:0){
    color:@c;
    margin:@a
}
.div1{
    .test();	//带默认值的话不传入参数或者传入的参数不量和形参不一致也可以
}
```

**命名参数**

```less
.mingming(@a:0,@c:#66ccff){
    color:@c;
    margin:@a;
}
.div1{
    mingming(@c:ccff66);	//行参和实参不匹配的时候用。输出color:ccff66;margin:0;
}
```

**匹配模式**

```less
.pipei(@_,@cccc){	//同名的名称的mix in使用会带上这个(应该是这么称呼吧),行参数量要对上，名称可以不对上
    padding:0;
}
.pipei(tiny,@c:#66ccff){	//匹配模式
    margin:0;
    color:@c;
}
.pipei(big,@c:#66ccff){
    margin:100px;
    color:@c;
}

.div{
    .pipei(big,#ccff66);
    //写入的是： padding:0;margin:100px;color:#ccff66;
}
```

**arguments变量（用处不大）**

```less
.border(@1,@2,@3){
    border: @arguments;
}
div1{
    .border(1px,solid,black);//输出border:1px solid black;
}
```

## 计算

```less
div1{
    width: ( 100 + 100px);//200px，一个带单位就可以了
}
```

## 继承extend()

```less
.a{
    &:extend(.b);  //这里的 & 为 父选择符，代表的 父选择符 .a 扩展 .b
    font-size: 12px;
}
.b{
    font-weight: bold;
}
```

输出：

```css
.a {
  font-size: 12px;
}
.b,
.a {
  font-weight: bold;  //这里 a 扩展也引用了 b 的样式
}
```

注意：如果这里的 .b 内没有定义任何样式，那么编译后的css中， 不会有 .b 的任何输出，相应的 .a 也不会扩展到任何样式

**如果``class`` ``a``有伪类``extend``要加all**

```less
.a{
    width: 100px;
}
.a:hover{
    background: pink;
}
.div1{
    &:extend(.a all);
}
```

输出：

```css
a, .div1{
    width: 100px;
}
a:hover, div1:hover{
    background: pink;
}
```

## 不编译（一般用于calc()）

```less
*{
    padding: ~"calc(200px - 100px)";	//输出padding: calc(200px - 100px)
    //如果不加~""输出是padding: 100px或者padding: calc(100px)
    //如果我们在calc里用的是百分比就出问题了
}
```

