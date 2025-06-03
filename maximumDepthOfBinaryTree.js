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
 * @return {number}
 */
var maxDepth = function (root) {
    // hay left y right? voy a los dos
    // hay solo left? voy left
    // hay solo right? voy right
    // no hay ninguno? empiezo a contar
    if (!root) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};