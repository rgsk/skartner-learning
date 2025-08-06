
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

vector<int> linkedListToArray(ListNode* head) {
    // add your logic here
    vector<int> arr;
    auto temp = head;
    while (temp) {
        arr.push_back(temp->data);
        temp = temp->next;
    }
    return arr;
}

// tests-start
int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(3);
    head->next->next = new ListNode(4);
    head->next->next->next = new ListNode(7);

    auto arr = linkedListToArray(head);

    for (int v : arr) {
        cout << v << " ";
    }

    return 0;
}
// tests-end

/*output
1 3 4 7
*/
