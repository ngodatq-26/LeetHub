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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    var ans = new TreeNode(0);
    var arr = [];
    inorder(root, arr);
    var cur = ans;
    for(let i in arr) {
        cur.right = new TreeNode(arr[i]);
        cur = cur.right;
    }
    return ans.right;
};

var inorder = function (root, arr) {
        if (!root) {
            return;
        }
        inorder(root.left, arr);
        arr.push(root.val);
        inorder(root.right, arr)
}