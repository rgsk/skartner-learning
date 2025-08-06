
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

ListNode* addAtkthElement(ListNode* head, int k, ListNode* newElement) {
    // add your logic here
    if (k == 1) {
        newElement->next = head;
        return newElement;
    }
    auto temp = head;
    while (k > 2) {
        temp = temp->next;
        k--;
    }
    newElement->next = temp->next;
    temp->next = newElement;
    return head;
}

// tests-start
int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(3);
    head->next->next = new ListNode(4);
    head->next->next->next = new ListNode(7);
    int k = 2;
    auto res = addAtkthElement(head, k, new ListNode(5));
    auto temp = res;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    return 0;
}
// tests-end

/*output
1 5 3 4 7
*/
