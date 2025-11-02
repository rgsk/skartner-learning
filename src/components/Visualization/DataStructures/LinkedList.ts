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

export function appendLinkedLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;

  let temp = list1;

  while (temp.next !== null) {
    temp = temp.next;
  }

  temp.next = list2;

  return list1;
}

export function containsNode(
  head: ListNode | null,
  target: ListNode | null
): boolean {
  let current = head;
  while (current) {
    if (current === target) {
      return true;
    }
    current = current.next;
  }
  return false;
}

export function getNodeIndex(
  head: ListNode | null,
  target: ListNode | null
): number {
  let current = head;
  let index = 0;
  while (current) {
    if (current === target) {
      return index;
    }
    current = current.next;
    index++;
  }
  return -1; // Target node not found
}

export function appendNodeToLinkedList(
  head: ListNode | null,
  nodeToAppend: ListNode | null
): ListNode | null {
  if (!head) return nodeToAppend;

  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = nodeToAppend;
  return head;
}
