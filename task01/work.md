
# 1

> 执行结果，10

> 原因，i是全局变量，函数里面的i私有作用域没有，是需要到上级作用域中查找的，此时的i值循环结束为10

# 2

> 执行结果，报错

> 原因，let会形成一个块级作用域，不允许在未声明前使用

# 3

```
var arr = [12,34,32,89,4];
var min = Math.min(...arr);
console.log(min);
```

# 4

> const，常量，指向一个不变的地址

> let，没有变量提升，不允许重复声明，只是全局变量，是块级作用域

> var, 有变量提升，可以重复声明，是全局变量也是window属性，不会形成私有作用域

# 5

> 结果，20

> 原因，箭头函数的this是当前上下文的this，指向obj对象

# 6

> Symbol 的值是唯一的，避免冲突

# 7

> 浅拷贝，拷贝的引用

> 深拷贝，拷贝的值

# 8

> 异步编程是另外开辟线程工作，比如定时器、事件、ajax

> EventLoop是等同步处理完成后从事件队列中提取事件到栈中执行的机制

> 宏任务、微任务都是异步，只是宏任务先放进事件队列中后放进栈中执行

# 9

```
let p1=new Promise((resolve,reject)=>{
    let a='hello';
    resolve(a);
});
p1.then(result=>{
    let b='lagou';
    return result+b;
}).then(result=>{
    let c='iy';
    console.log(result+c);
});
```

# 10

> TypeScript是对JavaScript的升级，可以编译成JavaScript

# 11

> 优点，对类型安全检查方面完善，对第三方库的兼容

> 缺点，复杂需要一定的学习，开发成本加大
