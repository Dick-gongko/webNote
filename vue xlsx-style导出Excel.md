# vue xlsx-style导出Excel

作者： H口先生



## 安装依赖

```tex
yarn add file-saver
yarn add xlsx
yarn add xlsx-style
```

`` ps:node版本要12以上，不然会报错 `` 

## 示例

```vue
<template>
  <div>
    <el-button @click="upExcel">导出</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [{
        COLFJF: '0.00',
        COLGBF: '0.00',
        COLGHF: '0.00',
        COLKSDM: 'M102',
        COLKSMC: '产一科',
        COLRC: '166',
        COLZLF: '2176.00'
      }]
    }
  },
  methods: {
    upExcel () {
      import('@/utils/vendor/Export2Excel').then(excel => { // 地址
        var header = ['科室名称', '人次', '挂号费', '诊察费', '工本费', '附加费', '总费用'] // 表头行数据名
        var filterVal = ['COLKSMC', 'COLRC', 'COLGHF', 'COLZLF', 'COLGBF', 'COLFJF', 'sum'] // 表头行字段名
        var merges = ['A1:G1', 'A2:G2', 'A3:G3', 'A4:G4', 'A5:G5'] // 要合并的单元格
        const finallyData = this.formatJson(filterVal, this.data) // 对数据处理
        excel.export_json_to_excel({
          filename: '挂号报表（科室）', // 导出文件的名称
          firstHeadre: [ // 表前面几行内容
            ['', '', '', '', '', '', ''],
            [`开始日期：~结束日期：`, '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['挂号报表（科室）', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '']
          ],
          merges, // 合并的单元格
          header, // 表头行的名称
          autoWidth: true, // 自动行宽
          data: finallyData // 表数据
        })
      })
    },
    formatJson (filterVal, jsonData) { // 数据处理的方法
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    }
  }
}
</script>
```

### 异常解决

```txt
没有其他错误的话安装的依赖xlsx-style里的dist\cpexcel.js文件会报错，操作如下：
修改xlsx-style源码 解决报错
在\node_modules\xlsx-style\dist\cpexcel.js
将var cpt = require('./cpt' + 'able');改为var cpt = cptable;

PS:每yarn install 一次或者安装一次依赖都会再次出现这个问题（被改回去了，好强）
```

## 参数

