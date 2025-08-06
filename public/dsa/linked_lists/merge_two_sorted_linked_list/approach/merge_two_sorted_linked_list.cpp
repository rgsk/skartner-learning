#include <iostream>
using namespace std;

// defs-start
struct ListNode {
    int data;
    ListNode* next;
    ListNode(int data, ListNode* next = nullptr) : data(data), next(next) {}
};
// defs-end

ListNode* mergeTwoSortedList(ListNode* firstList, ListNode* secondList) {
    ListNode* dummy = new ListNode(-1);
    ListNode* temp = dummy;

    while (firstList && secondList) {
        if (firstList->data < secondList->data) {
            temp->next = firstList;
            firstList = firstList->next;
        } else {
            temp->next = secondList;
            secondList = secondList->next;
        }
        temp = temp->next;
    }

    temp->next = firstList ? firstList : secondList;
    return dummy->next;
}

// tests-start
int main() {
    ListNode* A = new ListNode(2, new ListNode(3, new ListNode(7)));
    ListNode* B = new ListNode(1, new ListNode(4, new ListNode(5)));

    ListNode* C = mergeTwoSortedList(A, B);

    ListNode* temp = C;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 2 3 4 5 7
*/
