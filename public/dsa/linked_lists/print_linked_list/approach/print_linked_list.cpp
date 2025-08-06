
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

void printLinkedList(ListNode* head) {
    // add your logic here
    auto temp = head;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
}

// tests-start
int main() {
    // Create nodes
    ListNode* head = new ListNode(1);
    head->next = new ListNode(3);
    head->next->next = new ListNode(4);
    head->next->next->next = new ListNode(7);

    // Optional: print the list
    ListNode* curr = head;
    while (curr != NULL) {
        cout << curr->data << " ";
        curr = curr->next;
    }
    cout << endl;

    return 0;
}
// tests-end

/*output
1 3 4 7
*/