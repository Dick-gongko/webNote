<h1><center>VUE笔记</center></h1>

### 开始

以下笔记都是为了个人而写

```html
<div id=”#box”>
	{{ myname }}
<!--指令-->
<div v-html=”myhtml”></div>//解析myhtml里面的内容，包括标签
<div v-show=”isShow”>动态显示和隐藏</div>//isShow为true为显示
<div v-if=”isCreated”>动态创建和删除</div>//isCreated为true为创建
</div>
<script type=”text/javascript”>
	var vm = new vue({
		el:”#box”,      //vue开始渲染的地方
		data:{
			myname:”H口”,      //如果是带标签的是当字符串直接显示
			myhtml:”<b>Test</b>”,
			isShow:true,
			isCreated:true,
		}//状态
	})
</script>
```

### 数据和方法

```html
<div id="app">
	{{a}}
</div>

<script type="text/javascript">
var data = { a : 1 };
var vm = new Vue({
	el   : "#app",
	data : data
});

vm.$watch('a', function(newVal, oldVal){
	console.log(newVal, oldVal);          //输出test…….1
}) 

vm.$data.a = "test...."

</script>
```

### v-once 指令

```html
<span v-once>这里的变量只能一次性的赋值{{ text }}</span>
```

### v-bind:属性=“值” 动态样式

```html
<div v-bind:class=”color”>test</div>  //color这个变量赋值是.red{color:red;}
<div v-bind:class=”{ active: isActive }”></div>
//active样式是否执行看isActive是true还是false，可以传入多少属性
<div v-bind:class=”[isActive? ‘active’ : ‘’, isGreed ? ‘green’ : ‘’]></div>
//可以传入数组也可以传入三运算符来实现动态分布
或
<div :style=”{color : color , fontsize : size }”></div>

```

### @click  绑定点击事件

```html
<div id=”test”>
<div @click=”click1”>
<div @click.stop=”click2”> //@click加.stop的是为了点击click me @click1不执行
click me!
</div>
</div>

new Vue({
	el : “#test”,
	methods : {        //在这里给点击事件赋值
		click1 : function(){
			console.log(‘ click1 ‘);
		}
		click2 : function(){
			console.log(‘ click1 ‘);
		}
	}
```

### v-else-if 用法

```html
<div v-if="type === 'A'">
	  A
	</div>
	<div v-else-if="type === 'B'">
	  B
	</div>
	<div v-else-if="type === 'C'">
	  C
	</div>
	<div v-else>
	  Not A/B/C
	</div>
```

type 值为B执行第二个div。没有代合适的执行最后一个div

### **v-for 用法**

```html
<div id="app">
	<ul>
		<li v-for="item,index in items" :key="index">
		{{index}}{{ item.message }} //index是输出数组索引，item.message输出Foo和Bar。
		</li>
	</ul>
	<ul>
		<li v-for="value, key in object">
			{{key}} : {{ value }}   //key输出名称，value输出内容
		</li>
	</ul>
</div>
<script type="text/javascript">
var vm = new Vue({
	el : "#app",
	data : {
		items : [
			{ message: 'Foo' },
			{ message: 'Bar' }
		],
		object: {
			title: 'How to do lists in Vue',
			author: 'Jane Doe',
			publishedAt: '2016-04-10'
		}
	}
});
</script>
```

### **v-on 用法**

```html
<div id="app">
	<div id="example-1">
		<button v-on:click="counter += 1"> 数值 :  {{ counter }} </button><br />
		<button v-on:dblclick="greet('abc', $event)">Greet</button>
		//$event是给函数传入的一个变量的名称
	</div>
</div>
<script type="text/javascript">
var vm = new Vue({
	el : "#app",
	data : {
		counter: 0,
		name : "vue"
	},
	methods:{
		greet : function (str, e) {
			alert(str);  //abc
			console.log(e);
		}
	}
});
</script>
```

### **v-message 双向绑定**

```html
v-message 双向绑定
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

### **组件基础**

定义一个名为button-counter的组件

```html
<div id="app">
	<button-counter title="title1 : " @clicknow="clicknow">
		<h2>hi...h2</h2>
	</button-counter>
	<button-counter title="title2 : "></button-counter>
</div>
<script type="text/javascript">
Vue.component('button-counter', {
	props: ['title'],
	data: function () {
		return {
		  count: 0
		}
	},
	template: '<div><h1>hi...</h1><button v-on:click="clickfun">{{title}} You clicked me {{ count }} times.</button><slot></slot></div>',
//<slot></slot>是插槽，这样就可以在组件中添加别的标签了
	methods:{
		clickfun : function () {
			this.count ++;
			this.$emit('clicknow', this.count);
		}
	}
})
var vm = new Vue({
	el : "#app",
	data : {
		
	},
	methods:{
		clicknow : function (e) {
			console.log(e);
		}
	}
});
</script>
```

