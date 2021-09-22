# Avue 基础

简单的结构体：

```js
Var option = {
    "border": true,
    "index": true,
    "expand": true,
    "strupe": true,
    "selection": true,
    "page": false,
    "menuAlign": "center",
    "align": "center",
    "column": [{
        "label": "用户名",//表格显示的名子
        "prop": "username",// 后台数据对应的字段
    },
    {
        "label": "密码",
        "prop": "password",
        "type": "password"//类型，有12种类型
    }]
}
```

### 字典用法

解释: 就是点击里面有选择值直接选择

字典的组件（type属性）

 ``select/radio/checkbox/cascader/switch`` 

**三种写法**

- 直接写array字典
- 字典对象，根据名字去加载字典
- 网络请求

**本地字典**

```js
Var option = {
    "border": true,
    "index": true,
    "expand": true,
    "strupe": true,
    "selection": true,
    "page": false,
    "menuAlign": "center",
    "align": "center",
    "column": [{
        "label": "用户名",//表格显示的名子
        "prop": "username",// 后台数据对应的字段
    },
    {//本地字典部分
        "label": "",
		"prop": "dic",
        "type": "select",
        "dicData": [{
            "label": "男",
            "value": 0,
        },
        {
            "label": "女",
            "value": 1,
        }]
    }]
}
```

**字典对象**

```js
//变量DIC值：
var DIC = {
    "SEX":[{
            "label": "男",
            "value": 0,
        },
        {
            "label": "女",
            "value": 1,
        }],
    "TYPE":[{
            "label": "普通会员",
            "value": 0,
        },
        {
            "label": "高级会员",
            "value": 1,
        }],
}
// 使用字典指定使用 key值就可以了
Var option = {
    "border": true,
    "index": true,
    "expand": true,
    "strupe": true,
    "selection": true,
    "page": false,
    "menuAlign": "center",
    "align": "center",
    "dicData": DIC, // 导入字典对象？？可能是那么说
    "column": [{
        "label": "用户名",
        "prop": "username",// 后台数据对应的字段
    },
    {//本地字典部分
        "label": "字典加载",
		"prop": "dic",
        "type": "select",
        "dicData": "SEC"//使用变量DIC中的SEX对象的字典
    }]
}
```

**[网络字典](https://www.avuejs.com/doc/form/form-select)**

- 默认的key-value为： label-value
- props可配置key-value的值

```js
Var option = {
    "border": true,
    "index": true,
    "expand": true,
    "strupe": true,
    "selection": true,
    "page": false,
    "menuAlign": "center",
    "align": "center",
    props: {// 获取的key-value值不对所以处理一下
        label: 'name',
        value: 'code'
    }，
    "dicUrl": 'https://cli.avuejs.com/api/area',//获得字典地址
    "column": [{
        "label": "用户名",
        "prop": "username",// 后台数据对应的字段
    },
    {//本地字典部分
        label: "省份",
		value："sf",
        type: "select",
        dicData: "getProvince"//获得省份信息。全地址是https://cli.avuejs.com/api/area/getProvince
    }]
}
```

**点击提交按键剧中**

写 对象 ``option`` 里不写 ``searchMenuSpan`` 就可以了

