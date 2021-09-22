# Vue 详细笔记（全面）

## v-for

**v-for可以遍历数组也可以遍历对象**

```vue
<body>
	<div id="box">
		<ul>
			<li v-for="(data,index) in testArr">
				{{data}}
			</li>
		</ul>
	</div>
</body>
<script>
	var vm = new Vue({
		el:"#box",
		data:{
			testArr:[ 111, 222, 333]
		}
	})
</script>
```

可以用``in``也可以用``of``效果和用法是一样的

**v-for中的key**

- 跟踪每个节点的身份，从而重用和重新排序现有的元素（可以理解用来判断是否存在这个元素）
- 理想的``key``值是每一项都有的唯一的id。（一般正规的项目中返回的值都会有个``data.id``的值可以做``key``的

### v-for数组修改更新检测

(1)、使用以下方法操作数组，可以检测变动

​		``push()`` ``pop()`` ``shift()`` ``unshift()`` ``splice()`` ``sort()`` ``reverse()`` 

(2)、``filter()`` ``concat()`` 和 ``slice()`` ``map()`` ，新数组替换旧数组

**检测不到以下变动**

```js
vm.items[indexOfltem] = newValue
Vue.set(vm.testArr, 0, "test")//例子
//Vue.set(要修改的数组, 数组的索引（对象的话是key）, 新的内容（对象的话是value)
```

**解决：**

（1）

```js
Vue.set(example1.items, indexOfltem, newValue)
//
```

（2）``splice``

```js
vm.testArr.splice( 0, 1, "test")
//vm.testArr.splice( 元素索引, 多少个, 新内容)
```

**运用**

要求：输入框输入关键字，列表内容变成含有关键字的字符串。

```html

```

知识补充：

```js
arr = [1, 2, 3, 4, 5];
var newArr = arr.filter(item => item>2)//3.4.5
//过滤数组：返回结果是 true 的项的item值，将组成新的数组，返回结果为新的数组.

//索引值 = 数组.indexOf(想要查询的元素);
//可以检索一个数组中是否含有指定的元素。如果数组中含有该元素，则会返回其第一次出现的索引；如果没有找到指定的内容，则返回 -1。
```

## @事件处理小技巧

```html
<div id="box">
	<button @click="handleClick">click1</button>
	<button @click="handleClick()">click2</button>
	<button @click="isShow=!isShow">click3</button>
	<div v-show="isShow">1111111</div>
</div>
```

**ps:**要传参的话就加 ``()`` 不传参的话可以不加， **简单的处理语句可以直接写进去就可以了**

```js
new Vue({
	el:"#box",
	data:{
		isShow:false
	},
	methods:{
		handleClick(){
			this.isShow = !this.isShow
		}
	}
})
```

### 事件修饰符

- ``.stop`` 阻止事件冒泡
- ``.self`` 点自己元素才会触发，点击子节点是不会执行这个事件
- ``.once`` 一次有效点击第二次点击后无效
- ``.prevent`` 阻止默认行为

**用法**

```html
<div id="box">
	<!-- .self修饰符指的的只有点自己元素才会触发，点击子节点是不会执行这个事件 -->
	<ul @click.self="testUlClick()">
		<!-- .stop修饰符点击这个事件阻止事件冒泡($event是不需要的，这里是为了介绍原生的方法才加上去的) -->
		<li @click.stop="testLiClick($event)">test1</li> 
		<li @click="testLiClick()">test2</li>
		<!-- .once修饰符只点击一次有效点击第二次后无效 -->
		<li @click.once="testLiClick()">test3</li>
	</ul>
	<!-- .prevent修饰符阻止标签的默认行为 -->
	<a href="https://www.baidu.com" @click.prevent="handleChangePage()">ChangePage</a>
</div>
<script>
	new Vue({
		el:"#box",
		methods:{
			handleClick(){
				this.isShow = !this.isShow
			},
			testUlClick(){
				console.log("Ul")
			},
			testLiClick(ev){
				//原生阻止事件冒泡的方法
				//ev.stopPropagation();
				console.log("Li")
			},
			handleChangePage(){
				//原生阻止默认行为的方法
				// ev.preventDefault();
				console.log("handleChangePage")
			}
			
		}
	})
</script>
```

### 按键修饰符

```txt
.enter => // enter键.最常用
.tab => // tab键
.delete (捕获“删除”和“退格”按键) => // 删除键
.esc => // 取消键
.space => // 空格键
.up => // 上
.down => // 下
.left => // 左
.right => // 右
```

**自定义**（键盘中所有的按键都可以的，只不过要用ascii码）

例如回车键ascii码值为13，写法：``@keydown.13="keyDownEnter"``

**用法：**

```html
<input type="text" @keydown.enter="keyDownEnter"/>
```

### 表单修饰符

- ``.lazy`` 失去焦点后再更新数据(原本是实时更新的)
- ``.number`` 只获取输入值的数字（只获取前面的数组，如果一开始输入的不是数字的话全部值都获取。所以没有什么用）
- ``.trim`` 去掉开头和结尾的空格,中间的空格是保留的

```html
<!-- 失去焦点后再更新数据 -->
<input type="text" v-model.lazy="mytext" />
{{mytext}}

<!-- 只获取输入值的数字（只获取前面的数组，如果一开始输入的不是数字的话全部值都获取。所以没有什么用） -->
<!-- 如果要只获取输入的话直接<input type="number"/>就好了 -->
<input type="text" v-model.number="mynumber" />
{{mynumber}}

<!-- 去掉开头和结尾的空格,中间的空格是保留的 -->
<input type="text" v-model.trim="mysername" />
|{{mysername}}|
```





## 表达控件绑定

**获取``input``输入框的值：**

``<input type="text" v-model="text"/>``

解释：输入框的值输入了直接赋值到text字符串里。

**获得 ``checkbox`` 是否被选中**

``<input type="checkbox" v-model="isChecked"/>``

解释：变量 ``isChecked`` 为 ``false`` 未选中，为 ``true`` 就选中。双向绑定（变量改变选中状态也变，反之亦然）

**用法：**

```html
<!-- 可以多选 -->
<p>你喜歡的老婆？
	<input type="checkbox" v-model="checkgroup" value="春日野穹"/>春日野穹
	<input type="checkbox" v-model="checkgroup" value="埃罗芒阿老师"/>埃罗芒阿老师
	<input type="checkbox" v-model="checkgroup" value="藤和艾利欧"/>藤和艾利欧
</p>
{{checkgroup}}
<!-- 只可以单选 -->
<p>你最喜歡的老婆？
	<input type="radio" v-model="picked" value="春日野穹"/>春日野穹
	<input type="radio" v-model="picked" value="埃罗芒阿老师"/>埃罗芒阿老师
	<input type="radio" v-model="picked" value="藤和艾利欧"/>藤和艾利欧
</p>
{{picked}}
```

```js
new Vue({
		el:"#box",
		data:{
			checkgroup:[],
			picked:""
		},
	})
```

**@change表单值改变后触发事件**

```html
<!-- @change v-model变量改变后自动执行事件handleSelectAll -->
<input type="checkbox" @change="handleSelectAll" v-model="isSelectAll" />全选
```

## 计算属性

计算属性用法和变量一样，写法和方法一样。

效果也和方法差不多，不过效率更高。

用法（开头字母大写）：

```html
<div id="box">
    <!-- 使用计算属性时不可以加（）不然就调用的是方法了，return什么输出什么 -->
    <!-- 数据变化计算属性也会自动跟着变化 -->
    计算属性{{capital}}
</div>

<script>
	new Vue({
		el:"#box",
		data:{
			text:"tinyfoal",
		},
        //计算属性要写在computed里
		computed:{
			capital(){
				return this.text.substring(0,1).toUpperCase() + this.text.substring(1)
			}
		}
	})
</script>
```

## 自定义组件

**Vue.component("name", {template:""})**

### 组件注册方式

全局组件

``Vue.component``

局部组件**（看案例）**

### 组件编写方式与Vue实例的区别

- 自定义组件需要有个root element
- 父子组件的data是无法共享
- 组件可以有data，methods，computed.....，但是data必须是一个函数（用法看案例）

**用法：**

```html
<div id="box">
	<navbar></navbar>
</div>

<script>
	//全局定义组件（作用域隔离）
	//navbar是组件的名字，用和自定义组件一样
	Vue.component("navbar", {
		//写组件内容标签的地方，可以用“”不过用这个用回车会报错，所以用``比较好
		template:`
			<div style="background:#ccff66">
				<button @click="handleClick()">返回</button>
				navbar--{{text}}
				<button>主页</button>
				<navbarchild></navbarchild>
			</div>
		`,
		//组件中的方法不能访问外面的方法，只能访问组件自己的方法
		methods:{
			handleClick(){
				console.log("点击返回按键")
			}
		},
        //data必须是一个函数
		data(){
			return {
				text:"data函数里的变量"
			}
		},
        //局部组件，只可以给父组件（navbar）访问
        components:{
			navbarchild:{
				template:`
				<div>只能在navbar中使用的组件</div>
				`
			}
		}
	})
     new Vue({
			el:"#box",
		})
</script>
```

### 组件通信

**父传子**

```html
<div id="box">
	<navbar myname="home" :myshow="false"></navbar>
	<navbar myname="list" :myshow="true"></navbar>
</div>

<script>
	Vue.component("navbar", {
		template:`
			<div style="background:#ccff66">
				<button>返回</button>
				navbar--{{myname}}
				<button v-show="myshow">主页</button>
				<navbarchild></navbarchild>
			</div>
		`,
        //接收父组件传来的属性
		props:["myname","myshow"]
	})
     new Vue({
			el:"#box",
		})
</script>
```

**属性验证**

```js
Vue.component("navbar", {
	template:`
		<div style="background:#ccff66">
			<button>返回</button>
			navbar--{{myname}}
			<button v-show="myshow">主页</button>
			<navbarchild></navbarchild>
		</div>
	`,
    //验证接收父组件传来的属性（用对象的方式写）
    //接收到的类型不对，控制台会报错
	props:{
		myname:String,
		myshow:Boolean
	},
})
 new Vue({
		el:"#box",
})
```

**子传父**

**``$emit``** 传递

```html
<div id="box">
	<!-- myevent是自定义的，前面加@就可以了。$event是为了接收参数。什么名字都可以加$就可以了 -->
    <!-- 传递数据可以不加（$event）括号也不用打，vue会直接传递数据过去 -->
	<child @myevent="handleEvent($event)"></child>
</div>
<script>
	Vue.component("child", {
		template:`
		<div>
			child组件
			<button @click="childTransmit()">传递数据</button>
		</div>
		`,
		data(){
			return {
				test: "我是字符串"
			}
		},
		methods:{
			childTransmit(){
                //传递数据
				this.$emit("myevent", this.test)
			}
		}
	})
	new Vue({
		el:"#box",
		data:{
			
		},
		methods:{
			handleEvent(ev){
            	//接收数据且执行动作
				console.log("接收到子节点传递的数据。" + ev)
			}
		}
	})
</script>
```

**ref通信**

- ref放在标签上 ，拿到的是原生节点
- ref放在组件上，拿到的是组件对象

**用法：**

```html
<div id="box">
	<button @click="getChild">
		获取组件数据
	</button>
	<button @click="revise">修改数据</button>
	<!-- myevent是自定义的，前面加@就可以了。$event是为了接收参数。什么名字都可以加$就可以了 -->
	<child ref="childValue"></child>
</div>
<script>
//组件省略，和上面相同
    
new Vue({
	el:"#box",
	methods:{
        //获取值，假设组件data（）里有变量test，这样就获取了test
		getChild(){
			console.log(this.$refs.childValue.test)
		},
        //执行组件的方法和给方法传值。set（）是假设组件自定义的一个方法
		revise(){
			this.$refs.childValue.set("传递的值")
		}
	}
})
</script>
```

**事件总线**

解决两个组件中的通信问题

用到两个知识

- 使用 ``$on(eventName)`` 监听事件
- 使用 ``$emit(eventName)`` 触发事件
- 使用 ``mounted()`` 生命周期函数，当前组件动漫创建完成后就会调用

**介绍：**

事件总线是个空实例。

$emit()触发和传递内容，$on监听和执行变化后的事件。

**用法：**

```html
<body>
	<div id="box">
		<publish></publish>
		<user></user>
	</div>
</body>
<script>
	//空的vue实例就是中央事件总线
	var bus = new Vue();
	Vue.component("publish", {
		//组件里的ref="mytext"是用来接收input输入的内容
		template:`
		<div>
			<input type="text" ref="mytext" />
			<button @click="handleClick">传递</button>
		</div>
		`,
		methods:{
			handleClick(){
				//用$emit触发，publishText名字要和下面组件监听的一样
				//后面是传递过去的内容（input输入的内容）
				bus.$emit("publishText", this.$refs.mytext.value)
			}
		}
	})
	Vue.component("user", {
		template:`
		<div style="background:#ccff66">
		接收的数据：{{text}}
		</div>
		`,
		data(){return{text:""}},
		//生命周期函数，当前组件动漫创建完成后就会调用
		mounted(){
			//监听publishText，变化后执行后面的函数
			bus.$on("publishText", (e) =>{
				this.text = e
			})
		}
	})
	new Vue({
		el:"#box"
	})
</script>
```



## 动态组件

- ``<component>`` 元素，动态地绑定多个组件到它的is属性
- ``<keep-alive>`` 保留状态，避免重新渲染

介绍： ``<component>`` 显示隐藏后再之前的数据会不见，用 ``<keep-alive>`` 就可以保留之前的数据

 **用法：**

```html
<div id="box">
	<keep-alive><!-- 保留原来的数据不重新渲染 -->
        <!-- is里的字符串是什么组件的名字就显示什么 -->
		<component :is="isName"></component>
	</keep-alive>
	<div><!-- 修改isName变量 -->
		<button @click="isName='home'">home</button>
		<button @click="isName='list'">list</button>
		<button @click="isName='shopcar'">shopcar</button>
	</div>
</div>
<script>
	new Vue({
		el:"#box",
		data:{isName:"home"},
        //局部组件
		components:{
			"home":{template:`<div>home<input type="text" /> </div>`},
			"list":{template:`<div>list</div>`},
			"shopcar":{template:"<div>shopcar</div>"}
		}
	})
</script>
```

## slot插槽

写组件的时候在组件内留下 ``<slot>`` 插槽，使用组件的时候在调用组件的时候在组件中加入对应的标签和内容就可以了。

**用法：**

```html
<list><button>插入的按钮</button></list>
<script>
	new Vue({
		el:"#box",
		components:{
			"list":{template:`<div>list<slot></slot>list</div>`}
		}
	})
</script>
```

### 具名插槽

如果要插入多个元素，还要指定位置。就要使用到具名插槽。用法和插槽一样，只加入对应判断位置的值。

**用法：**

```html
<list>
    <!-- 给插入的元素加对应的名字 -->
    <button slot="a">插入的按钮a</button>
    <button slot="b">插入的按钮b</button>
</list>
<script>
	new Vue({
		el:"#box",
		components:{
            //给slot加名字
			"list":{template:`
				<div>list
					<slot name="a"></slot>
					list
					<slot name="b"></slot>
    			</div>`}
		}
	})
</script>
```



## 元素过度（动画）

**（1）单个元素过度**

使用动画过度的元素写在``<transition>`` 标签里。

动画前面自定义，后面有规定的。例子

- name-enter-active  name-leave-active动画用于进入/退出过度的时间设置
- name-enter   name-leave 设置动画添加的样式。把样式加入开始，然后改变为原本的样式
- name-enter-to   name-leave-to 把原本的样式改为现在的样式。

具体看代码吧，难以解释：

```html
<style>
	/* in是随便取的名字 ,这里设置的是动画的时间。enter是显示执行的动画，leave是结束后执行的动画*/
	/* 这里可以理解为最开始加入的样式 */
	.inOut-enter-active, .inOut-leave-active {
		transition: all 1s;
	}
	/* in-enter指的是动画以开始进入加入的样式，in-leave相反，加-to是原来样式修改为现在的样式*/
	.inOut-enter, .inOut-leave-to{
		/* 变透明,移动位置 */
		opacity: 0;
		transform: translateX(100px);
	}
	/* 关键帧动画 */
	.outIn-enter-active{
		animation: mv .5s;
	}
	.outIn-leave-active{
		animation: mv .5s reverse;
	}
	@keyframes mv{
		from{
			opacity: 0;
			transform: translateX(100px);
		}
		to{
			opacity: 1;
			transform: translateX(0px);
		}
	}
</style>

<div id="box">
	<button @click="isShow=!isShow">进入/退出</button>
    <!-- 调用普通过度动画name改为inOut就可以了 -->
	<transition name="outIn">
		<div v-show="isShow">显示-隐藏</div>
	</transition>
</div>

<script>
	new Vue({
		el:"#box",
		data:{
			isShow: false
		}
	})
</script>
```



**（2）多个元素过度**

- 当有相同名的元素切换时，需要通过key特性设置唯一的值来标记以Vue区别它们，否则Vue为了效率只会替换相同标签内部的内容
- 用mode：in-out或mode：iout-in。设置动画进出顺序，in-out是进来的动画执行完了，出去的动画再执行，out-in相反。

```html
<!-- 动画是刚才的动画 加key是为了让vue知道两个节点不一样 -->
<!--加key是为了让vue知道两个节点不一样 -->
<div id="box">
	<button @click="isShow=!isShow">进入/退出</button>
    
    <!--mode=“in-out”是先执行进入动画再执行离开动画，不加的话进入离开动画同时进行 -->
	<transition name="outIn" mode="in-out">
        
        <!--加key是为了让vue知道两个节点不一样，不然vue认为两个节点一样就不重新创建就只改变内容而已 -->
		<div v-if="isShow" key="1" >显示-隐藏</div>
		<div v-else key="2">显示-隐藏</div>
	</transition>
</div>
```

**（3）列表过度（设置key）**

- ``<transition-group>`` 不同于transition，它会以一个真实元素呈现：默认为一个 ``<span> `` 。你可以通过tag特性跟换为其他元素
- 提供唯一的key属性值

```html
<!-- 动画是之前的那个退出动画,<transition-group>默认为一个<span>,所以tag改成ul -->
<transition-group name="outIn" tag="ul">
	<!-- 加：是因为item是变量。不可以用index会有问题 -->
	<!-- arr:[1,2,3,4,5] -->
	<li v-for="(item,index) in arr" :key="item">
		{{item}}
		<button @click="arr.splice( index, 1)">删除</button>
	</li>
</transition-group>
```



## 生命周期

1、beforeCreate

　　在实例初始化之后，数据观测和event/watcher时间配置之前被调用。 
2、created

　　实例已经创建完成之后被调用。在这一步，实例已经完成以下的配置：数据观测，属性和方法的运算，watch/event事件回调。然而，挂载阶段还没开始，$el属性目前不可见。 
3、beforeMount

　　在挂载开始之前被调用：相关的render函数首次被调用。 
　　该钩子在服务器端渲染期间不被调用。 
4、mounted

el被新创建的 vm.$el替换，并挂在到实例上去之后调用该钩子函数。如果root实例挂载了一个文档内元素，当mounted被调用时vm.$el也在文档内。该钩子在服务端渲染期间不被调用。 
5、beforeUpdate

　　数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前。 
　　你可以在这个钩子中进一步第更改状态，这不会触发附加的重渲染过程。 
　　该钩子在服务端渲染期间不被调用。 
6、updated

　　由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。 
　　当这个钩子被调用时，组件DOM已经更新，所以你现在可以执行依赖于DOM的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。 
　　该钩子在服务端渲染期间不被调用。 

7、beforeDestroy 【类似于React生命周期的componentWillUnmount】

　　实例销毁之间调用。在这一步，实例仍然完全可用。 
　　该钩子在服务端渲染期间不被调用。 
8、destroyed

　　Vue实例销毁后调用。调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。



activated

　　keep-alive组件激活时调用。 
　　该钩子在服务器端渲染期间不被调用。 
deactivated

　　keep-alive组件停用时调用。 
　　该钩子在服务端渲染期间不被调用。 

## 过滤器

- ``Vue.filter()`` 

**用法：**

```html
<img :src="src | filterJpg" />
<script>
    //src变量值为"http://blog.gongko.top/img/cp_1.png"
		Vue.filter("filterJpg", function(data){
            //把png改为jpg
			return data.replace('png','jpg')
		})
</script>
```



## Swiper轮播图使用注意事项和分装组件



- **要写完全部的swiper的DOM节点才可以初始化Swiper（  ``new Swiper()`` ） 不然效果会失效。所以不可以后续加了轮播图图片不重新初始化 （new Swiper（））**



```html
<div id="box">
    <!-- 给组件加key的原因是为了获取到数据后重新创建自定义组件节点（这样才可以重新执行组件里的mounted事件）获得数据后arr就变化了，长度就跟着变了 -->
	<swiper :key="arr.length">
		<div class="swiper-slide" v-for=" data in arr">
			{{data}}
		</div>
	</swiper>
</div>
<script>
	Vue.component("swiper",{
		template:`
		<div class="swiper-container">
		    <div class="swiper-wrapper">
				<slot></slot>
		    </div>
			<div class="swiper-pagination"></div>
		</div>
		`,
        //dom渲染完后执行，只执行一次，除非重新创建
		mounted(){
			new Swiper(".swiper-container",{
				loop: true, // 循环模式选项
				pagination: {
					el: '.swiper-pagination',
				},
			})
		}
	});
    //模拟异步获取数据
	new Vue({
		el:"#box",
		data:{
			arr:[]
		},
		mounted(){
			setTimeout(() => {
				this.arr = [111, 222, 333]
			}, 500)
		}
	})
</script>
```



## 自定义组件

**Vue.directive("name",{})**

自定义组件使用的时候 传的值只可以传一个，要传多个值的可以可以传个对象

**用法：**

```html
<!-- 加单引号的原因是这样才是输入字符串，不然red当变量处理 -->
<!-- 传的值只可以传一个，要传多个值的可以可以传个对象 -->
<div v-test="'red'">红色</div>
<div v-test="'#ccff66'">ccff66</div>
<div v-test="color">66ccff</div>
<script>
//test是指令名，指令用的时候加v-。例如：v-test
Vue.directive("test",{
	//inserted执行速度比update快
	// 指令插入到父节点的时候执行（可以理解为创建完就执行）
	inserted(el,bind){
		//第一个参数el获得的是DOM节点，第二个bind参数是获取输入的内容
		el.style.background=bind.value
	},
	//数据改变的时候再次执行，如果样式后期要改变的话就用这个也可以两个一起用
	update(el,bind){
		el.style.background=bind.value
	}
})
new Vue({
	el:"#box",
	data:{
		color:"#66ccff"
	}
})
</script>
```



### 指令初始化轮播组件

可以简单的解决轮播组件初始化过早的问题

**例子：**

```html
<div class="swiper-container a">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for=" (data,index) in arr"
		v-swipe="{
			'index':index,
			'length': arr.length
		}">
        	{{data}}
        </div>
    </div>
	<div class="swiper-pagination"></div>
</div>
<script>
Vue.directive("swipe",{
	inserted(el, bind){
		if(bind.value.index === bind.value.length-1){
			new Swiper('.a',{
				loop: true,
				pagination:{
					el:'.swiper-pagination'
				}
			})
		}
	}
})
//.....
</script>
```

## Vue CLI  安装与使用

- **安装：** cmd命令中输入 ``npm install -g @vue/cli`` 就可以了

**脚手架创建项目：**

- 安装后关闭窗口。创建个文件夹然后按住 ``shift`` + 右键点击空白处。然后点击用 ``PowerShell`` 打开
- 命令 ``vue create myapp`` 创建一个工程名为myapp，然后回车。（可以理解为创建一个文件夹，等等东西放里面）
- 选择 ``Manually select features`` 手动选择特性，回车。其他的是选好特性的了。
- 在默认选定的选项上加 ``Router`` ``Vuex`` ``Css Pre-processors``  ``Lomter / Formatter`` 。键盘上下，空格选定。回车（执行）
- 然后选择2.0（我随便选的）。回车
- 然后输入Y。回车
- 选择Sass/SCSS。回车
- 选择 ``ESLint + Standard config`` 。（eslint是用来规范代码的，可以不勾选，太麻烦了）回车
- 全选 ``Lint on save`` ``Lint and fix on commit`` 。回车
- 选择 ``in dadicated config files`` 。回车
- Y。回车就开始下载了

**如果是下载GitHub网站内容出错的话参考下面内容**

- **下载过程中**可能出现问题，一般都是下载github网站内容的东西出现问题的。这时候按 ``ctrl`` + ``C`` 停止下载，不用瞎等了。停止了之后就去删除文件夹里的 ``node modules``文件夹。然后执行命令
- 然后进入到你工程文件，我的话是进入到 ``myapp`` 文件夹。 命令 ``cd. \myapp\`` 。
- 然后执行命令``cnpm i`` 就可以了

### 脚手架使用介绍

- 用编辑器打开创建的工程文件。在编辑器中使用命令行窗口（终端）打开，在这里我在编辑器里点击myapp文件夹右键选择 ``命令行窗口（终端）打开``。然后在下面执行命令 ``npm run serve`` 就可以了
- ``http://localhost:8080/`` 这里就可以看到我们创建的工程文件了。工程文件就在文件夹 ``publlic`` 里的 ``index.html `` 

**main.js介绍：**

-  ``src`` 文件夹里的 ``main.js`` 可以理解为引入其他文件的文件。 
- js里的代码 ``$mount('#app')`` 指的是vue挂载点（index.html里的div  id=“app”的标签“）。
- ``import Vue from 'vue'`` 是ES6模块导入方式相对于 ：`` var Vue = require("vue")``
-  ``import App from './App.vue'`` 相对于 ``var Vue = require("./App.vue")`` 

**vue文件介绍：**

- **重点来了** ``App.vue`` 文件就是我们的组件文件。写法和我们之前的不太一样。
- ``<template>`` 里写的是组件的html内容。
- ``<script>`` 里写的是组件js文件
- ``<style>`` 里写的是组件的css文件。 如果写的是 ``scss`` 文件的话就这样写 ``<style leng="scss">`` 
- js里的组件方法和变量写在 ``export default{}`` 里。这个就相当于之前组件的 ``Vue component()`` 只是里面不用写组件名了。



**例子**

```vue
/* app.vue里的内容 */
<template>
  <div>
    点击加1
    <button @click="add">
    add
    </button>
    {{num}}
  </div>
</template>
<script>
// 相当于 commonJS module.exports
// ES6 的导出
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    add () {
      this.num++
    }
  }
}
</script>
<style>
</style>
```



![img](https://upload-images.jianshu.io/upload_images/3868852-a70486dfb5c22189.png?imageMogr2/auto-orient/strip|imageView2/2/w/538/format/webp)

 

## Vue 脚手架关闭eslint功能（检测代码错误）

网上的方法是更改build/webpack.config.js
但是在新版的vue-cli中已经隐藏了这个文件

在根目录新建一个vue.config.js

```js
module.exports = {
    lintOnSave: false
}
```

