# 剑指 Offer 38. 字符串的排列

### 输入一个字符串，打印出该字符串中字符的所有排列。

### 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

**示例:**

```
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

**限制：**

- 1 <= s 的长度 <= 8



## 方法1：回溯

本题是回溯算法经典题目，求全排列+去重，这道题目和 47.全排列II 几乎是一样的。

**还要强调的是去重一定要对元素经行排序，这样我们才方便通过相邻的节点来判断是否重复使用了**。

我以示例中的 [1,1,2]为例 （为了方便举例，已经排序）抽象为一棵树，去重过程如图：

![](E:\数据结构与算法总结笔记\leetcode刷题\回溯\字符串回溯\剑指 Offer 38-字符串的排列\img\图解1.png)

图中我们对同一树层，前一位（也就是nums[i-1]）如果使用过，那么就进行去重。

一般来说：组合问题和排列问题是在树形结构的叶子节点上收集结果，而子集问题就是取树上所有节点的结果。

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    if (!s.length) return []
    let res = [],
        used = []
    //字符串先转数组再sort，最后转回来
    let ss = Array.from(s).sort().join("");
    const dfs = str => {
        if (str.length === ss.length) {
            res.push(str)
            return
        }
        for (let i = 0; i < ss.length; i++) {
            //去重判断与全排列II一样
            if (used[i]) continue
            if (i > 0 && ss[i] == ss[i - 1] && !used[i - 1]) continue
            used[i] = true
            dfs(str + ss[i])
            used[i] = false
        }
    }
    dfs("")
    return res
};
```

