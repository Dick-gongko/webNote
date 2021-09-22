# JavaScript 防抖

作者：H口先生

**用到setTimeout()和ClearTimeout()**

上代码

```js
var TimeId = -1；
test(){
    clearTimeout(TimeId);
          TimeId = setTimeout(()=>{
            //执行的代码....
     },1300);
}
//如果这个函数间隔1.3秒捏调用一次的话里面的定时器函数是不会执行的
```



