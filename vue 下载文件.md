# vue 下载文件



## 实际运用

```vue
<template>
  <el-button type="primary" size="mini" :loading="exportExcelLoading" icon="el-icon-edit" @click.stop="download">下载Word</el-button>
</template>
<script>
import { downloadWord } from "@/api/mchi/reportprint";

export default {
   methods: {
     download () {
       downloadWord(123).then(res => {
         const content = res.data // 文件流
         var aLink = document.createElement("a");
         var blob = new Blob([content], { // 文件流转Blob类型
           type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" //放入到Blob里的文件类型(mime)
         });
         let objectUrl = URL.createObjectURL(blob); // 把blob转换成我们可以访问的url.window.URL.createObjectURL()完整写法。也叫Blob Url
         aLink.download = '123.docx' // 文件名,没有文件类型的时候会自动加后缀docx，不过最好加，因为有的浏览器不会自动加，不会出现有两个后缀的时候，不用担心。
         aLink.href = objectUrl;
         aLink.click();
         this.downloadTips()
       })
     }
   }
}
</script>
```

**js**

```js
export const download = (oid) => {
  return request({
    url: '/api/mchi/testresultfile/download',
    method: 'get',
    responseType: 'blob', // 一定要加
    params: {
      oid
    }
  })
}
```

