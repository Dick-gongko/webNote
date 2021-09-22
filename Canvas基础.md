# Canvas基础

作者：H口先生

```vue
<template>
  <div>
    <canvas width="700px" height="400px" style="background-color: #ccff66;" ref='canvas'>
      浏览器不支持，请升级或换浏览器
    </canvas>
  </div>
</template>
<script>
export default {
  mounted () {
    // 获得dom节点
    var canvas = this.$refs.canvas
    // 获取画笔的2d对象
    var ctx = canvas.getContext('2d')
    // 设置颜色
    ctx.fillStyle = '#66ccff'
    var left = 0
    // 绘制矩形，（x,y,width,height)
    ctx.fillRect(0, 100, 100, 100)
    // 开始动画
    setInterval(() => {
      // 清除画布的范围，（x,y,endX,endY)。如果不清除绘制的图像会一直都在，可以一直画，继续ctx.fillRect()就可以了）
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      left++
      // 清除后重新绘制
      ctx.fillRect(left, 100, 100, 100)
    }, 33)
  }
}
</script>s
```

