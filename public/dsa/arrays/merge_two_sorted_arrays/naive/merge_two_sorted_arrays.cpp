
#include <bits/stdc++.h>
using namespace std;

vector<int> mergeSortedArrays(vector<int> A, vector<int> B) {
    vector<int> C(A.size() + B.size());
    for (int i = 0; i < A.size(); i++) {
        C[i] = A[i];
    }
    for (int i = 0; i < B.size(); i++) {
        C[A.size() + i] = B[i];
    }
    sort(C.begin(), C.end());
    return C;
}

// tests-start
int main() {
    vector<int> A = {1, 2, 3, 4, 4};
    vector<int> B = {2, 4, 5, 5};
    vector<int> C = mergeSortedArrays(A, B);
    for (int v : C) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 2 2 3 4 4 4 5 5
*/