# JavaScript的常用知识（忘记的）

作者：H口先生

## map()

**map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果.**

例子：

```javascript
var array1 = [1,4,9,16];
const map1 = array1.map(x => x *2);
console.log(map1);
```

打印结果为：

```javascript
> Array [2,8,18,32]
```

而我这样写时：

```javascript
var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => {
    if (x == 4) {
        return x * 2;
    }
});
console.log(map1);
```

打印结果为：

```javascript
> Array [undefined, 8, undefined, undefined]
```

为什么会出现三个undefined呢？而不是我预期的[1,8,9,16]。

这样写只是增加了一个条件，即x的值为4时才乘以2，之所以会出现undefined，是因为map()方法创建了一个新数组，但新数组并不是在遍历完array1后才被赋值的，而是每遍历一次就得到一个值。所以，下面这样修改后就正确了：

```javascript
var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => {
    if (x == 4) {
        return x * 2;
    }
    return x;
});
```

这里注意**箭头函数**有两种格式：
1.只包含一个表达式，这时花括号和return都省略了。
2.包含多条语句，这时花括号和return都不能省略。

大家可以参考：[ES6标准新增了一种新的函数](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001438565969057627e5435793645b7acaee3b6869d1374000)



## join() 方法

**join() 方法用于把数组中的所有元素放入一个字符串。**

元素是通过指定的分隔符进行分隔的。

#### 实例

**例子1 **

在本例中，我们将创建一个数组，然后把它的所有元素放入一个字符串：

```js
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join())

</script>
```

输出：

```
George,John,Thomas
```

**例子 2**

在本例中，我们将使用分隔符来分隔数组中的元素：

```html
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join("."))

</script>
```

输出：

```
George.John.Thomas
```

## toFixed()

**toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。**

用于js的计算。因为js计算小数不准。

这是因为，计算机在做运算时，所有的运算都要转换成二进制去计算。然而，有些数字转换成二进制之后，无法精确表示。比如说，0.1和0.2转换成二进制之后，是无穷的，因此存在浮点数的计算不精确的问题。

### 实例

在本例中，我们将把数字舍入为仅有一位小数的数字：

```js
Show the number 13.37 with one decimal:
<script type="text/javascript">
var num = new Number(13.37);
document.write (num.toFixed(1))
</script>
```

输出：

```
Show the number 13.37 with one decimal:
13.4
```

### 处理数学运算的精度问题

如果只是一些简单的精度问题，可以使用 `toFix()` 方法进行小数的截取。备注：关于 `toFixed()`方法， 详见《JavaScript基础/内置对象：Number 和 Math》。

在实战开发中，关于浮点数计算的精度问题，往往比较复杂。市面上有很多针对数学运算的开源库，比如[decimal.js](https://github.com/MikeMcl/decimal.js/)、 [Math.js](https://github.com/josdejong/mathjs)。这些开源库都比较成熟，我们可以直接拿来用。

- Math.js：属于很全面的运算库，文件很大，压缩后的文件就有500kb。如果你的项目涉及到大型的复杂运算，可以使用 Math.js。
- decimal.js：属于轻量的运算库，压缩后的文件只有32kb。大多数项目的数学运算，使用 decimal.js 足够了。

在使用这几个开源库时，既可以用 cdn 的方式引入，也可以用 npm 包的方式引入。

比如说，通过 cdn 的方式引入 decimal.js 时，可以这样用：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="https://cdn.bootcdn.net/ajax/libs/decimal.js/10.2.0/decimal.min.js"></script>
        <script>
            console.log('加法：');
            var a = 0.1;
            var b = 0.2;
            console.log(a + b);
            console.log(new Decimal(a).add(new Decimal(b)).toNumber());

            console.log('减法：');
            var a = 1.0;
            var b = 0.7;
            console.log(a - b);
            console.log(new Decimal(a).sub(new Decimal(b)).toNumber());

            console.log('乘法：');
            var a = 1.01;
            var b = 1.003;
            console.log(a * b);
            console.log(new Decimal(a).mul(new Decimal(b)).toNumber());

            console.log('除法：');
            var a = 0.029;
            var b = 10;
            console.log(a / b);
            console.log(new Decimal(a).div(new Decimal(b)).toNumber());
        </script>
    </body>
</html>
```

打印结果：

```
加法：
0.30000000000000004
0.3

减法：
0.30000000000000004
0.3

乘法：
1.0130299999999999
1.01303

除法：
0.0029000000000000002
0.0029
```

参考链接：

- https://www.bloghome.com.cn/post/nodejsxue-xi-bi-ji-shi-qi-fu-dian-yun-suan-decimal-js.html
- https://zhuanlan.zhihu.com/p/62381711



## Object.assign()（复制对象）

**传址（一个经典的例子）**

代码举例：

```js
var obj1 = new Object();
obj1.name = "孙悟空";

var obj2 = obj1; // 将 obj1 的地址赋值给 obj2。从此， obj1 和 obj2 指向了同一个堆内存空间

//修改obj2的name属性
obj2.name = "猪八戒";
```

上面的代码中，当我修改 obj2 的name属性后，会发现，obj1 的 name 属性也会被修改。因为obj1和obj2指向的是堆内存中的同一个地址。

这个例子要尤其注意，实战开发中，很容易忽略。

如果你打算把引用类型 A 的值赋值给 B，让A和B相互不受影响的话，可以通过 Object.assign() 来复制对象。效果如下：

```js
var obj1 = {name: '孙悟空'};

// 复制对象：把 obj1 赋值给 obj3。两者之间互不影响
var obj3 = Object.assign({}, obj1);
```



## 字符串前言

> 在日常开发中，String 对象（字符串对象）的使用频率是非常高的。所以有必要详细介绍。

需要注意的是：**字符串的所有方法，都不会改变原字符串**（字符串的不可变性），操作完成后会返回一个新的值。

字符串的常见方法如下。

## 查找字符串

### 1、indexOf()/lastIndexOf()：获取字符串中指定内容的索引

> 这个方法，是使用频率最高的一个方法。

**语法 1**：

```
索引值 = str.indexOf(想要查询的字符串);
```

备注：`indexOf()` 是从前向后查找字符串的位置。同理，`lastIndexOf()`是从后向前寻找。

**解释**：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。

因此可以得出一个重要技巧：

- **如果获取的索引值为 0，说明字符串是以查询的参数为开头的**。
- 如果获取的索引值为-1，说明这个字符串中没有指定的内容。

举例 1：(查找单个字符)

```
const str = 'abcdea';

//给字符查索引(索引值为0,说明字符串以查询的参数为开头)
console.log(str.indexOf('c'));
console.log(str.lastIndexOf('c'));

console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));
```

打印结果：

[![img](https://camo.githubusercontent.com/a3fece873900b569df5af6c8e075b2e94b3d22a4/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313432302e706e67)](https://camo.githubusercontent.com/a3fece873900b569df5af6c8e075b2e94b3d22a4/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313432302e706e67)

举例 2：（查找字符串）

```
const name = 'qianguyihao';

console.log(name.indexOf('yi')); // 打印结果：6
```

**语法 2**：

这个方法还可以指定第二个参数，用来指定查找的**起始位置**。语法如下：

```
索引值 = str.indexOf(想要查询的字符串, [起始位置]);
```

举例 3：（两个参数时，需要特别注意）

```
var str = 'qianguyihao';
result = str.indexOf('a', 3); // 从第三个位置开始查找 'a'这个字符 【重要】

console.log(result); // 打印结果：9
```

上方代码中，`indexOf()`方法中携带了两个参数，具体解释请看注释。

### 2、search()：获取字符串中指定内容的索引（参数里一般是正则）

**语法**：

```
索引值 = str.search(想要查找的字符串);
索引值 = str.search(正则表达式);
```

备注：`search()` 方法里的参数，既可以传字符串，也可以传正则表达式。

**解释**：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。

举例：

```
const name = 'qianguyihao';

console.log(name.search('yi')); // 打印结果：6
console.log(name.search(/\yi/i)); // 打印结果：6
```

### 3、includes()：字符串中是否包含指定的内容

**语法**：

```
布尔值 = str.includes(想要查找的字符串, [position]);
```

**解释**：判断一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回 true；否则返回 false。

参数中的 `position`：如果不指定，则默认为0；如果指定，则规定了检索的起始位置。

```
const name = 'qianguyihao';

console.log(name.includes('yi')); // 打印结果：true
console.log(name.includes('haha')); // 打印结果：false

console.log(name.includes('yi',7)); // 打印结果：false
```

### 4、startsWith()：字符串是否以指定的内容开头

**语法**：

```
布尔值 = str.startsWith(想要查找的内容, [position]);
```

**解释**：判断一个字符串是否以指定的子字符串开头。如果是，则返回 true；否则返回 false。

**参数中的position**：

- 如果不指定，则默认为0。
- 如果指定，则规定了**检索的起始位置**。检索的范围包括：这个指定位置开始，直到字符串的末尾。即：[position, str.length)

举例：

```
const name = 'abcdefg';

console.log(name.startsWith('a')); // 打印结果：true
console.log(name.startsWith('b')); // 打印结果：false

// 因为指定了起始位置为3，所以是在 defg 这个字符串中检索。
console.log(name.startsWith('d',3)); // 打印结果：true
console.log(name.startsWith('c',3)); // 打印结果：false
```

### 5、endsWith()：字符串是否以指定的内容结尾

**语法**：

```
布尔值 = str.endsWith(想要查找的内容, [position]);z
```

**解释**：判断一个字符串是否以指定的子字符串结尾。如果是，则返回 true；否则返回 false。

**参数中的position**：

- 如果不指定，则默认为 str.length。
- 如果指定，则规定了**检索的结束位置**。检索的范围包括：从第一个字符串开始，直到这个指定的位置。即：[0, position)
- 或者你可以这样简单理解：endsWith() 方法里的position，表示**检索的长度**。

注意：startsWith() 和 endsWith()这两个方法，他们的 position 的含义是不同的，请仔细区分。

举例：

```
const name = 'abcdefg';

console.log(name.endsWith('g')); // 打印结果：true
console.log(name.endsWith('f')); // 打印结果：false

// 因为指定了截止位置为3，所以是在 abc 这个长度为3字符串中检索
console.log(name.endsWith('c', 3)); // 打印结果：true
console.log(name.endsWith('d', 3)); // 打印结果：false
```

注意看上方的注释。

## 获取指定位置的字符

### 1、charAt(index)

语法：

```
字符 = str.charAt(index);
```

解释：返回字符串指定位置的字符。这里的 `str.charAt(index)`和`str[index]`的效果是一样的。

注意：字符串中第一个字符的下标是 0。如果参数 index 不在 [0, string.length) 之间，该方法将返回一个空字符串。

**代码举例**：

```
var str = new String('smyhvae');

for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
```

打印结果：

[![img](https://camo.githubusercontent.com/09ffa2ac433e7abd28ed80feab2124a1583fab51/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313430312e706e67)](https://camo.githubusercontent.com/09ffa2ac433e7abd28ed80feab2124a1583fab51/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313430312e706e67)

上面这个例子一般不用。一般打印数组和 json 的时候用索引，打印 String 不建议用索引。

### 2、str[index]

`str.charAt(index)`和`str[index]`的效果是一样的，不再赘述。区别在于：`str[index]`是 H5 标准里新增的特性。

### 3、charCodeAt(index)

语法：

```
字符 = str.charCodeAt(index);
```

解释：返回字符串指定位置的字符的 Unicode 编码。不会修改原字符串。

在实际应用中，通过这个方法，我们可以判断用户按下了哪个按键。

**代码举例**：打印字符串的**占位长度**。

提示：一个英文占一个位置，一个中文占两个位置。

思路：判断该字符是否在 0-127 之间（在的话是英文，不在是非英文）。

代码实现：

```
<script>
    //    sort();   底层用到了charCodeAt();

    var str = 'I love my country!我你爱中国！';

    //需求：求一个字符串占有几个字符位。
    //思路；如果是英文，站一个字符位，如果不是英文占两个字符位。
    //技术点：判断该字符是否在0-127之间。（在的话是英文，不在是非英文）
    alert(getZFWlength(str));
    alert(str.length);

    //定义方法：字符位
    function getZFWlength(string) {
        //定义一个计数器
        var count = 0;
        for (var i = 0; i < string.length; i++) {
            //对每一位字符串进行判断，如果Unicode编码在0-127，计数器+1；否则+2
            if (string.charCodeAt(i) < 128 && string.charCodeAt(i) >= 0) {
                count++;
            } else {
                count += 2;
            }
        }
        return count;
    }
</script>
```

打印结果：

```
    30
    24
```

从打印结果可以看出：字符串的长度是 24，但是却占了 30 个字符位（一个中文占两个字符位）。

另外，sort()方法其实底层也是用到了 charCodeAt()，因为用到了 Unicode 编码。

## 字符串截取

### 1、slice()

> slice() 方法用的最多。

语法：

```
新字符串 = str.slice(开始索引, 结束索引); //两个参数都是索引值。包左不包右。
```

解释：从字符串中截取指定的内容。不会修改原字符串，而是将及截取到的内容返回。

注意：上面的参数，包左不包右。参数举例如下：

- `(2, 5)` 截取时，包左不包右。
- `(2)` 表示**从指定的索引位置开始，截取到最后**。
- `(-3)` 表示从倒数第三个开始，截取到最后。
- `(1, -1)` 表示从第一个截取到倒数第一个。
- `(5, 2)` 表示前面的大，后面的小，返回值为空。

### 2、substring()

语法：

```
新字符串 = str.substring(开始索引, 结束索引); //两个参数都是索引值。包左不包右。
```

解释：从字符串中截取指定的内容。和`slice()`类似。

`substring()`和`slice()`是类似的。但不同之处在于：

- `substring()`不能接受负值作为参数。如果传递了一个**负值**，则默认使用 0。
- `substring()`还会自动调整参数的位置，如果第二个参数小于第一个，则自动交换。比如说， `substring(1, 0)`相当于截取的是第一个字符。

### 3、substr()

语法：

```
字符串 = str.substr(开始索引, 截取的长度);
```

解释：从字符串中截取指定的内容。不会修改原字符串，而是将及截取到的内容返回。

注意，这个方法的第二个参数**截取的长度**，不是结束索引。

参数举例：

- `(2,4)` 从索引值为 2 的字符开始，截取 4 个字符。
- `(1)` 从指定位置开始，截取到最后。
- `(-3)` 从倒数第几个开始，截取到最后.

备注：ECMAscript 没有对 `substr()` 方法进行标准化，因此不建议使用它。

## String.fromCharCode()

`String.fromCharCode()`：根据字符的 Unicode 编码获取字符。

代码举例：

```
var result1 = String.fromCharCode(72);
var result2 = String.fromCharCode(20013);

console.log(result1); // 打印结果：H
console.log(result2); // 打印结果：中
```

## concat()

语法：

```
    新字符串 = str1.concat(str2)； //连接两个字符串
```

解释：字符串的连接。

这种方法基本不用，直接把两个字符串相加就好。

是的，你会发现，数组中也有`concat()`方法，用于数组的连接。这个方法在数组中用得挺多的。

代码举例：

```
var str1 = 'qiangu';
var str2 = 'yihao';

var result = str1.concat(str2);
console.log(result); // 打印结果：qianguyihao
```

## split()：字符串转换为数组 【重要】

语法：

```
新的数组 = str.split(分隔符);
```

解释：通过指定的分隔符，将一个字符串拆分成一个**数组**。不会改变原字符串。

备注：`split()`这个方法在实际开发中用得非常多。一般来说，从接口拿到的 json 数据中，经常会收到类似于`"q, i, a, n"`这样的字符串，前端需要将这个字符串拆分成`['q', 'i', 'a', 'n']`数组，这个时候`split()`方法就派上用场了。

**代码举例 1**：

```
var str = 'qian, gu, yi, hao'; // 用逗号隔开的字符串
var array = str.split(','); // 将字符串 str 拆分成数组，通过逗号来拆分

console.log(array); // 打印结果是数组：["qian", " gu", " yi", " hao"]
```

**代码举例 2**：

```
//split()方法：字符串变数组
var str3 = '千古壹号|qianguyihao|许嵩';

console.log('结果1：' +str3.split()); // 无参数，表示：把整个字符串作为一个元素添加到数组中。

console.log(str3.split('')); // 参数为空字符串，则表示：分隔字符串中每一个字符，分别添加到数组中

console.log(str3.split('|')); // 参数为指定字符，表示：用 '|' 分隔字符串。此分隔符将不会出现在数组的任意一个元素中

console.log(str3.split('许')); // 同上
```

打印结果：（都是数组）

[![img](https://camo.githubusercontent.com/1c71edc8e25ec121d8bd72f1e8026cbfdf6e806b/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303631315f323035302e706e67)](https://camo.githubusercontent.com/1c71edc8e25ec121d8bd72f1e8026cbfdf6e806b/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303631315f323035302e706e67)

## replace()

语法：

```
新的字符串 = str.replace(被替换的字符，新的字符);
```

解释：将字符串中的指定内容，替换为新的内容并返回。不会修改原字符串。

注意：这个方法，默认只会替换第一个被匹配到的字符。如果要全局替换，需要使用正则。

代码举例：

```
//replace()方法：替换
var str2 = 'Today is fine day,today is fine day !';
console.log(str2);

console.log(str2.replace('today', 'tomorrow')); //只能替换第一个today
console.log(str2.replace(/today/gi, 'tomorrow')); //这里用到了正则，才能替换所有的today
```

## repeat()：重复字符串

语法：

```
newStr = str.repeat(重复的次数);
```

解释：将字符串重复指定的次数。会返回新的值，不会修改原字符串。

举例1：

```
const name = 'qianguyihao';

console.log(name.repeat(2)); // 打印内容：qianguyihaoqianguyihao
```

举例2：（模糊字符串的后四位）

```
const telephone = '13088889999';
const mix_telephone = telephone.slice(0, -4) + '*'.repeat(4); // 模糊电话号码的后四位

console.log(telephone); // 打印结果：13088889999
console.log(mix_telephone); // 打印结果：1308888****
```

## trim()

`trim()`：去除字符串前后的空白。

代码举例：

```js
//去除字符串前后的空格，trim();
let str = '   a   b   c   ';
console.log(str);
console.log(str.length);

console.log(str.trim());
console.log(str.trim().length);
```

打印结果：

[![img](https://camo.githubusercontent.com/cb151967c5e43e49e31f4dea0baa8ba4d7c07b0d/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303630375f323133322e706e67)](https://camo.githubusercontent.com/cb151967c5e43e49e31f4dea0baa8ba4d7c07b0d/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303630375f323133322e706e67)

## 大小写转换

举例：

```js
var str = 'abcdEFG';

//转换成小写
console.log(str.toLowerCase());

//转换成大写
console.log(str.toUpperCase());
```

## html 方法

- anchor() 创建 a 链接
- big()
- sub()
- sup()
- link()
- bold()

注意，str.link() 返回值是字符串。

举例：

```js
var str = '你好';

console.log(str.anchor());
console.log(str.big());
console.log(str.sub());
console.log(str.sup());
console.log(str.link('http://www.baidu.com'));
console.log(str.bold());
```

[![img](https://camo.githubusercontent.com/b27425cadabd78d883c98a54449f0047d7b1c1cf/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313533362e706e67)](https://camo.githubusercontent.com/b27425cadabd78d883c98a54449f0047d7b1c1cf/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313533362e706e67)



## 内置对象：Date

> Date 对象在实际开发中，使用得很频繁，且容易在细节地方出错，需要引起重视。

内置对象 Date 用来处理日期和时间。

**需要注意的是**：与 Math 对象不同，Date 对象是一个**构造函数** ，需要**先实例化**后才能使用。

## 创建Date对象

创建Date对象有两种写法：

- 写法一：如果Date()不写参数，就返回当前时间对象
- 写法二：如果Date()里面写参数，就返回括号里输入的时间对象

针对这两种写法，我们来具体讲一讲。

### 写法一：不传递参数时，则获取系统的当前时间对象

代码举例：

```
var date1 = new Date();
console.log(date1);
console.log(typeof date1);
```

代码解释：不传递参数时，表示的是获取系统的当前时间对象。也可以理解成是：获取当前代码执行的时间。

打印结果：

```
Mon Feb 17 2020 21:57:22 GMT+0800 (中国标准时间)
object
```

### 写法二：传递参数

传递参数时，表示获取指定时间的时间对象。参数中既可以传递字符串，也可以传递数字，也可以传递时间戳。

通过传参的这种写法，我们可以把时间字符串/时间数字/时间戳，按照指定的格式，转换为时间对象。

举例1：（参数是字符串）

```
const date11 = new Date('2020/02/17 21:00:00');
console.log(date11); // Mon Feb 17 2020 21:00:00 GMT+0800 (中国标准时间)

const date12 = new Date('2020/04/19'); // 返回的就是四月
console.log(date12); // Sun Apr 19 2020 00:00:00 GMT+0800 (中国标准时间)

const date13 = new Date('2020-05-20');
console.log(date13); // Wed May 20 2020 08:00:00 GMT+0800 (中国标准时间)

const date14 = new Date('Wed Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)');
console.log(date14); // Fri Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)
```

举例2：（参数是多个数字）

```
const date21 = new Date(2020, 2, 18); // 注意，第二个参数返回的是三月，不是二月
console.log(date21); // Wed Mar 18 2020 00:00:00 GMT+0800 (中国标准时间)

const date22 = new Date(2020, 3, 18, 22, 59, 58);
console.log(date22); // Sat Apr 18 2020 22:59:58 GMT+0800 (中国标准时间)

const params = [2020, 06, 12, 16, 20, 59];
const date23 = new Date(...params);
console.log(date23); // Sun Jul 12 2020 16:20:59 GMT+0800 (中国标准时间)
```

举例3：（参数是时间戳）

```
const date31 = new Date(1591950413388);
console.log(date31); // Fri Jun 12 2020 16:26:53 GMT+0800 (中国标准时间)

// 先把时间对象转换成时间戳，然后把时间戳转换成时间对象
const timestamp = new Date().getTime();
const date32 = new Date(timestamp);
console.log(date32); // Fri Jun 12 2020 16:28:21 GMT+0800 (中国标准时间)
```

## 日期的格式化

上一段内容里，我们获取到了 Date **对象**，但这个对象，打印出来的结果并不是特别直观。

如果我们需要获取日期的**指定部分**，就需要用到 Date对象自带的方法。

获取了日期指定的部分之后，我们就可以让日期按照指定的格式，进行展示（即日期的格式化）。比如说，我期望能以 `2020-02-02 19:30:59` 这种格式进行展示。

在这之前，我们先来看看 Date 对象有哪些方法。

### Date对象的方法

Date对象 有如下方法，可以获取日期和时间的**指定部分**：

| 方法名            | 含义              | 备注                 |
| ----------------- | ----------------- | -------------------- |
| getFullYear()     | 获取年份          |                      |
| getMonth()        | **获取月： 0-11** | 0代表一月            |
| getDate()         | **获取日：1-31**  | 获取的是几号         |
| getDay()          | **获取星期：0-6** | 0代表周日，1代表周一 |
| getHours()        | 获取小时：0-23    |                      |
| getMinutes()      | 获取分钟：0-59    |                      |
| getSeconds()      | 获取秒：0-59      |                      |
| getMilliseconds() | 获取毫秒          | 1s = 1000ms          |

**代码举例**：

```
	// 我在执行这行代码时，当前时间为 2019年2月4日，周一，13:23:52
	var myDate = new Date();

	console.log(myDate); // 打印结果：Mon Feb 04 2019 13:23:52 GMT+0800 (中国标准时间)

	console.log(myDate.getFullYear()); // 打印结果：2019
	console.log(myDate.getMonth() + 1); // 打印结果：2
	console.log(myDate.getDate()); // 打印结果：4

	var dayArr  = ['星期日', '星期一', '星期二', '星期三', '星期四','星期五', '星期六'];
	console.log(myDate.getDay()); // 打印结果：1
	console.log(dayArr[myDate.getDay()]); // 打印结果：星期一

	console.log(myDate.getHours()); // 打印结果：13
	console.log(myDate.getMinutes()); // 打印结果：23
	console.log(myDate.getSeconds()); // 打印结果：52
	console.log(myDate.getMilliseconds()); // 打印结果：393

	console.log(myDate.getTime()); // 获取时间戳。打印结果：1549257832393
```

获取了日期和时间的指定部分之后，我们把它们用字符串拼接起来，就可以按照自己想要的格式，来展示日期。

### 举例：年月日的格式化

代码举例：

```
console.log(formatDate());

/*
    方法：日期格式化。
    格式要求：今年是：2020年02月02日 08:57:09 星期日
*/
function formatDate() {
    var date = new Date();

    var year = date.getFullYear(); // 年
    var month = date.getMonth() + 1; // 月
    var day = date.getDate(); // 日

    var week = date.getDay(); // 星期几
    var weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    var hour = date.getHours(); // 时
    hour = hour < 10 ? '0' + hour : hour; // 如果只有一位，则前面补零

    var minute = date.getMinutes(); // 分
    minute = minute < 10 ? '0' + minute : minute; // 如果只有一位，则前面补零

    var second = date.getSeconds(); // 秒
    second = second < 10 ? '0' + second : second; // 如果只有一位，则前面补零

    var result = '今天是：' + year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second + ' ' + weekArr[week];

    return result;
}
```

## 获取时间戳

### 时间戳的定义和作用

**时间戳**：指的是从格林威治标准时间的`1970年1月1日，0时0分0秒`到当前日期所花费的**毫秒数**（1秒 = 1000毫秒）。

计算机底层在保存时间时，使用的都是时间戳。时间戳的存在，就是为了**统一**时间的单位。

我们经常会利用时间戳来计算时间，因为它更精确。而且，在实战开发中，接口返回给前端的日期数据，都是以时间戳的形式。

我们再来看下面这样的代码：

```
	var myDate = new Date("1970/01/01 0:0:0");

	console.log(myDate.getTime()); // 获取时间戳
```

打印结果（可能会让你感到惊讶）

```
	-28800000
```

为啥打印结果是`-28800000`，而不是`0`呢？这是因为，我们的当前代码，是在中文环境下运行的，与英文时间会存在**8个小时的时差**（中文时间比英文时间早了八个小时）。如果代码是在英文环境下运行，打印结果就是`0`。

### getTime()：获取时间戳

`getTime()` 获取日期对象的**时间戳**（单位：毫秒）。这个方法在实战开发中，用得比较多。但还有比它更常用的写法，我们往下看。

### 获取 Date 对象的时间戳

代码演示：

```
// 方式一：获取 Date 对象的时间戳（最常用的写法）
const timestamp1 = +new Date();
console.log(timestamp1); // 打印结果举例：1589448165370

// 方式二：获取 Date 对象的时间戳（较常用的写法）
const timestamp2 = new Date().getTime();
console.log(timestamp2); // 打印结果举例：1589448165370

// 方式三：获取 Date 对象的时间戳
const timestamp3 = new Date().valueOf();
console.log(timestamp3); // 打印结果举例：1589448165370

// 方式4：获取 Date 对象的时间戳
const timestamp4 = new Date() * 1;
console.log(timestamp4); // 打印结果举例：1589448165370

// 方式5：获取 Date 对象的时间戳
const timestamp5 = Number(new Date());
console.log(timestamp5); // 打印结果举例：1589448165370
```

上面这五种写法都可以获取任意 Date 对象的时间戳，最常见的写法是**方式一**，其次是方式二。

根据前面所讲的关于「时间戳」的概念，上方代码获取到的时间戳指的是：从 `1970年1月1日，0时0分0秒` 到现在所花费的总毫秒数。

### 获取当前时间的时间戳

如果我们要获取**当前时间**的时间戳，除了上面的三种方式之外，还有另一种方式。代码如下：

```
// 方式六：获取当前时间的时间戳（很常用的写法）
console.log(Date.now()); // 打印结果举例：1589448165370
```

上面这种方式六，用得也很多。只不过，`Date.now()`是H5标准中新增的特性，如果你的项目需要兼容低版本的IE浏览器，就不要用了。这年头，谁还用IE呢？

### 利用时间戳检测代码的执行时间

我们可以在业务代码的前面定义 `时间戳1`，在业务代码的后面定义 `时间戳2`。把这两个时间戳相减，就能得出业务代码的执行时间。

### format()

将时间对象转换为指定格式。

参考链接：https://www.cnblogs.com/tugenhua0707/p/3776808.html

## Moment.js

Moment.js 是一个轻量级的JavaScript时间库，我们可以利用它很方便地进行时间操作，提升开发效率。

- 中文官网：http://momentjs.cn/

使用举例：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="https://cdn.bootcdn.net/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
        <script>
            // 按照指定的格式，格式化当前时间
            console.log(moment().format('YYYY-MM-DD HH:mm:ss')); // 打印结果举例：2020-06-12 16:38:38
            console.log(typeof moment().format('YYYY-MM-DD HH:mm:ss')); // 打印结果：string

            // 按照指定的格式，格式化指定的时间
            console.log(moment('2020/06/12 18:01:59').format('YYYY-MM-DD HH:mm:ss')); // 打印结果：2020-06-12 18:01:59

            // 按照指定的格式，获取七天后的时间
            console.log(moment().add(7, 'days').format('YYYY-MM-DD hh:mm:ss')); // 打印结果举例：2020-06-19 04:43:56
        </script>
    </body>
</html>
```



## 数组的方法清单

### 数组的类型相关

| 方法                             | 描述                               | 备注 |
| -------------------------------- | ---------------------------------- | ---- |
| Array.isArray()                  | 判断是否为数组                     |      |
| toString()                       | 将数组转换为字符串                 |      |
| Array.from(arrayLike)            | 将**伪数组**转化为**真数组**       |      |
| Array.of(value1, value2, value3) | 创建数组：将**一系列值**转换成数组 |      |

注意，获取数组的长度是用`length`属性，不是方法。关于 `length`属性，详见上一篇文章。

### 数组元素的添加和删除

| 方法      | 描述                                                         | 备注           |
| --------- | ------------------------------------------------------------ | -------------- |
| push()    | 向数组的**最后面**插入一个或多个元素，返回结果为**新数组的长度** | 会改变原数组   |
| pop()     | 删除数组中的**最后一个**元素，返回结果为**被删除的元素**     | 会改变原数组   |
| unshift() | 在数组**最前面**插入一个或多个元素，返回结果为**新数组的长度** | 会改变原数组   |
| shift()   | 删除数组中的**第一个**元素，返回结果为**被删除的元素**       | 会改变原数组   |
|           |                                                              |                |
| slice()   | 从数组中**提取**指定的一个或多个元素，返回结果为**新的数组** | 不会改变原数组 |
| splice()  | 从数组中**删除**指定的一个或多个元素，返回结果为**被删除元素组成的新数组** | 会改变原数组   |
|           |                                                              |                |
| fill()    | 填充数组：用固定的值填充数组，返回结果为**新的数组**         | 不会改变原数组 |

### 数组的合并和拆分

| 方法     | 描述                                                 | 备注             |
| -------- | ---------------------------------------------------- | ---------------- |
| concat() | 合并数组：连接两个或多个数组，返回结果为**新的数组** | 不会改变原数组   |
| join()   | 将数组转换为字符串，返回结果为**转换后的字符串**     | 不会改变原数组   |
| split()  | 将字符串按照指定的分隔符，组装为数组                 | 不会改变原字符串 |

注意，`split()`是字符串的方法，不是数组的方法。

### 数组排序

| 方法      | 描述                                                    | 备注         |
| --------- | ------------------------------------------------------- | ------------ |
| reverse() | 反转数组，返回结果为**反转后的数组**                    | 会改变原数组 |
| sort()    | 对数组的元素,默认按照**Unicode 编码**，从小到大进行排序 | 会改变原数组 |

### 查找数组的元素

| 方法                  | 描述                                                         | 备注                                                     |
| --------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| indexOf(value)        | 从前往后索引，检索一个数组中是否含有指定的元素               |                                                          |
| lastIndexOf(value)    | 从后往前索引，检索一个数组中是否含有指定的元素               |                                                          |
| find(function())      | 找出**第一个**满足「指定条件返回 true」的元素                |                                                          |
| findIndex(function()) | 找出**第一个**满足「指定条件返回 true」的元素的 index        |                                                          |
| every()               | 确保数组中的每个元素都满足「指定条件返回 true」，则停止遍历，此方法才返回 true | 全真才为真。要求每一项都返回 true，最终的结果才返回 true |
| some()                | 数组中只要有一个元素满足「指定条件返回 true」，则停止遍历，此方法就返回 true | 一真即真。只要有一项返回 true，最终的结果就返回 true     |

### 遍历数组



| 方法      | 描述                                                         | 备注                                                   |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| for 循环  | 这个大家都懂                                                 |                                                        |
| forEach() | 和 for 循环类似，但需要兼容 IE8 以上                         | forEach() 没有返回值。也就是说，它的返回值是 undefined |
| map()     | 对原数组中的每一项进行加工，将组成新的数组                   | 不会改变原数组                                         |
| filter()  | 过滤数组：返回结果是 true 的项，将组成新的数组，返回结果为**新的数组** | 不会改变原数组                                         |
| reduce    | 接收一个函数作为累加器，返回值是回调函数累计处理的结果       |                                                        |



## 高阶函数

### 高阶函数的概念

当 函数 A 接收函数 B 作为**参数**，或者把函数 C 作为**返回值**输出时，我们称 函数 A 为高阶函数。

通俗来说，高阶函数是 对其他函数进行操作 的函数。

### 高阶函数举例1：把其他函数作为参数

```
function fn1(a, b, callback) {
    console.log(a + b);
    // 执行完上面的 console.log() 语句之后，再执行下面这个 callback 函数。也就是说，这个 callback 函数是最后执行的。
    callback && callback();
}

fn1(10, 20, function () {
    console.log('我是最后执行的函数');
});
```

打印结果：

```
30
我是最后执行的函数
```

### 高阶函数举例2：把其他区函数作为返回值

```
function fn1() {
    let a = 20;

    return function () {
        console.log(a);
    };
}

const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
foo();
```

上面的代码，产生了闭包现象。关于闭包，详见下一篇文章《JavaScript基础/闭包.md》。



## 闭包的引入

我们知道，变量根据作用域的不同分为两种：全局变量和局部变量。

- 函数内部可以访问全局变量和局部变量。
- 函数外部只能访问全局变量，不能访问局部变量。
- 当函数执行完毕，本作用域内的局部变量会销毁。

比如下面这样的代码：

```
function foo() {
    let a = 1;
}

foo();
console.log(a); // 打印报错：Uncaught ReferenceError: a is not defined
```

上方代码中，由于变量 `a` 是函数内的局部变量，所以外部无法访问。

但是，在有些场景下，我们就是想要在函数外部访问函数内的局部变量，那要怎么办呢？这就需要引入闭包的概念。

## 闭包的概念和代码举例

### 闭包的概念

**闭包**（closure）：指有权**访问**另一个函数作用域中**变量**的**函数**。

上面这个概念，出自《JavaScript 高级程序设计（第 3 版）》这本书。上面的概念中指出，闭包是一种函数；当然，你可以**把闭包理解成是一种现象**。具体解释如下。

简单理解就是：如果**这个作用域可以访问另外一个函数内部的局部变量**，那就产生了闭包（此时，你可以把闭包理解成是一种现象）；而另外那个作用域所在的函数称之为**闭包函数**。注意，这里强调的是访问**局部变量**哦。

### 闭包代码举例

代码举例：

```
function fn1() {
    let a = 10;

    function fn2() {
        console.log(a);
    }
    fn2();
}

fn1();
```

打印结果：

```
10
```

上方代码中，函数 fn2 的作用域 访问了 fn1 中的局部变量，那么，此时在 fn1 中就产生了闭包，fn1 称之为闭包函数。

### 在 chrome 浏览器控制台中，调试闭包

上面的代码中，要怎么验证，确实产生了闭包呢？我们可以在 chrome 浏览器的控制台中设置断点，当代码执行到 `console.log(a)`这一行的时候，如下图所示：

[![img](https://camo.githubusercontent.com/cabf597b39c6fa4b9074f8c822b3e5310551af7e/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303730335f323035352e706e67)](https://camo.githubusercontent.com/cabf597b39c6fa4b9074f8c822b3e5310551af7e/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303730335f323035352e706e67)

上图中， Local 指的是局部作用域，Global 指的是 全局作用域；而 Closure 则是**闭包**，fn1 是一个闭包函数。

## 闭包的作用：延伸变量的作用范围

我们来看看下面这段闭包的代码：

```
function fn1() {
    let a = 20;

    function fn2() {
        console.log(a);
    }
    return fn2;
}

const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。foo 代表的就是 fn2 函数
foo();
```

上方代码中，foo 代表的就是整个 fn2 函数。当执行了 `foo()` 语句之后（相当于执行了 ），fn1 函数内就产生了闭包。

一般来说，在 fn1 函数执行完毕后，它里面的变量 a 会立即销毁。但此时由于产生了闭包，所以 **fn1 函数中的变量 a 不会立即销毁，因为 fn2 函数还要继续调用变量 a**。只有等所有函数把变量 a 调用完了，变量 a 才会销毁。

而且，可以看出， 在执行 `foo()`语句之后，竟然能够打印出 `20`，这就完美通过闭包实现了：全局作用局成功访问到了局部作用域中的变量 a。

因此，我们可以看出，闭包的主要作用就是：延伸了变量的作用范围。

上面的代码也可以简写成：

```
function fn1() {
    let a = 20;

    return function () {
        console.log(a);
    };
}

const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
foo();
```