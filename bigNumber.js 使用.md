# bigNumber.js 使用

作者：H口先生

bigNumber GitHub地址：https://github.com/MikeMcl/bignumber.js

### 介绍：

不限制计算长度，但是传值给 `bigNumber.js` 的时候数字超过16位请用字符串（详情见下例子），不然会有问题。不要在传值的时候用原生的计算，不然会有问题（详情见下例子）。

#### 错误使用方式

```js
// 错误使用方式

// 可以用数字，超出16位请使用字符串
new BigNumber(99999999999999999) // 正确方式new BigNumber('99999999999999999')
new BigNumber(0.1 + 0.2)
```



### 安装：

```tex
yarn add bignumber.js
或者
npm i bignumber.js
```

### 简单使用

```js
import BigNumber from 'bignumber.js' // 引入

////// js里面 /////
let num = new BigNumber(0.1) // 不加new也可以
num = num.plus(0.2) // 加0.2
console.log(num.toFixed()) // 不然输出的是个对象 // 0.3
console.log(num.toNumber()) // 或者这样
```



### 常用语法

传值都是可以传 `number|string|BigNumber`

计算完原来的值是不会变的，计算完后要赋值才可以

### 输出：

```js
let num = new BigNumber('1111222233334444555566')
console.log(num) // 输出的是对象（bigNumber对象）
// .toSring()超出会指数返回，.toFixed()不会
console.log(num.toString()) //1.111222233334444555566e+21
// .toFixed()可指定强制返回多少位小数
console.log(num.toFixed()) // 1111222233334444555566
// 还有.toNumber和.toSring()一样

// 国际化逗号.toFormat(指定多少位小数)
new BigNumber('1234567.898765').toFormat(2) // 1,234,567.90
```



#### 加法plus

.plus(数值, 进制默认10进制)

```js
let num = new BigNumber(0.1) // 不加new也可以
num = num.plus(0.2)
let num2 = num.plus(0.2).plus(0.1) // 可以连续用着用
console.log(num.toFixed()) // 0.3
console.log(num2.toFixed()) // 0.4
```

#### 减法minus

.minus(数值, 进制默认10进制)

```js
let num = new BigNumber(0.3) // 不加new也可以
num = num.minus(0.2) // 0.1
```

#### 减法multipliedBy 或 times

.multipliedBy (数值, 进制默认10进制)

.times(数值, 进制默认10进制) `缩写`

```js
let num =  BigNumber(0.1)
num = num.multipliedBy(3) // 0.3
num = num.times(3) // 0.9
```

#### 除法 dividedBy

.dividedBy(数值, 进制默认10进制)

.div(数值, 进制默认10进制) `缩写`

```hs
let num =  BigNumber(9)
num = num.dividedBy(3) // 3
num = num.div(2) // 1.5
```

#### 除法-取整 dividedToIntegerBy

.dividedToIntegerBy(数值, 进制默认10进制)

.idiv(数值, 进制默认10进制) `缩写`

```js
BigNumber(6).idiv(3) // 2
BigNumber(9).idiv(3) // 3
BigNumber(10).idiv(3) // 3
BigNumber(2).idiv(3) // 0
```

#### 除法-取余 modulo

.mod(数值, 进制默认10进制) `缩写`

```js
// 相当于 %
BigNumber(2).modulo(3) // 2
BigNumber(8).modulo(3) // 2
BigNumber(6).modulo(3) // 0
BigNumber(9).modulo(3) // 0
BigNumber(1).modulo(0.9) // 0.1
```

#### 指数运算 exponentiatedBy

.pow(指数, 可能是进制不太清楚) `缩写`

```js
BigNumber(5).pow(2) // 25
BigNumber(5).pow(2,10) // 5
```

#### 开平方 squareRoot

.sqrt()

```js
BigNumber(16).sqrt() // 4
```

#### 四舍五入 toFixed

.toFixed(保留多少位)

```js
BigNumber(3.14).toFixed(2) // 2.15
BigNumber(3.14661626).toFixed() // 不输入全输出 3.14661626
```

#### 国际化逗号.toFormat

.toFormat(指定多少位小数)

```js
BigNumber('1234567.898765').toFormat(2) // 1,234,567.90
```

