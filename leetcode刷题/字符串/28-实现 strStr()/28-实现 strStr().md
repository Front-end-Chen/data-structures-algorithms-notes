# 28-实现 strStr()

<img src='img/28-实现 strStr().jpg' />



## 方法1：暴力法

**时间复杂度：O(m*n)**

1）正向判断-判断双指针是否到匹配串末尾，是则匹配成功，否则继续下一个子串匹配

```js
var strStr = function (haystack, needle) {
    let h = haystack.length, n = needle.length;
    if (n == 0) return 0; //匹配串为空串返回0
    // 枚举原串的「发起点」
    for (let i = 0; i <= h - n; i++) {
        let j = i, k = 0;
        // 从原串的「发起点」和匹配串的「首位」开始，尝试匹配
        while (k < n && haystack[j] == needle[k]) {
            j++;
            k++;
        }
        if (k == n) return i;
    }
    return -1;
};
```

2）反向判断-判断子串是否有不相等的字符，有则停止匹配，否则继续下一个子串匹配

```js
var strStr = function (haystack, needle) {
    let h = haystack.length, n = needle.length;
    if (n == 0) return 0; //匹配串为空串返回0
    // 枚举原串的「发起点」
    for (let i = 0; i <= h - n; i++) {
        let flag = true; //判断子串是否匹配
        // 从原串的「发起点」和匹配串的「首位」开始，尝试匹配
        for (let j = 0; j < n; j++) {
            if (haystack[i + j] != needle[j]) {
                flag = false
                break;
            }
        }
        if (flag) return i;
    }
    return -1;
};

```

## 方法2：KMP算法

**时间复杂度：O(m+n)**

KMP 算法是一个快速查找匹配串的算法

KMP 算法能在「非完全匹配」的过程中提取到有效信息进行复用，以减少「重复匹配」的消耗。

所以能够在 O(m + n) 复杂度内完成查找

**详解链接：**

https://leetcode-cn.com/problems/implement-strstr/solution/dai-ma-sui-xiang-lu-kmpsuan-fa-xiang-jie-mfbs/

1.构造next数组

1）初始化

2）处理前后缀不相同的情况

3）处理前后缀相同的情况

4）更新next数组的值

2.使用next数组来做匹配

匹配成功则i，j双指针后移

匹配不成功，j跳转到next数组前一位的值，即记录下标i之前（包括i）的字符串中，有多大长度的相同前缀后缀。即之前已经匹配的文本内容的后一位（因为下标为长度，即后一位）

完全匹配返回i-n+1

```js
//这里next数组就是前缀表，没有做其他处理
var strStr = function (haystack, needle) {
    let h = haystack.length, n = needle.length;
    if (n == 0) return 0; //匹配串为空串返回0
    let next = new Array(n).fill(0); //初始化next数组0
    let j = 0;
    //构造next数组
    for (let i = 1; i < n; i++) {
        // 匹配不成功的话，j = next[j - 1]
        while (j > 0 && needle[i] != needle[j])
            j = next[j - 1];
        // 匹配成功的话，j++
        if (needle[i] == needle[j]) {
            j++;
        }
        //更新next[i]
        next[i] = j;
    }
    j = 0;
    //字符串匹配
    for (let i = 0; i < h; i++) {
        // 匹配不成功的话，j = next[j - 1]
        while (j > 0 && haystack[i] != needle[j])
            j = next[j - 1];
        // 匹配成功的话，j++
        if (haystack[i] == needle[j]) {
            j++;
        }
        //如果能够完全匹配，返回原串的「发起点」下标即i - n + 1，注意+1！
        if (j == n) return i - n + 1;
    }
    return -1;
};
```


