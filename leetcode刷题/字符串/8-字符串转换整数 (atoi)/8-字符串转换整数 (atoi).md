# 8-字符串转换整数 (atoi)

<img src='./img/8-字符串转换整数 (atoi).jpg' />



## 方法1：一次遍历

- 空格处理

- 正负号处理

- 数字处理

- 「推入」数字
  - result = result * 10 + num

- 数字范围溢出判断

```js
var myAtoi = function (s) {
    let i = 0,
        sign = 1, //1为整数，-1为负数，默认为正数
        max = Math.pow(2, 31) - 1,
        min = Math.pow(2, 31)
    let res = 0
    //去除前导空格
    while (s[i] === ' ') i++
    //正负号处理
    if (s[i] === '+' || s[i] === '-') {
        //如果是负数，改变标识变量的值，正数不用变
        if (s[i] === '-') {
            sign = -1
        }
        //指针后移
        i++
    }
    //若字符为数字则转化为数字，并做边界判断
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let r = s[i] - '0' //转换为数字
        res = res * 10 + r
        if (res > max || res < -min) {
            return sign > 0 ? max : -min
        }
        i++
    }
    return sign > 0 ? res : -res
};
```



