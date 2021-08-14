# 剑指 Offer 54-二叉搜索树的第k大节点

### 给定一棵二叉搜索树，请找出其中第k大的节点。

**示例 1:**

```
输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
```

**示例 2:**

```js
输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
```

**限制：**

1 ≤ k ≤ 二叉搜索树元素个数



## 方法1：DFS中序递归

### 二叉搜索树的中序遍历为 递增序列 。

### 根据以上性质，易得二叉搜索树的 中序遍历倒序 为 递减序列 。

### 因此，求 “二叉搜索树第 k 大的节点” 可转化为求 “此树的中序遍历倒序的第 k 个节点”。

<img src="img/图解.png" style="zoom:67%;" />

### 为求第 k 个节点，需要实现以下 三项工作 ：

#### 1.递归遍历时计数，统计当前节点的序号；

#### 2.递归到第 k 个节点时，应记录结果 res ；

#### 3.记录结果后，后续的遍历即失去意义，应提前终止（即返回）。

### 递归解析：

#### 1）终止条件： 当节点 root 为空（越过叶节点），则直接返回；

#### 2）递归右子树： 即 dfs(root.right) ；

#### 3）三项处理工作：

##### 1.提前返回： 若 k = 0 ，代表已找到目标节点，无需继续遍历，因此直接返回；

##### 2.统计序号： 执行 k = k - 1（k--） （即从 k 减至 0 ）；

##### 3.记录结果： 若 k = 0 ，代表当前节点为第 k 大的节点，因此记录 res = root.val ；

##### 4.递归左子树： 即 dfs(root.left) ；

#### 注：此处用加法 k = k + 1（k++）（即0加到k）也行

#### 4）递归左子树： 即 dfs(root.left) ；

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    let count = k,
        res = 0
    function inorder(root) {
        if (!root) return
        inorder(root.right)
        count--
        if (count === 0) {
            res = root.val
            return
        }
        inorder(root.left)
    }
    inorder(root)
    return res
};
```



## 方法2：DFS中序迭代

### 原理与方法1递归的一样！

```js
var kthLargest = function (root, k) {
    let st = [],
        count = k
    while (root || st.length) {
        while (root) {
            st.push(root)
            root = root.right
        }
        root = st.pop()
        count--
        if (count === 0) return root.val
        root = root.left
    }
};
```

