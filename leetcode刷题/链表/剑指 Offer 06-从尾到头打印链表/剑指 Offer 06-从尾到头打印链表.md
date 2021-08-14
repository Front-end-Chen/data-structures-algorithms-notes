# 剑指 Offer 06-从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

**示例 1：**

```
输入：head = [1,3,2]
输出：[2,3,1]
```

**限制：**

```
0 <= 链表长度 <= 10000
```



## 方法1：用栈


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    if (!head) return []
    let st = [],
        res = []
    while (head) {
        st.push(head)
        head = head.next
    }
    while (st.length) {
        res.push(st.pop().val)
    }
    return res
};
```

## 方法2：递归

```js
var reversePrint = function (head) {
    if (!head) return []
    let res = []
    function recur(head) {
        if (!head) return null
        recur(head.next)
        res.push(head.val)
    }
    recur(head)
    return res
};
```

