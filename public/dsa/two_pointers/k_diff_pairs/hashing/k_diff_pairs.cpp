#include <bits/stdc++.h>
using namespace std;

int kDiffPairs(vector<int> &A, int k) {
    int n = A.size();
    int result = 0;
    unordered_map<int, int> hash;
    for (int i = 0; i < n; i++) {
        if (k == 0) {
            if (hash[A[i]] == 1) {
                result += 1;
            }
        } else {
            if (hash[A[i] - k] != 0 && hash[A[i]] == 0) {
                result += 1;
            }
        }
        hash[A[i]]++;
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