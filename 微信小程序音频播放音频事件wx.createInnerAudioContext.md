# 微信小程序音频播放音频事件[wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html)



**获得接口实例：**

```js
const innerAudioContext = wx.createInnerAudioContext()
```

## InnerAudioContext

InnerAudioContext 实例，可通过 [wx.createInnerAudioContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html) 接口获取实例。

**获得实例后一般先给地址给这个API**

```js
innerAudioContext.src = 'http://m7.music.126.net/20200901000110/6900e0c2193d39aa63ac59dcea465164/ymusic/5552/0f53/5308/b841995f9d89d31f6697dbd6c093287a.mp3'
```

**PS:这个是没有组件的，就是个API**

**开始播放的方法**

```js
innerAudioContext.play()
```

## 属性

### string src

音频资源的地址，用于直接播放。[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 开始支持云文件ID

### number startTime

开始播放的位置（单位：s），默认为 0

### boolean autoplay

是否自动开始播放，默认为 `false`

### boolean loop

是否循环播放，默认为 `false`

### boolean obeyMuteSwitch

是否遵循系统静音开关，默认为 `true`。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 [wx.setInnerAudioOption](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html) 接口统一设置。

### number volume

> 基础库 1.9.90 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

音量。范围 0~1。默认为 1

### number playbackRate

> 基础库 2.11.0 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本）

### number duration

当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读）

### number currentTime

当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读）

### boolean paused

当前是是否暂停或停止状态（只读）

### number buffered

音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）

## 方法

### [InnerAudioContext.play()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.play.html)

播放

### [InnerAudioContext.pause()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.pause.html)

暂停。暂停后的音频再播放会从暂停处开始播放

### [InnerAudioContext.stop()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.stop.html)

停止。停止后的音频再播放会从头开始播放。

### [InnerAudioContext.seek(number position)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.seek.html)

跳转到指定位置

### [InnerAudioContext.destroy()](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.destroy.html)

销毁当前实例

### [InnerAudioContext.onCanplay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onCanplay.html)

监听音频进入可以播放状态的事件。但不保证后面可以流畅播放

### [InnerAudioContext.offCanplay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offCanplay.html)

取消监听音频进入可以播放状态的事件

### [InnerAudioContext.onPlay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onPlay.html)

监听音频播放事件

### [InnerAudioContext.offPlay(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offPlay.html)

取消监听音频播放事件

### [InnerAudioContext.onPause(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onPause.html)

监听音频暂停事件

### [InnerAudioContext.offPause(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offPause.html)

取消监听音频暂停事件

### [InnerAudioContext.onStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onStop.html)

监听音频停止事件

### [InnerAudioContext.offStop(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offStop.html)

取消监听音频停止事件

### [InnerAudioContext.onEnded(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onEnded.html)

监听音频自然播放至结束的事件

### [InnerAudioContext.offEnded(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offEnded.html)

取消监听音频自然播放至结束的事件

### [InnerAudioContext.onTimeUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onTimeUpdate.html)

监听音频播放进度更新事件

### [InnerAudioContext.offTimeUpdate(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offTimeUpdate.html)

取消监听音频播放进度更新事件

### [InnerAudioContext.onError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onError.html)

监听音频播放错误事件

### [InnerAudioContext.offError(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offError.html)

取消监听音频播放错误事件

### [InnerAudioContext.onWaiting(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onWaiting.html)

监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发

### [InnerAudioContext.offWaiting(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offWaiting.html)

取消监听音频加载中事件

### [InnerAudioContext.onSeeking(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onSeeking.html)

监听音频进行跳转操作的事件

### [InnerAudioContext.offSeeking(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offSeeking.html)

取消监听音频进行跳转操作的事件

### [InnerAudioContext.onSeeked(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onSeeked.html)

监听音频完成跳转操作的事件

### [InnerAudioContext.offSeeked(function callback)](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.offSeeked.html)

取消监听音频完成跳转操作的事件

## 支持格式

| 格式 | iOS  | Android |
| :--- | :--- | :------ |
| flac | x    | √       |
| m4a  | √    | √       |
| ogg  | x    | √       |
| ape  | x    | √       |
| amr  | x    | √       |
| wma  | x    | √       |
| wav  | √    | √       |
| mp3  | √    | √       |
| mp4  | x    | √       |
| aac  | √    | √       |
| aiff | √    | x       |
| caf  | √    | x       |

## 示例代码

```js
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'http://m7.music.126.net/20200901000110/6900e0c2193d39aa63ac59dcea465164/ymusic/5552/0f53/5308/b841995f9d89d31f6697dbd6c093287a.mp3'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
```

