
#include <bits/stdc++.h>
using namespace std;

int removeDuplicates(vector<int> &A) {
    int cur = A[0];
    int unique = 1;
    for (int i = 1; i < A.size(); i++) {
        if (A[i] != cur) {
            cur = A[i];
            unique++;
        }
    }
    return unique;
}

// tests-start
int main() {
    vector<int> A = {1, 2, 3, 3, 3, 4, 5, 5};
    int size = removeDuplicates(A);
    cout << size << endl;
    return 0;
}
// tests-end

/*output
5
*/