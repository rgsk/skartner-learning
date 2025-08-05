
#include <bits/stdc++.h>
using namespace std;

int removeDuplicates(vector<int> &A) {
    unordered_set<int> duplicateRemoved;
    for (int i = 0; i < A.size(); i++) {
        duplicateRemoved.insert(A[i]);
    }
    return duplicateRemoved.size();
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