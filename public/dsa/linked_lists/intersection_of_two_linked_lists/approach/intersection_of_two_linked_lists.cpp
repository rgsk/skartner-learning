#include <bits/stdc++.h>
using namespace std;

// defs-start
struct ListNode {
    int data;
    ListNode* next;
    ListNode(int data, ListNode* next = nullptr) : data(data), next(next) {}
};
// defs-end

ListNode* getIntersectionNode(ListNode* A, ListNode* B) {
    // add your logic here
    auto tempA = A;
    auto tempB = B;
    while (tempA != tempB) {
        tempA = tempA ? tempA->next : B;
        tempB = tempB ? tempB->next : A;
    }
    return tempA;
}

// tests-start
int main() {
    ListNode* C = new ListNode(1, new ListNode(2));
    ListNode* A = new ListNode(11, new ListNode(12, new ListNode(13, C)));
    ListNode* B = new ListNode(21, new ListNode(22, C));

    auto temp = getIntersectionNode(A, B);
    if (temp) {
        cout << temp->data << endl;
    } else {
        cout << -1 << endl;
    }
    return 0;
}
// tests-end

/*output
1
*/
