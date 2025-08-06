
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

ListNode* getMiddleNode(ListNode* head) {
    ListNode* fast = head;
    ListNode* slow = head;
    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

ListNode* reverse(ListNode* head) {
    ListNode* prevNode = NULL;
    ListNode* curNode = head;
    while (curNode) {
        ListNode* nextNode = curNode->next;
        curNode->next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
    }
    return prevNode;
}
bool isPalindrome(ListNode* list) {
    ListNode* middleNode = getMiddleNode(list);
    ListNode* secondHalf = reverse(middleNode->next);
    ListNode* firstHalf = list;
    while (secondHalf) {
        if (secondHalf->data != firstHalf->data) {
            return false;
        }
        secondHalf = secondHalf->next;
        firstHalf = firstHalf->next;
    }
    return true;
}

// tests-start
int main() {
    // Example 1: 1 → 2 → 3 → 4
    ListNode* ex1 = new ListNode(1);
    ex1->next = new ListNode(2);
    ex1->next->next = new ListNode(3);
    ex1->next->next->next = new ListNode(4);
    cout << (isPalindrome(ex1) ? "true" : "false") << endl;

    // Example 2: 1 → 2 → 2 → 1
    ListNode* ex2 = new ListNode(1);
    ex2->next = new ListNode(2);
    ex2->next->next = new ListNode(2);
    ex2->next->next->next = new ListNode(1);
    cout << (isPalindrome(ex2) ? "true" : "false") << endl;

    return 0;
}

// tests-end

/*output
false
true
*/