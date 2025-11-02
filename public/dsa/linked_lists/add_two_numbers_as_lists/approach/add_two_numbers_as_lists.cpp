
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

ListNode* addTwoNumbers(ListNode* firstList, ListNode* secondList) {
    // Dummy node acts as the head of the new list
    ListNode* dummy = new ListNode(0);
    ListNode* current = dummy;

    int carry = 0;

    // Loop until both lists are exhausted and no carry remains
    while (firstList != NULL || secondList != NULL || carry != 0) {
        int total = carry;  // Start with carry from previous step

        // Add value from first list if present
        if (firstList != NULL) {
            total += firstList->data;
            firstList = firstList->next;
        }

        // Add value from second list if present
        if (secondList != NULL) {
            total += secondList->data;
            secondList = secondList->next;
        }

        // Compute new carry and current digit
        carry = total / 10;
        int digit = total % 10;

        // Append new node with the computed digit
        current->next = new ListNode(digit);
        current = current->next;
    }

    // The actual result starts from dummy->next
    return dummy->next;
}

// tests-start

int main() {
    ListNode* list1 = new ListNode(2, new ListNode(3, new ListNode(1)));
    ListNode* list2 = new ListNode(1, new ListNode(4, new ListNode(5)));

    ListNode* res = addTwoNumbers(list1, list2);

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
3 7 6
*/