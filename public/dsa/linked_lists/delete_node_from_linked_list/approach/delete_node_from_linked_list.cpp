#include <bits/stdc++.h>
using namespace std;

// defs-start
struct ListNode {
    int data;
    ListNode* next;
    ListNode(int data, ListNode* next = nullptr) : data(data), next(next) {}
};
// defs-end

void deleteNode(ListNode* node) {
    node->data = node->next->data;
    node->next = node->next->next;
}

// tests-start
int main() {
    ListNode* node = new ListNode(2, new ListNode(3, new ListNode(4)));
    ListNode* head = new ListNode(1, node);

    deleteNode(node);

    ListNode* temp = head;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 3 4
*/
