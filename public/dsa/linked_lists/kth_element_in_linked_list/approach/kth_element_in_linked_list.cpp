
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

ListNode* kthElement(ListNode* head, int k) {
    ListNode* temp = head;

    // Move (k - 1) steps ahead to reach the kth node
    int count = 1;
    while (temp != NULL && count < k) {
        temp = temp->next;
        count++;
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
