
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

ListNode* appendLists(ListNode* list1, ListNode* list2) {
    ListNode* temp = list1;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = list2;
    return list1;
}

// tests-start

int main() {
    ListNode* list1 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(7))));
    ListNode* list2 = new ListNode(6, new ListNode(2, new ListNode(5)));

    ListNode* res = appendLists(list1, list2);

    ListNode* temp = res;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;

    return 0;
}

// tests-end

/*output
1 3 4 7 6 2 5
*/