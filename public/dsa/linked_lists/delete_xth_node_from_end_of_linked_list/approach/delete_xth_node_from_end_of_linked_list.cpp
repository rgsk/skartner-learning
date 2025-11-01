#include <bits/stdc++.h>
using namespace std;

// defs-start
struct ListNode {
    int data;
    ListNode* next;
    ListNode(int data, ListNode* next = nullptr) : data(data), next(next) {}
};
// defs-end

ListNode* removeXthNodeFromEnd(ListNode* head, int x) {
    ListNode* dummy = new ListNode(0);
    dummy->next = head;
    ListNode* fast = dummy;
    ListNode* slow = dummy;

    for (int i = 0; i < x + 1; i++) {
        if (!fast) return head;
        fast = fast->next;
    }

    while (fast) {
        fast = fast->next;
        slow = slow->next;
    }

    ListNode* nodeToDelete = slow->next;
    slow->next = slow->next->next;
    delete nodeToDelete;

    return dummy->next;
}

// tests-start
void printList(ListNode* head) {
    while (head) {
        cout << head->data;
        if (head->next) cout << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);

    int x = 2;
    head = removeXthNodeFromEnd(head, x);

    printList(head);
    return 0;
}
// tests-end

/*output
1 2 4
*/
