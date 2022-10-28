/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let first = head;
    let slow = head
    while (first !== null && first.next !== null) {
        slow = slow.next;
        first = first.next.next;
    }
    return slow;
};