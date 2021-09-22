# VUE基础知识

介绍：vue是构建数据驱动web应用开发框架

### 认识vue

```html
<body>
    <div id="box">
        {{ myname }}    <!-- 变量 -->
    </div>
</body>
<script>
    var vm = new Vue({
        el:"#box", //挂载点
        data:{     //状态
			myname:"H口先生"	//变量赋值
        }
    });
</script>
```

输出：H口先生

**ps：**data中只定义状态

### 插值表达式

文本	**{{}}**

## 指令

### v-text

设置标签内容（textContent）

```html
<body>
    <div v-text="text"></div>
</body>
<script>
    var vm = new Vue({
        el:"div", //挂载点
        data:{
			text:"H口先生"	//变量赋值
        }
    });
</script>
```

输出：`H口先生`

**ps:**v-text标签内全部内容替换成变量的内容（标签里面如果有内容会被覆盖），内部支持写表达式。

如果要要保留内容使用**差值表达式{{}}**可以替换指定内容。

```html
<div v-text="text"></div>
```



### v-html 

纯HTML，要完全相信的来源才使用

要防XSS，csrf

- 前端过滤
- 后台转义（<> `&lt` `&gt`)
- 给cookie加上属性http

```html
<!-- 指令 -->
<div v-html="text" id="box"></div>
<script>
    var vm = new Vue({
        el:"#box",
        data:{
			text:"<b>Test</b>"
        }
    });
</script>
```

输出:<b>Test</b>

### v-bind

用v-bind是为了可以动态的改变属性

```html
<img v-bind:src="testImg" id="box">	<!-- 把变量改为路径就可以了 -->
<script>
    var vm = new Vue({
        el:"#box",
        data:{
			testImg:"http://gongko.top/favicon.ico"
        }
    });
</script>
```

输出：<img v-bind:src="http://gongko.top/favicon.ico">

**ps：**`<img v-bind:src="testImg" id="box">`"testImg"双引号里面的是变量，如果里面还用输入字符串的话可以在双引号里面加单引号。" 变量'`字符串`' "

缩写:

```html
<div v-bind:class="demo"></div>
<!-- 缩写 -->
<div :class="demo"></div>
```



### v-if

**动态创建与删除**

```html
<div v-if="isCreated">创建</div>
```

isCreated的值为true就创建这个div，值为false就删除div

### v-show

**动态显示与隐藏**

```html
<div v-show="isShow">显示</div>
```

isShow的值为true就显示这个div，值为false就隐藏div

**ps：**两个类似但是一个是创建一个是显示。

### v-on

**补充（事件）**

```html
<button v-on:click="handleMyClick()" id="box">{{i}}</button>
<script>
    new Vue({
        el:"#box",
        data:{
			i:0
        },
		methods:{
			handleMyClick:function(){
				this.i++;
			}
		}
    });
</script>
```

输出的是个按键，点击一下加1

**ps：methods里面写的方法、date里写的是状态**

缩写：

```html
<button v-on:click="handleMyClick()" id="box">{{i}}</button>
<!-- 缩写 -->
<button @click="handleMyClick()" id="box">{{i}}</button>
```

**方法的简写**

```javascript
methods:{
	handleMyClick:function(){
	}
}
//缩写    ES6对象简写
methods:{
    handleMyclick(){
    }
}
```



### v-for

类似遍历

```html
<div id="box">
    <ul>
		<li v-for="(item,i) in datalist">{{i}}---{{item}}</li>  <!-- item和i是个变量名可以随便取,()括号也可以没有，不过加好一点 -->
	</ul>
</div>
<script>
    new Vue({
        el:"#box",
        data:{
			datalist:["1","2","3"]
        }
    });
</script>
```

输出：

- 0---1
- 1---2
- 2---3

代码中的i是数组中的索引，如果datalist是对象的话i就是对面名

### v-model

获取和设置表单元素的值**（双向绑定）**

```html
<body>
    <div>
        <input type="text" v-model="inputText"/>
		<h3>{{inputText}}</h3>
    </div>
</body>
<script>
    new Vue({
        el:"div",
        data:{
			inputText:"Test"
        }
    });
</script>
```

输出输入框和一行字，输入框的内容变化，下面的字也一起变化。

# 留言板练习

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>留言板</title>
		<script src="vue.js"></script>
	</head>
	<style>
	.body{
		width: 300px;
		top: 40px;
		position: relative;
	}
	.text{
		width: 100%;
		position: relative;
		background-color: aquamarine;
		margin: 6px;
	}
	.del{
		right: 300px;
		position: relative;
	}
	</style>
	<body>
		<center><div id="test" class="body">
			<input type="text" v-model="inputText" @click="textNull()" style="background-color: hotpink;"/><button @click="created()" style="background-color: #66ccff;">留言</button>
			<div v-for="(item,index) in text" class="text" @click="del(index)">{{ item }}</div>
		</center>
	</body>
	<script>
		var vm = new Vue({
			el:"#test",
			data:{
				text:[],
				inputText:"想放什么屁快写出来"
			},
			methods:{
				created(){
					if( this.inputText ){
						this.text.push(this.inputText)
						this.inputText=null;
					}
				},
				textNull(){
					if ( this.inputText == "想放什么屁快写出来" ){
						this.inputText=null;
						one = null;
					}
				},
				del(index){
					this.text.splice(index,1);
				}
			}
		})
	</script>
</html>
```

# 点击变色练习

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="vue.js"></script>
	</head>
	<style>
		.div{
			width: 50px;
			height: 50px;
			/* vertical-align:middle;
			display: table-cell; */
			line-height:50px;
			background-color: #66ccff;
		}
		.clickDiv{
			width: 50px;
			height: 50px;
			line-height:50px;
			background-color: #39c5bb;
		}
	</style>
	<body>
		<div id="body" style="width: 100%; height: 100%;position: absolute;top: 0px;left: 0px;">
			<center>
				<div v-for="item,index in divText" :class="divClick == index?'clickDiv':'div'" @click="Click(index)">{{item}}</div>
			</center>
		</div>
	</body>
	<script>
		new Vue({
			el:'#body',
			data:{
				divText:[ "1", "2", "3", "4"],
				divClick:null
			},
			methods:{
				Click(index){
					this.divClick = index;
				}
			}
		})
	</script>
</html>
```



## 动态设置Class和Style

### 对象写法

**class **  同时写入多个样式

```html
	<body>
		<div :class="classObj">动态设置Class————对象写法</div>
	</body>
	<script>
		var vm = new Vue({
			el:"div",
			data:{
				classObj:{
					a:true,	//true是输出样式
					b:true,
					c:false	//false是没有这个样式
				}
			}
		})
		Vue.set(vm.classObj,"d",true);//后续加多加多一个b的样式
	</script>
```

a、b、c、d、是样式的名称而已，要显示还要在开始写好样式。

上面运行后的结果是:```<div class="a b d">动态设置Class————对象写法</div>```

**style** 

```html
	<body>
		<div :style="styleObj">动态设置style————对象写法</div>
	</body>
	<script>
		var vm = new Vue({
			el:"div",
			data:{
				styleObj:{
					backgroundColor: "#66ccff" //驼峰写法
				}
			}
		})
        Vue.set(vm.styleObj,"fontSize","26px");//后续加多字体大小样式
	</script>
```

输出：

<div style="background-color:#66ccff;font-size:26px">动态设置style————对象写法</div>



### 数组写法

**class**同时写多个样式

```html
	<body>
    	<div :class="classArr">动态设置Class————数组写法</div>
	</body>
	<script>
		var vm = new Vue({
			el:"#test",
			data:{
				classArr:["a", "b"]
			}
		})
		vm.classArr.push("c");	//后续添加多一个c的样式，比对象写法的方便
	</script>
```

上面运行后的结果是:```<div class="a b c">动态设置Class————数组写法</div>```

**style**同时写多个样式

```html
<body>
    <div :style="styleArr">动态设置style————数组写法</div>
</body>
	<script>
		var vm = new Vue({
			el:"div",
			data:{
				styleArr:[{backgroundColor: '#66ccff'}]//数组里放对象
			}
		})
		vm.styleArr.push({fontSize:"26px"});//后续加多字体大小样式
	</script>
```

输出：

<div style="background-color:#66ccff;font-size:26px">动态设置style————数组写法</div>





