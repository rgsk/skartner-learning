
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

ListNode* removeOccurences(ListNode* head, int key) {
    ListNode* dummy = new ListNode(-1);
    ListNode* temp1 = head;
    ListNode* temp2 = dummy;

    while (temp1) {
        if (temp1->data != key) {
            temp2->next = temp1;
            temp2 = temp2->next;
        }
        temp1 = temp1->next;
    }

    temp2->next = nullptr;
    return dummy->next;
}

// tests-start
ListNode* formList(const vector<int>& arr) {
    if (arr.empty()) return nullptr;

    ListNode* head = new ListNode(arr[0]);
    ListNode* curr = head;

    for (int i = 1; i < arr.size(); ++i) {
        curr->next = new ListNode(arr[i]);
        curr = curr->next;
    }

    return head;
}
int main() {
    vector<int> arr = {1, 2, 3, 2, 4, 7, 2};
    ListNode* head = formList(arr);
    int key = 2;
    ListNode* res = removeOccurences(head, key);
    auto temp = res;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    return 0;
}
// tests-end

/*output
1 3 4 7
*/
