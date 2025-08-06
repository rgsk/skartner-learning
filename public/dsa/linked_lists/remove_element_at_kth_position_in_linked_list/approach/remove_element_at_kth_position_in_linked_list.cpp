
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

ListNode* removekthElement(ListNode* head, int k) {
    // add your logic here
    if (k == 1) {
        return head->next;
    }
    auto temp = head;
    while (k > 2) {
        temp = temp->next;
        k--;
    }
    temp->next = temp->next->next;
    return head;
}

// tests-start
int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(3);
    head->next->next = new ListNode(4);
    head->next->next->next = new ListNode(7);
    int k = 2;
    auto res = removekthElement(head, k);
    auto temp = res;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    return 0;
}
// tests-end

/*output
1 4 7
*/
