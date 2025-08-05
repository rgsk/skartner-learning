#include <bits/stdc++.h>
using namespace std;

int kDiffPairs(vector<int> &A, int k) {
    int n = A.size();
    int result = 0;

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (A[j] - A[i] == k) {
                result++;
            }
        }
    }

    return result;
}

// tests-start
int main() {
    vector<int> A = {1, 3, 5, 7, 10};

    cout << kDiffPairs(A, 2) << endl;
    cout << kDiffPairs(A, 3) << endl;
    cout << kDiffPairs(A, 1) << endl;

    return 0;
}
// tests-end

/*output
3
1
0
*/