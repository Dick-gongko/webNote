# Html css flexbox 布局

开启Flex布局

```css
display:flex;
```

flex布局默认按行排列，左上角开始。

**改变对齐方向右对齐。**添加属性`justify-content`值为`flex-end`。例：

```css
display:flex;
justify-content: flex-end;
```

属性**justify-content**值

- flex-end                  靠右上对齐
- center                     居中对齐
- space-around        平分空间（均匀分布）
- space-between      两端对齐（左右各靠最右其余均匀分布）
- flex-start                 靠左对齐（默认值）

**align-items属性。改为垂直方向布局用**



- flex-end              靠下对齐
- center                 居中对齐（垂直方向）

**flex-direction属性。把主轴改为Y轴（垂直方向）**

```css
flex-direction:column;
```

其他设置项和行一样。 



**Flex属性**

父节点开启flex布局，子节点没有设置横向大小。子节点样式可添加`flex`属性来调整空间的占比。如果横方向上有三个节点。flex值各为1,2,1。则这两个节点横向大小为1/4、2/4、1/4。

```css
flex:1;
```

