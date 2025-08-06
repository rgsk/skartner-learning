
#include <bits/stdc++.h>
using namespace std;

// defs-start
class ListNode {
   public:
    int data;
    ListNode* next;

    ListNode(int data) {
        this->data = data;
        this->next = NULL;
    }
};
// defs-end

void printLinkedListReverse(ListNode* head) {
    // add your logic here
    if (head) {
        printLinkedListReverse(head->next);
        cout << head->data << " ";
    }
}

// tests-start
int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(3);
    head->next->next = new ListNode(4);
    head->next->next->next = new ListNode(7);

    printLinkedListReverse(head);

    return 0;
}
// tests-end

/*output
7 4 3 1
*/