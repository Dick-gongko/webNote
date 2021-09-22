# Vue 修改值后不重新渲染

在要重新渲染的代码块里写入：

```js
this.$forceUpdate();
this.$set(this.tableData[id],"red",true);//修改的值
```



例子js部分如下：

```javascript
<script>
 export default {
      data() {
        return {
         tableData:[{id:0,name:"lili",red:false,tip:false}]
        }
      },
      methods: {
	clickBtn(id){
		this.tableData[id].red=true;//这里是不改变的内容
		this.tableData[id].tip=true;		
	}
	}
}
</script>
```

**修改为：**

```js
<script>
 export default {
      data() {
        return {
         tableData:[{id:0,name:"lili",red:false,tip:false}]
        }
      },
 
      methods: {
	clickBtn(id){
		this.$forceUpdate();
		this.$set(this.tableData[id],"red",true);
		this.$set(this.tableData[id],"tip",true);	
 }}}
</script>
```

