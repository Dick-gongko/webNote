# JavaScript_ES6字符串、数组、对象的基础知识(js)

## 字符串的扩展

ES6中的字符串扩展，用得少，而且逻辑相对简单。如下：

- `includes(str)`：判断是否包含指定的字符串
- `startsWith(str)`：判断是否以指定字符串开头
- `endsWith(str)`：判断是否以指定字符串结尾
- `repeat(count)`：重复指定次数

举例如下：

```
    let str = 'abcdefg';

    console.log(str.includes('a'));//true
    console.log(str.includes('h'));//false

    //startsWith(str) : 判断是否以指定字符串开头
    console.log(str.startsWith('a'));//true
    console.log(str.startsWith('d'));//false

    //endsWith(str) : 判断是否以指定字符串结尾
    console.log(str.endsWith('g'));//true
    console.log(str.endsWith('d'));//false

    //repeat(count) : 重复指定次数a
    console.log(str.repeat(5));
```

打印结果：

[![img](https://camo.githubusercontent.com/a7cd26d7463a838c84796726a28dcf379f2f2494/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303430325f313035302e706e67)](https://camo.githubusercontent.com/a7cd26d7463a838c84796726a28dcf379f2f2494/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303430325f313035302e706e67)

## Number 的扩展

- 二进制与八进制数值表示法: 二进制用`0b`, 八进制用`0o`。

举例：

```
    console.log(0b1010);//10
    console.log(0o56);//46
```

- `Number.isFinite(i)`：判断是否为有限大的数。比如`Infinity`这种无穷大的数，返回的就是false。
- `Number.isNaN(i)`：判断是否为NaN。
- `Number.isInteger(i)`：判断是否为整数。
- `Number.parseInt(str)`：将字符串转换为对应的数值。
- `Math.trunc(i)`：去除小数部分。

举例：

```
    //Number.isFinite(i) : 判断是否是有限大的数
    console.log(Number.isFinite(NaN)); //false
    console.log(Number.isFinite(5)); //true
    console.log(Number.isFinite(Infinity)); //false

    //Number.isNaN(i) : 判断是否是NaN
    console.log(Number.isNaN(NaN));//true
    console.log(Number.isNaN(5));//falsse

    //Number.isInteger(i) : 判断是否是整数
    console.log(Number.isInteger(5.23));//false
    console.log(Number.isInteger(5.0));//true
    console.log(Number.isInteger(5));//true

    //Number.parseInt(str) : 将字符串转换为对应的数值
    console.log(Number.parseInt('123abc'));//123
    console.log(Number.parseInt('a123abc'));//NaN

    // Math.trunc(i) : 直接去除小数部分
    console.log(Math.trunc(13.123));//13
```

## 数组的扩展

> 下面提到的数组的几个方法，更详细的内容，可以看《04-JavaScript基础/17-数组的常见方法.md》。

### 扩展1：Array.from()

```
	Array.from(伪数组/可遍历的对象)
```

**作用**：将**伪数组**或可遍历对象转换为**真数组**。

### 扩展2：Array.of()

```
	Array.of(value1, value2, value3)
```

**作用**：将一系列值转换成数组。

### 扩展3：find() 和 findIndex()

**方法1**：

```
	find(function(item, index, arr){return true})
```

**作用**：找出**第一个**满足「指定条件返回true」的元素。

**方法2**：

```
	findIndex(function(item, index, arr){return true})
```

**作用**：找出第一个满足「指定条件返回true」的元素的index。

## 对象的扩展

### 扩展1

```
	Object.is(v1, v2)
```

**作用：\**判断两个数据是否完全相等。底层是通过\**字符串**来判断的。

我们先来看下面这两行代码的打印结果：

```
        console.log(0 == -0);
        console.log(NaN == NaN);
```

打印结果：

```
	true
	false
```

上方代码中，第一行代码的打印结果为true，这个很好理解。第二行代码的打印结果为false，因为NaN和任何值都不相等。

但是，如果换成下面这种方式来比较：

```
        console.log(Object.is(0, -0));
        console.log(Object.is(NaN, NaN));
```

打印结果却是：

```
	false
	true
```

代码解释：还是刚刚说的那样，`Object.is(v1, v2)`比较的是字符串是否相等。

### Object.assign()

Object.assign() 在实战开发中，使用到的频率非常高，一定要重视。

```
	Object.assign(目标对象, 源对象1, 源对象2...)
```

**作用：** 将源对象的属性追加到目标对象上。如果对象里属性名相同，会被覆盖。

其实可以理解成：将多个对象**合并**为一个新的对象。

**举例1**、对象的属性复制：

```
        let obj1 = { name: 'smyhvae', age: 26 };
        let obj2 = { city: 'shenzhen' };
        let obj3 = {};

        Object.assign(obj3, obj1, obj2);
        console.log(obj3);
```

打印结果：

[![img](https://camo.githubusercontent.com/255f58b3801325cfae5977e9673b3a05c05b9c3d/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303430345f323234302e706e67)](https://camo.githubusercontent.com/255f58b3801325cfae5977e9673b3a05c05b9c3d/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303430345f323234302e706e67)

上图显示，成功将obj1和obj2的属性复制（追加）给了obj3；如果属性名相同，会被覆盖。

**举例2**、将对象 A 赋值给对象B：

```
const obj1 = { name: 'smyhvae', age: 26 };

const obj2 = Object.assign({}, obj1);
```

注意，将对象 A 复制给对象 B，不要直接使用 `B = A`，而是要使用 Object.assign()。至于为何这样做的原因，我们在之前的《JS基础/对象简介和对象的基本操作》里已经讲过。

### 扩展3：`__proto__`属性

举例：

```
       let obj1 = {name:'smyhvae'};
       let obj2 = {};

       obj2.__proto__ = obj1;

       console.log(obj1);
       console.log(obj2);
       console.log(obj2.name);
```

打印结果：

[![img](https://camo.githubusercontent.com/403b5cc49c18b988156519a3c3785900a184758b/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303430345f323235312e706e67)](https://camo.githubusercontent.com/403b5cc49c18b988156519a3c3785900a184758b/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303430345f323235312e706e67)

上方代码中，obj2本身是没有属性的，但是通过`__proto__`属性和obj1产生关联，于是就可以获得obj1里的属性。