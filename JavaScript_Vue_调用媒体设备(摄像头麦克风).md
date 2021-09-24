# JavaScript_Vue_调用媒体设备(摄像头/麦克风)

作者：H口先生

官方文档链接：

https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/mediaDevices

https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API

## 简单调用摄像头/关闭

**HTML文件**

```html
<video ref="video" src="" />
<button @click="camera()">启动摄像头</button>
<button @click="stopCamera()">关闭摄像头</button>
<button @click="getCamerainfo()">测试信息</button>
```

**JavaScript**

```javascript
export default {
  data () {
    return {
      // 创建一个用来暂停的对象
      stopVideo: Object
    }
  },
  methods: {
    camera () {
      console.log('启动摄像头')
      console.log(this.$refs.video)
      const video = this.$refs.video
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(res => {
        // 暂停视频
        this.stopVideo = res.getTracks()[0]
        // 返回的res是视频流，要在Video展示要用到srcObject属性，类似把视频流转换成src。之前老版本没有这个功能要转，现在可以直接用视频流。
        video.srcObject = res
        video.play()
      })
    },
    stopCamera () {
      this.stopVideo.stop()
    },
    getCamerainfo () {
      navigator.mediaDevices.enumerateDevices().then(res => {
        console.log(res)
      })
    }
  }
}
```

### 详细介绍

官方文档链接：https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia

#### navigator.mediaDevices.getUserMedia(object)输入参数介绍

获得媒体的内容，object里放的是一个对象。参数有：

```javascript
// 简单调用
var object = {
  audio: true,
  video: true
}

// 设置指定宽度
var object = {
  audio: true,
  video: { width: 1280, height: 720 }
}

// 设置最小宽度
var object = {
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 776, ideal: 720, max: 1080 }
  }
}

// 优先使用前摄像头（电脑的前摄像头也是'user'）
var object = { audio: true, video: { facingMode: "user" } }

// 强制使用后置摄像头
var object = { audio: true, video: { facingMode: { exact: "environment" } } }

// 使用指定摄像头，deviceId 写错 或 者不存在 会调用默认的设备且不报错。deviceId获取后面会说。
var object = {video: {deviceId: '25472c1106333456a8ee91048a5a0b77d16b665ade2a01d4f21995dbf4fababe'}}
```

#### navigator.mediaDevices.getUserMedia(object)返回值接收、使用

navigator.mediaDevices.getUserMedia(object)要用then来接收返回的数据，返回的是一个文件流。

```javascript
// 获取video标签
const video = this.$refs.video
navigator.mediaDevices.getUserMedia({video: true}}).then(res => {
  // 返回的res是视频流，要在Video展示要用到srcObject属性，类似把视频流转换成src。之前老版本没有这个功能要转，现在srcObject可以直接用视频流。
  video.srcObject = res
  video.play()
})
```

#### 停止获取视频

```javascript
navigator.mediaDevices.getUserMedia({video: true}).then(res => {
  // 暂停视频,res.getTracks()[0]里有哥stop()方法停止获取。要停止的时候用变量的this.stopVideo.stop()就可以了。
  this.stopVideo = res.getTracks()[0]
  })
// ...
// 要停止的时候：
this.stopVideo.stop()
```

#### 获取全部媒体设备信息navigator.mediaDevices.enumerateDevices()

**可获得**

- 输入音频(麦克风)
- 输出音频(扬声器)
- 输入视频(摄像头、采集卡)

**使用方式：**

```javascript
navigator.mediaDevices.enumerateDevices().then(res => {console.log(res)})
// 返回的res是个数组
```

**参数介绍**

- deviceId：输入的视频设备才有的id
- groupId：暂不清楚
- kind：设备类型（audioinput输入音频、audiooutput输出音频、videoinput输入视频）
- label：设备名称

#### 获得单个设备详细信息getCapabilities()

```javascript
navigator.mediaDevices.enumerateDevices().then(res => {
  // 指定设备的详细信息
  console.log(res[1].getCapabilities())
})
```

信息中含视频最大输出尺寸。

