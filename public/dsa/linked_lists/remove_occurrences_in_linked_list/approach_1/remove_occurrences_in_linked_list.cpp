
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
    while (head != NULL && head->data == key) {
        head = head->next;
    }
    ListNode* temp = head;
    while (temp != NULL && temp->next != NULL) {
        if (temp->next->data == key) {
            temp->next = temp->next->next;
        } else {
            temp = temp->next;
        }
    }
    return head;
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
