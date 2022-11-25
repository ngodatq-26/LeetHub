/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
   var arr = [];
    var post = function(root, arr) {
        if(root) {
          for (let i of root.children) {
               post(i, arr)
           }
           arr.push(root.val); 
        }
    }
    post(root, arr);
    return arr;
};