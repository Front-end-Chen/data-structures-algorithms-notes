# 剑指 Offer 05. 替换空格

<img src='img/剑指 Offer 05. 替换空格.jpg' />



## 方法1： 双指针从后往前

1.将字符串转换为数组，然后统计其中的空格数量。

2.根据空格数量和原有字符串有效字符长度，计算出刚好存放替换后的字符长度的数组。

3.创建两个指针，一个指数组末尾，一个指字符串有效位的末尾，实现原地修改。

**注意：**数组遍历，一定要从后往前遍历，从前向后填充就是O(n^2)的算法了，因为每次添加元素都要将添加元素之后的所有元素向后移动。

```js
var replaceSpace = function (s) {
    if (s.length === 0) return s
    let res = s.split("") //字符串不可变，转换为数组操作
    let ordLen = res.length //记录字符串长度
    let count = 0 //记录空格字符的个数
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") count++
    }
    res.length += count * 2 //扩充数组的长度到替换空格后的长度
    //从后往前遍历，双指针递减，双指针相等时结束
    for (let i = ordLen - 1, j = res.length - 1; i < j; i--, j--) {
        if (res[i] !== " ") { //若不为空格，则正常赋值
            res[j] = res[i]
        } else { //否则倒序添加字符
            res[j] = "0"
            res[j - 1] = "2"
            res[j - 2] = "%"
            j -= 2 //注意此处减2
        }
    }
    return res.join("")
};
```

