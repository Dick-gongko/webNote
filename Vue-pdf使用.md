# Vue-pdf使用

## 安装

```txt
npm install --save vue-pdf
/* 或者 */
yarn add vue-pdf
```

## 基本使用

```vue
<template>
  <pdf src="./static/relativity.pdf"></pdf>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  }
}
</script>
```







## 实际使用

```vue
<template>
  <el-button  type="success" @click.stop="pdfPrint(123)">getPdf</el-button>
  <el-button  type="success" @click.stop="pdfPrint">新页面打开PDF</el-button>
  <!-- 新页面打开是用浏览器自带的功能打开的，所以反而不会有什么问题，且有打印功能 -->
  <pdf ref="pdf" :src="src" v-for="i in numPages" :key="i" :page="i"></pdf>
<!-- page是第几页 -->
</template>

<script>
import pdf from 'vue-pdf'
import { getPdf } from "@/api/mchi/exceptionresult";
export default {
  components: { pdf },
  data () {
    return {
      src: '',
      numPages: null
    }
  },
  methods: {
	viewDeafReport (id) {
      getPdf(id).then(res => { // 获得文件流
        const datas = 'data:application/pdf;base64,' + btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            "" // 这个好像是可以不要的
          )
        ) // 转换成base64格式
        
        // 如果获得的文件数据就是base64就直接下面操作就可以了(拼接个头部信息)
        // const datas = 'data:application/pdf;base64,' + res.data // base64的内容
        this.src = pdf.createLoadingTask({
          url: datas,
          cMapUrl: '../../../../static/cmaps/', // 引入解决中文乱码的文件
          cMapPacked: true,
        })
        this.src.promise.then(pdf => {
          this.numPages = pdf.numPages // 文件的总页码数
        }).catch(err => {
          console.error('pdf 加载失败', err);
        })
      })
    },
    pdfPrint (id) {
      getPdf(id).then(res => {
        const data = res.data
        let blob = new Blob([data], {
          type: "application/pdf" // type类型后端返回来的数据中会有，根据自己实际进行修改
        }); // 文件流转换成文件
        let link = document.createElement('a')
        link.target = "_blank" // 新页面打开
        link.href = window.URL.createObjectURL(blob)
        link.click()
      })
    },
  }
}
</script>
```



**js文件**

```js
import request from '@/router/axios';
export const getPdf = (id) => {
  return request({
    url: '/api/mchi/comprehensivequery/getPDF',
    method: 'get',
    responseType: 'arraybuffer', // 一定要设置响应类型，否则页面会是空白pdf
    params: {
      experimentNumber: id
    }
  })
}
```

