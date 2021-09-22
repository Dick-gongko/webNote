<center><h1>Vue网络应用</h1></center>

## axios

### get请求

**格式：**

```javascript
axios.get(地址).then(function(response){},function(err){})
```

第一个回调函数``function(response){}``在请求成功的时候触发，第二个``function(err){}``在请求失败的时候触发。

形参``response``是用来回传服务器响应的内容，``err``是错误的信息。



如果要传递信息，就在``地址``后面+？然后加查询的字符串。例：

```javascript
axios.get(地址?key=value&key2=value2).then(function(response){},function(err){})
```

### post请求

用法和get请求几乎一致。不同的事查询字符串传入的是对象``key=value&key2=value2``换为``{key:value,key2:value2}``

```javascript
axios.post(地址,{key:value,key2:value2}).then(function(response){},function(err){})
```

#### 例子

**get请求(获取随机笑话)**

```html
	<head>
        <!-- 官网提供的axios在线地址 -->
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	</head>
	<body>
		<input type="button" value="get请求" class="get"/>
	</body>
	<script>
        //随机笑话接口
		document.querySelector(".get").onclick = function(){
			axios.get("https://autumnfish.cn/api/joke/list?num=3")
			.then(function (response){
				console.log(response);
			},function(err){
				console.log(err);
			})
		}
	</script>
```

**post请求（访问用户是否创建）**

```html
	<head>
        <!-- 官网提供的axios在线地址 -->
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	</head>
	<body>
		<input type="button" value="post请求" class="post"/>
	</body>
	<script>
        //注册接口
		document.querySelector(".post").onclick = function(){
			axios.post("https://autumnfish.cn/api/user/reg",{username:"jack"})
			.then(function (response){
				console.log(response);
			},function(err){
				console.log(err);
			})
		}
	</script>
```



## axioxs加Vue

例子（获取笑话）：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>获取笑话</title>
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<script src="vue.js"></script>
	</head>
	<body>
		<div>
			<input type="button" @click="getJoke" value="获取一条笑话"/><br>
			<span> {{ joke }}</span>
		</div>
	</body>
	<script>
		var vm = new Vue({
			el:"div",
			data:{
				joke:"点击上面获取笑话"
			},
			methods:{
				getJoke(){
					var that = this;
					axios.get('https://autumnfish.cn/api/joke')
					.then(function (response){
						that.joke = response.data;
					},function(err){
						console.log(err);
					})
				}
			}
		})
	</script>
</html>
```

**ps: axios回调函数中的this已经改变，无法访问到data中的数据。**

**解决方法吧this保存起来（赋值给另外一个变量）。用回调函数中使用保存起来的this。类似案例中的``var that = this``然后访问joke就``that.joke``**

