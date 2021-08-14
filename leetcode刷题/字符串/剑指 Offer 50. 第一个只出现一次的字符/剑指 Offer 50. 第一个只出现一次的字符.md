# 剑指 Offer 50. 第一个只出现一次的字符

<img src='img/剑指 Offer 50. 第一个只出现一次的字符.jpg' />



## 方法1：哈希map法 - 两次遍历

```js
//哈希map法
var firstUniqChar = function(s) {
    let map = new Map()
    for (let n of s) {
        map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1)
    }
    for (let m of map) {
        if(m[1] === 1) return m[0]
    }
    return " "
};
```

