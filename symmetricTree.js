/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let a = inorderTraversal(root, []);
    let b = invertedInorderTraversal(root, []);

    return a == b;
};

function inorderTraversal(root, arr) {
    if(!root) return arr;

    inorderTraversal(root.left, arr);
    arr.push(root.value);
    inorderTraversal(root.right, arr);

    return arr;
}

function invertedInorderTraversal(root, arr) {
    if(!root) return arr;

    invertedInorderTraversal(root.right, arr);
    arr.push(root.value);
    invertedInorderTraversal(root.left, arr);

    return arr;
}