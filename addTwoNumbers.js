
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sumLinkedList = new ListNode(0);

    let currentNode = sumLinkedList;
    let carry = 0;

    while (l1 || l2 || carry === 1) {
        let l1Val = l1?.val ?? 0;
        let l2Val = l2?.val ?? 0;
        let sum = l1Val + l2Val + carry;

        carry = Math.floor(sum / 10);

        let current = sum % 10;

        currentNode.val = current;


        l1 = l1?.next;
        l2 = l2?.next;

        if (l1 || l2 || carry === 1) {
            currentNode.next = new ListNode(0);
            currentNode = currentNode.next;
        }

    };

    return sumLinkedList;
};

console.log(addTwoNumbers(
    { val: 2, next: { val: 4, next: { val: 3, next: null } } }
    , { val: 5, next: { val: 6, next: { val: 4, next: null } } }
)); // Output: { val: 7, next: { val: 0, next: { val: 8, next: null } } }

console.log(addTwoNumbers(
    { val: 9, next: { val: 9, next: { val: 9, next: null } } },
    { val: 1, next: null }