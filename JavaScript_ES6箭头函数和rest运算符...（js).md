# JavaScript_ES6箭头函数和rest运算符...（js)

## 前言

ES6 在**函数扩展**方面，新增了很多特性。例如：

- 箭头函数
- 参数默认值
- 参数结构赋值
- 扩展运算符
- rest 参数
- this 绑定
- 尾调用

## 箭头函数

### 定义箭头函数的语法

语法：

```
(参数1, 参数2 ...) => { 函数体 }
```

解释：

- 如果有且仅有 1 个形参，则`()`可以省略
- 如果函数体内有且仅有 1 条语句，则`{}`可以省略，但前提是，这条语句必须是 return 语句。

需要强调的是，箭头函数是没有函数名的，既然如此，那要怎么调用箭头函数呢？你可以将箭头函数赋值给一个变量，通过变量名调用函数；也可以直接使用箭头函数。我们来看看下面的例子。

### 举例

写法 1、定义和调用函数：（传统写法）

```
function fn1(a, b) {
    console.log('haha');
    return a + b;
}

console.log(fn1(1, 2)); //输出结果：3
```

写法 2、定义和调用函数：（ES6 中的写法）

```
const fn2 = (a, b) => {
    console.log('haha');
    return a + b;
};

console.log(fn2(1, 2)); //输出结果：3
```

上面的两种写法，效果是一样的。

从上面的箭头函数中，我们可以很清晰地看到变量名、参数名、函数体。

另外，箭头函数的写法还可以精简一下，继续往下看。

在箭头函数中，如果方法体内只有一句话，且这句话是 return 语句，那就可以把 `{}`省略。写法如下：

```
const fn2 = (a, b) => a + b;

console.log(fn2(1, 2)); //输出结果：3
```

在箭头函数中，如果形参只有一个参数，则可以把`()`省略。写法如下：

```
const fn2 = (a) => {
    console.log('haha');
    return a + 1;
};

console.log(fn2(1)); //输出结果：2
```

## 箭头函数的 this 的指向

> 箭头函数只是为了让函数写起来更简洁优雅吗？当然不只是这个原因，还有一个很大的作用是与 this 的指向有关。

ES6 之前的普通函数中：this 指向的是函数被调用的对象（也就是说，谁调用了函数，this 就指向谁）。

而 ES6 的箭头函数中：**箭头函数本身不绑定 this**，this 指向的是**箭头函数定义位置的 this**（也就是说，箭头函数在哪个位置定义的，this 就跟这个位置的this指向相同）。

代码举例：

```
const obj = { name: '千古壹号' };

function fn1() {
    console.log(this); // 第一个 this
    return () => {
        console.log(this); // 第二个 this
    };
}

const fn2 = fn1.call(obj);
fn2();
```

打印结果：

```
obj
obj
```

代码解释：（一定要好好理解下面这句话）

上面的代码中，箭头函数是在 fn1()函数里面定义的，所以第二个 this 跟 第一个 this 指向的是**同一个位置**。又因为，在执行 `fn1.call(obj)`之后，第一个 this 就指向了 obj，所以第二个 this 也是指向 了 obj。

### 面试题：箭头函数的this指向

代码举例：

```
const name = '许嵩';
const obj = {
    name: '千古壹号',
    sayHello: () => {
        console.log(this.name);
    },
};

obj.sayHello();
```

上方代码的打印结果是什么？你可能很难想到。

正确答案的打印结果是`许嵩`。因为 `obj` 这个对象并不产生作用域， `sayHello()` 这个箭头函数实际仍然是定义在 window 当中的，所以 这里的 this指向是 window。

## 参数默认值

**传统写法**：

```
function fn(param) {
    let p = param || 'hello';
    console.log(p);
}
```

上方代码中，函数体内的写法是：如果 param 不存在，就用 `hello`字符串做兜底。这样写比较啰嗦。

**ES6 写法**：（参数默认值的写法，很简洁）

```
function fn(param = 'hello') {
    console.log(param);
}
```

在 ES6 中定义方法时，我们可以给方法里的参数加一个**默认值**（缺省值）：

- 方法被调用时，如果没有给参数赋值，那就是用默认值；
- 方法被调用时，如果给参数赋值了新的值，那就用新的值。

如下：

```
var fn2 = (a, b = 5) => {
    console.log('haha');
    return a + b;
};
console.log(fn2(1)); //第二个参数使用默认值 5。输出结果：6

console.log(fn2(1, 8)); //输出结果：9
```

**提醒 1**：默认值的后面，不能再有**没有默认值的变量**。比如`(a,b,c)`这三个参数，如果我给 b 设置了默认值，那么就一定要给 c 设置默认值。

**提醒 2**：

我们来看下面这段代码：

```
let x = 'smyh';
function fn(x, y = x) {
    console.log(x, y);
}
fn('vae');
```

注意第二行代码，我们给 y 赋值为`x`，这里的`x`是括号里的第一个参数，并不是第一行代码里定义的`x`。打印结果：`vae vae`。

如果我把第一个参数改一下，改成：

```
let x = 'smyh';
function fn(z, y = x) {
    console.log(z, y);
}
fn('vae');
```

此时打印结果是：`vae smyh`。

## 扩展运算符（剩余参数）

注意区分：

- 扩展运算符的格式为`...`
- rest 运算符的格式为`...变量名`

**剩余参数**允许我们将一个不确定数量的参数表示为一个**数组**。

**传统写法**：

ES5 中，在定义方法时，参数要确定个数，如下：（程序会报错）

```
function fn(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

fn(1, 2, 3);
```

上方代码中，因为方法的参数是三个，但使用时是用到了四个参数，所以会报错：

[![img](https://camo.githubusercontent.com/c59bfe6891d05ec5b2cdd4d062c8fddf8f813b47/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330345f313633382e706e67)](https://camo.githubusercontent.com/c59bfe6891d05ec5b2cdd4d062c8fddf8f813b47/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330345f313633382e706e67)

**ES6写法**：

ES6中，我们有了扩展运算符，就不用担心报错的问题了。代码可以这样写：

```
function fn(...arg) {
    //当不确定方法的参数时，可以使用扩展运算符
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}

fn(1, 2, 3); //方法的定义中了四个参数，但调用函数时只使用了三个参数，ES6 中并不会报错。
```

[![img](https://camo.githubusercontent.com/dc77da4d15e4503468d439d7e72fcfa3c054e579/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330345f313635302e706e67)](https://camo.githubusercontent.com/dc77da4d15e4503468d439d7e72fcfa3c054e579/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330345f313635302e706e67)

上方代码中注意，arg 参数之后，不能再加别的参数，否则编译报错。

还可以这样写：

```
function fn1(first, ...args) {
    console.log(first); // 10
    console.log(args); // 数组：[20, 30]
}

fn1(10, 20, 30);
```

### 剩余参数的举例

**举例1**：将参数求和

代码举例：

```
function fn1(...args) {
    let sum = 0;
    args.forEach(item => sum += item);
    return sum;
}
console.log(fn1(10, 20, 30));
```

打印结果；60

**举例2**：数组赋值的问题

我们来分析一段代码：（将数组 arr1 赋值给 arr2）

```
let arr1 = ['www', 'smyhvae', 'com'];
let arr2 = arr1; // 将 arr1 赋值给 arr2，其实是让 arr2 指向 arr1 的内存地址
console.log('arr1:' + arr1);
console.log('arr2:' + arr2);
console.log('---------------------');

arr2.push('你懂得'); //往arr2 里添加一部分内容
console.log('arr1:' + arr1);
console.log('arr2:' + arr2);
```

运行结果：

[![img](https://camo.githubusercontent.com/80ea0c8c7ec385212d02ebc34636f2e4a7210cb8/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330345f313935302e706e67)](https://camo.githubusercontent.com/80ea0c8c7ec385212d02ebc34636f2e4a7210cb8/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330345f313935302e706e67)

上方代码中，我们往往 arr2 里添加了`你懂的`，却发现，arr1 里也有这个内容。原因是：`let arr2 = arr1;`其实是让 arr2 指向 arr1 的地址。也就是说，二者指向的是同一个内存地址。

如果不想让 arr1 和 arr2 指向同一个内存地址，我们可以借助扩展运算符来做：

```
let arr1 = ['www', 'smyhvae', 'com'];
let arr2 = [...arr1]; //arr2 会重新开辟内存地址
console.log('arr1:' + arr1);
console.log('arr2:' + arr2);
console.log('---------------------');

arr2.push('你懂得'); //往arr2 里添加一部分内容
console.log('arr1:' + arr1);
console.log('arr2:' + arr2);
```

运行结果：

[![img](https://camo.githubusercontent.com/0592e4bd960b8bc575aaaeefa5f0e1a49c1a0182/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330345f313935312e706e67)](https://camo.githubusercontent.com/0592e4bd960b8bc575aaaeefa5f0e1a49c1a0182/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330345f313935312e706e67)

我们明白了这个例子，就可以避免开发中的很多业务逻辑上的 bug。

## `rest` 运算符

`rest` 在英文中指的是**剩余部分**（不是指休息）。我们来举个例子，理解剩余部分的含义：

```
function fn(first, second, ...arg) {
    console.log(arg.length);
}

fn(0, 1, 2, 3, 4, 5, 6); // 调用函数后，输出结果为 5
```

上方代码的输出结果为 5。 调用`fn()`时，里面有七个参数，而`arg`指的是剩下的部分（因为除去了`first`和`second`）。

从上方例子中可以看出，`rest`运算符适用于：知道前面的一部分参数的数量，但对于后面剩余的参数数量未知的情况。

## 模块化

**模块化的意义**：

比如说，当我需要用到 jQuery 库时，我会把 jQuery.js 文件引入到我自己代码的最前面；当我需要用到 vue 框架时，我会把 vue.js 文件引入到我自己代码的最前面。

可是，如果有 20 个这样的文件，就会产生 20 次 http 请求。这种做法的性能，肯定是不能接受的。

如果把 20 个文件直接写在一个文件里，肯定是不方便**维护**的。可如果写成 20 个文件，这 20 个文件又不好排序。这就是一个很矛盾的事情，于是，模块化就诞生了。

**模块化历程**：commonJS、AMD 规范（RequireJS）、CMD 规范（SeaJS）；import & export

**export：**

静态化：必须在顶部，不能使用条件语句，自动采用严格模式。（静态化有利于性能以及代码的稳定性）