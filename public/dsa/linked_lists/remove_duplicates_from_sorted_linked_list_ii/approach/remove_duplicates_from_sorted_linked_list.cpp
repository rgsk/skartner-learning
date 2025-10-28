
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
    ListNode* dummy = new ListNode(-1);
    ListNode* res_temp = dummy;
    ListNode* current = head;

    while (current) {
        ListNode* temp = current->next;
        bool duplicates = false;

        // Skip all nodes with the same value
        while (temp && temp->data == current->data) {
            duplicates = true;
            temp = temp->next;
        }

        // If current value is unique, attach it to the result list
        if (!duplicates) {
            res_temp->next = current;
            res_temp = res_temp->next;
        }

        current = temp;
    }

    // Disconnect the last node from any remaining old links
    res_temp->next = nullptr;

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
1 4 7
*/