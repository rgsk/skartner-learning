
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

ListNode* removeDuplicates(ListNode* head) {
    // add your logic here
    auto temp = head;
    while (temp && temp->next) {
        if (temp->data == temp->next->data) {
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

void printList(ListNode* head) {
    ListNode* temp = head;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main() {
    ListNode* head = formList({1, 2, 2, 2, 3, 3, 4, 7});

    ListNode* res = removeDuplicates(head);

    printList(res);

    return 0;
}
// tests-end

/*output
1 2 3 4 7
*/