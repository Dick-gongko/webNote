# 微信小程序[Aggregate](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.html).match(object: Object)聚合操作，按条件搜索数据库内容

## 参数

### object: Object

## 返回值

### [Aggregate](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.html)

## API 说明

`match` 的形式如下：

```text
match(<查询条件>)
```

查询条件与普通查询一致，可以用普通查询操作符

**注意** `match` 阶段**和其他聚合阶段不同，不可使用聚合操作符，只能使用查询操作符。**

```js
// 直接使用字符串
match({
  name: 'Tony Stark'
})

// 使用操作符
db.collection('test')
    .aggregate()
    .match({
    //查询数据库test里age大于18的所有数据
      age: _.gt(18)
    })
```

## 示例

假设集合 `articles` 有如下记录：

```json
{ "_id" : "1", "author" : "stark",  "score" : 80 }
{ "_id" : "2", "author" : "stark",  "score" : 85 }
{ "_id" : "3", "author" : "bob",    "score" : 60 }
{ "_id" : "4", "author" : "li",     "score" : 55 }
{ "_id" : "5", "author" : "jimmy",  "score" : 60 }
{ "_id" : "6", "author" : "li",     "score" : 94 }
{ "_id" : "7", "author" : "justan", "score" : 95 }
```

#### 匹配

下面是一个直接匹配的例子：

```js
db.collection('articles')
  .aggregate()
  .match({
    author: 'stark'
  })
  .end()
```

这里的代码尝试找到所有 `author` 字段是 `stark` 的文章，那么匹配如下：

```json
{ "_id" : "1", "author" : "stark", "score" : 80 }
{ "_id" : "2", "author" : "stark", "score" : 85 }
```

#### 计数

`match` 过滤出文档后，还可以与其他流水线阶段配合使用。

比如下面这个例子，我们使用 `group` 进行搭配，计算 `score` 字段大于 `80` 的文档数量：

```js
const _ = db.command
const $ = _.aggregate
db.collection('articles')
  .aggregate()
  .match({
    score: _.gt(80)
  })
  .group({
      _id: null,
      count: $.sum(1)
  })
  .end()
```

返回值如下：

```json
{ "_id" : null, "count" : 3 }
```