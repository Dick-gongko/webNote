# Vue 手势事件Touch（库）

[地址：https://github.com/vuejs/vue-touch/tree/next](https://github.com/vuejs/vue-touch/tree/next)

安装命令： ``cnpm install vue-touch@next``

引入： 

```vue
// 引入Touch，这个不是ES6的方式，改成ES6也没问题
var VueTouch = require('vue-touch')
// 注册
Vue.use(VueTouch, {name: 'v-touch'})
```

用法：

```html
<v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
   <div style="height: 100px;background: #ccff66;">guid</div>
</v-touch>
```

解释： ``v-on:swipeleft`` 是左滑的话就执行事件onSwipeLeft事件。``swiperight`` 是右滑

## API

### Component Events

vue-touch supports all Hammer Events ot of the box, just bind a listener to the component with `v-on` and vue-touch will setup the Hammer Manager & Recognizer for you.

| Recognizer | Events                                                       | Example                     |
| ---------- | ------------------------------------------------------------ | --------------------------- |
| **Pan**    | `pan`, `panstart`, `panmove`, `panend`, `pancancel`, `panleft`, `panright`, `panup`, `pandown` | `v-on:panstart="callback"`  |
| **Pinch**  | `pinch`, `pinchstart`, `pinchmove`,`pinchend`, `pinchcancel`, `pinchin`, `pinchout` | `v-on:pinchout="callback"`  |
| **Press**  | `press`, `pressup`                                           | `v-on:pressup="callback"`   |
| **Rotate** | `rotate`, `rotatestart`, `rotatemove`, `rotateend`, `rotatecancel`, | `v-on:rotateend="callback"` |
| **Swipe**  | `swipe`, `swipeleft`, `swiperight`, `swipeup`, `swipedown`   | `v-on:swipeleft="callback"` |
| **Tap**    | `tap`                                                        | `v-on:tap="callback"`       |