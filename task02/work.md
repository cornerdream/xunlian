# 1，引用计数

> 工作原理，内存空间的地址引用为0的时候立即回收
> 优点，立即回收，算法一直工作当内存要满的时候就把引用数为0的回收释放减少程序的卡顿
> 缺点，无法回收循环引用的对象，算法时刻监控数值变化消耗时间

# 2，标记整理

> 标记活动对象
> 移动对象位置，让活动对象位置连续
> 回收非活动对象

# 3，v8新生代

> 新生代一分为二，使用空间和空闲空间，活动对象拷贝到空闲空间，空间交换释放

# 4，增量标记

> 垃圾回收的时候采用增量标记
> 分段增量标记拆分使程序执行和垃圾回收交替工作优化垃圾回收效率



# 1，

```
const fp = require('lodash/fp');
const cars = [];
const isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last);
isLastInStock(cars);
```

# 2，

```
const fp = require('lodash/fp');
const cars = [];
const isFirstName = fp.flowRight(fp.prop('name'),fp.first);
isFirstName(cars);
```

# 3，

```
const fp = require('lodash/fp');
const cars = [];
const dollar_values = (car)=>{
    return car.dollar_value;
}
const _average = (xs)=>{
    return fp.reduce(fp.add,0,xs)/xs.length;
}
const averageDollarValue = fp.flowRight(_average,fp.map(dollar_values))
averageDollarValue(cars);
```


# 4，

```
const fp = require('lodash/fp');
const cars = [];
const _underscore = ()=>{
    return fp.replace(/\w+/g,'_')
}
const sanitizeNames = fp.flowRight(_underscore,fp.toLower,fp.prop('name'));
```


# 1，

```
let ex1 = maybe.map(value=>fp.map(fp.add(x,y),value))
```

# 2，

```
let ex2 = xs.map(value=>fp.map(fp.first,value));
```

# 3，

```
let ex3 = safeProp(name,user).map(fp.first);
```

# 4，

```
let ex4 = Maybe.of(n).map(value=>parseInt(value));
```

