
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

ListNode* reverseLinkedList(ListNode* head) {
    if (head && head->next) {
        ListNode* last = reverseLinkedList(head->next);
        head->next->next = head;
        head->next = nullptr;
        return last;
    }
    return head;
}

// tests-start
int main() {
    ListNode* head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

    ListNode* res = reverseLinkedList(head);

    ListNode* temp = res;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;

    return 0;
}
// tests-end

/*output
4 3 2 1
*/