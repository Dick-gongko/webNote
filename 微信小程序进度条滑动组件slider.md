# 微信小程序进度条滑动组件[slider](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html)

滑动选择器。

| 属性            | 类型        | 默认值  | 必填 | 说明                                             | 最低版本                                                     |
| :-------------- | :---------- | :------ | :--- | :----------------------------------------------- | :----------------------------------------------------------- |
| min             | number      | 0       | 否   | 最小值                                           | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| max             | number      | 100     | 否   | 最大值                                           | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| step            | number      | 1       | 否   | 步长，取值必须大于 0，并且可被(max - min)整除    | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| disabled        | boolean     | false   | 否   | 是否禁用                                         | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| value           | number      | 0       | 否   | 当前取值                                         | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| color           | color       | #e9e9e9 | 否   | 背景条的颜色（请使用 backgroundColor）           | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| selected-color  | color       | #1aad19 | 否   | 已选择的颜色（请使用 activeColor）               | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| activeColor     | color       | #1aad19 | 否   | 已选择的颜色                                     | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| backgroundColor | color       | #e9e9e9 | 否   | 背景条的颜色                                     | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| block-size      | number      | 28      | 否   | 滑块的大小，取值范围为 12 - 28                   | [1.9.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| block-color     | color       | #ffffff | 否   | 滑块的颜色                                       | [1.9.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| show-value      | boolean     | false   | 否   | 是否显示当前 value                               | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| bindchange      | eventhandle |         | 否   | 完成一次拖动后触发的事件，event.detail = {value} | [1.0.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| bindchanging    | eventhandle |         | 否   | 拖动过程中触发的事件，event.detail = {value}     | [1.7.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |



```wxml
<view class="progress-bar">
	<slider
	 bindchange="sliderchange"	//滑块动了后触发的事件
	 left-icon="cancel"
	 right-icon="success_no_circle"
	 block-size="10rpx"	//组件大小（高度）
	 value="{{sliderValue}}"//value值
	 backgroundColor="#000000aa"	//进度条未滑到的颜色
	/>
</view>
```



```js
Page({
    data:{
        
    },
    //获得组件中的value值，也就是滑块的位置，位置变化就触发这个事件
    sliderchange(e){
    this.setData({
      sliderValue:e.detail.value
    })
  }
})


```

