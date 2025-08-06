
#include <bits/stdc++.h>
using namespace std;

// defs-start
class ListNode {
   public:
    int data;
    ListNode* next;
    ListNode(int data, ListNode* next = nullptr) : data(data), next(next) {}
};

// defs-end

int getMiddleElementOfLinkedList(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;

    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow->data;
}

// tests-start

int main() {
    ListNode* list1 = new ListNode(1, new ListNode(8, new ListNode(3)));
    ListNode* list2 = new ListNode(1, new ListNode(3, new ListNode(8, new ListNode(5))));
    cout << getMiddleElementOfLinkedList(list1) << endl;
    cout << getMiddleElementOfLinkedList(list2) << endl;
    return 0;
}

// tests-end

/*output
8
3
*/