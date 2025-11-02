// Definition for singly-linked list node
export class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data: number, next: ListNode | null = null) {
    this.data = data;
    this.next = next;
  }
}

export function formLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head;
}

export function linkedListtoArray(head: ListNode | null): number[] {
  const arr: number[] = [];
  let current = head;
  while (current) {
    arr.push(current.data);
    current = current.next;
  }
  return arr;
}

export function copyLinkedList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  const newHead = new ListNode(head.data);
  let currentOld = head.next;
  let currentNew = newHead;

  while (currentOld) {
    currentNew.next = new ListNode(currentOld.data);
    currentNew = currentNew.next;
    currentOld = currentOld.next;
  }

  return newHead;
}
