# Swiper基础教学

[官网](https://www.swiper.com.cn/)

基本框架

```html
<link rel="stylesheet" type="text/css" href="swiper-bundle.min.css"/>
<script src="swiper-bundle.min.js"></script>
<body>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide">Slide 1</div>
	        <div class="swiper-slide">Slide 2</div>
	        <div class="swiper-slide">Slide 3</div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	    
	    <!-- 如果需要导航按钮 -->
	    <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div>
	    
	    <!-- 如果需要滚动条 -->
	    <div class="swiper-scrollbar"></div>
	</div>
</body>
<script>        
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
  </script>
```

**代码解释：**

- **``<div class="swiper-container">``** 轮播图的class可以加其他名字或者id来区分轮播图。不过自带的 swiper-container不要删除，虽然可以用不过缺少一些样式会有问题。
- 使用要 ``new Swiper(".swiper-container")`` ,如果轮播图框有其他样式或者id可以换成其他的class或者id名进去。不过注意**标签**里的class=‘swiper-container’不可以删除。

- 不要滚动条之类的可以把这些div去掉**``<div class="swiper-scrollbar">   ``** div只是个宽，class才是把它变成滚动条的样式，还要加上js的代码，看上面内容。
- html结构：

```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
    </div>
</div>
```

## Vue Cli安装使用

- 安装命令： ``cnpm install --save swiper`` 
- html写法还上面的一样
- 要使用的页面导入文件方式

```js
import Swiper from 'swiper/swiper-bundle.min' // 这里引入的是swiper.js的文件
import 'swiper/swiper-bundle.min.css' // 这些文件都在node_modules/swiper里。这里引入的是swiper.css文件
export default {
  mounted () {
    new Swiper ('.filmswiper', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        // autoplay:{delay:100},
        pagination: {
          el: '.swiper-pagination'
        }
    })
  }
}
```



## 配置项（常用）

- **initialSlide**初始化时slide的索引默认0
- **direction**:  默认垂直方向（horizontal），数值方向**vertical**
- **speed** 切换速度，即slider自动滑动开始到结束的时间（单位ms）。默认300
- **loop** 轮播图循环。默认false。设置true可以循环
- **autoplay** 终端切换，默认false。改为true的话默认自动切换时间为3秒
- autoplay切换修改值自动切换且自定义为1秒 ``autoplay:{delay:1000}``
- **[slidesPerView](https://www.swiper.com.cn/api/grid/24.html)** 设置slider容器能够同时显示的slides数量。默认1，可以设置小数
- **spaceBetween** 。slide之间的距离

```js
var mySwiper = new Swiper ('.swiper-container', {
  initialSlide:2,//从第三个开始轮播（从零开始算的）
  direction: 'vertical', // 改为垂直切换
  speed:200,//切换速度0.2秒
  loop: true, // 循环模式选项
  //开启自动轮播且时间为1秒。不自定义时间可以直接写autoplay:true
  autoplay:{delay:1000},
  slidesPerView: 2//同时显示两个内容
})
```

