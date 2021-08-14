# 剑指 Offer 10- I. 斐波那契数列

<img src='img/剑指 Offer 10- I. 斐波那契数列.jpg' />



## 方法1：动态规划空间优化

```js
var fib = function (n) {
    if (n < 2) return n
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        dp[i] %= 1000000007
    }
    return dp[n]
};

//优化版
var fib = function (n) {
    if (n < 2) return n
    let a = 0;
    b = 1;
    c = 0;
    for (let i = 2; i <= n; i++) {
        c = (a + b) % 1000000007;
        a = b;
        b = c
    }
    return c
};
```



## 方法2：递归

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
};
```



