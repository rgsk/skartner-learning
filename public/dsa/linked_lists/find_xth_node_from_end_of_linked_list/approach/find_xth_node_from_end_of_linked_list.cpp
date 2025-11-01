#include <bits/stdc++.h>
using namespace std;

// defs-start
struct ListNode {
    int data;
    ListNode* next;
    ListNode(int data, ListNode* next = nullptr) : data(data), next(next) {}
};
// defs-end

ListNode* xthNodeFromEnd(ListNode* head, int x) {
    if (!head) return NULL;

    ListNode* fast = head;
    ListNode* slow = head;

    for (int i = 0; i < x; i++) {
        if (!fast) return NULL;
        fast = fast->next;
    }

    while (fast) {
        fast = fast->next;
        slow = slow->next;
    }

    return slow;
}

// tests-start
int main() {
    ListNode* head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

    cout << xthNodeFromEnd(head, 2)->data << endl;
    return 0;
}
// tests-end

/*output
3
*/
