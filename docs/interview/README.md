# 面试总结

## css

### 1.1-CSS BFC块级格式上下文
::: tip 创建bfc
```txt
1.overflow:visiable;除外的
2.position为absolute或者fixed
3.float:none;除外的
4.display:inline-block/table-cell/flex/table-caption/inline-flex;
```
:::

::: tip 作用
```txt
bfc就是页面中独立的容器，容器中的子元素不会影响外部元素
1.自适应两栏布局
2.避免margin覆盖
3.避免高度坍塌
```
:::

### 1.2-css 盒子模型

```txt


```


## js

### 1.1-js常规dom操作

::: details 查看详情
```txt
1.获取节点
getElementById
getElementbyName
getElementsByClassName
getElementsByTagName
querySelector
querySelectorAll
2.获取或设置元素的属性
setAttribute
getAttribute
3.创建节点
createElement
createTextNode
createAttribute
4.增加节点
appendChild
insertBefore
5.删除节点
removeChild
```

:::

### 1.2-js数组api
::: details 查看详情
```txt
map,find,foreach,includes...

```
:::

#### Array.from()
将类似数组的对象或者可遍历的对象转换成真正的数组
```js
let arrayLike = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
};
let arr = Array.from(arrayLike);
//es5写法
var arr2 = [].slice.call(arrLike);


Array.from(document.querySelectorAll('p')).forEach((p)=>{p.style.outline='1px solid red'})

```

#### Array.of()
将一组值转换成数组
```js
Array.of(1,2,3);//[1,2,3]
Array(1,2,3);//1,2,3

Array.of(3);//[3]
Array(3);[,,]
```

#### 实例的find()和findIndex()
找到第一个符合条件的数组成员或数组成员的位置
```js
[1,2,3].find(function(val,idx,arr){
    // console.log(arguments);
    console.log(Array.from(arguments))
    return val===1
})
```

#### map(),filter(),fill(),includes()
#### entries(),keys(),values()




### 1.3-手写reduce
```js
[1,2,3].reduce((prev,item)=>prev+item,10)//16

```

## 算法

### 1.1-跳台阶
```js
// 1 1 2 3 5 8 13 21 ...


```

## vue/react

### 1.1-vue和react的区别和优劣
[公众号前端面试中的总结](https://mp.weixin.qq.com/s/JsTZ-R6tNJaejoEyQxCXOw)
::: details 查看详情
```txt
1.模版和jsx
2.状态管理和对象属性
3.vue本质是mvvm框架，由mvc发展而来；
react是前端组件化工具
。。。
react的性能优化需要手动去做，而vue的性能优化是自动的，但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，更加可控。
```
:::

## 常规基础

### 1.1-


## node高级基础

### 1


