
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

ListNode* kthElement(ListNode* head, int k) {
    auto temp = head;
    while (k > 1) {
        temp = temp->next;
        k--;
    }
    return temp;
}

// tests-start
int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(3);
    head->next->next = new ListNode(4);
    head->next->next->next = new ListNode(7);
    int k = 2;
    auto node = kthElement(head, k);
    cout << node->data << endl;
    return 0;
}
// tests-end

/*output
3
*/
