/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    var arr = [];
    var pre = function(root, arr) {
        if(root) {
           arr.push(root.val);
           for (let i of root.children) {
               pre(i, arr)
           }
        }
    }
    pre(root, arr);
    return arr;
};