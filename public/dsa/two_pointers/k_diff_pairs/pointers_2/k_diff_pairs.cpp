#include <bits/stdc++.h>
using namespace std;

int kDiffPairs(vector<int>& A, int k) {
    int n = A.size();
    int l = 0, r = 0;
    int result = 0;

    while (r < n) {
        int diff = A[r] - A[l];

        if (diff == k && l != r) {
            result++;
            while (r + 1 < n && A[r] == A[r + 1]) {
                r++;
            }
            l++;
            r++;
        } else if (diff <= k) {
            r++;
        } else {
            l++;
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