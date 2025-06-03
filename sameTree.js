/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    return recursive(p, q);
};

function recursive(p, q) {
    if (!p && !q) return true;
    if (p && q) {
        if(!recursive(p.left, q.left)) return false;
        if(!recursive(p.right, q.right)) return false;
        return p.val === q.val;
    }
    return false;
}