#include <bits/stdc++.h>
using namespace std;

int kDiffPairs(vector<int>& A, int k) {
    int n = A.size();
    int l = 0, r = 1, res = 0;

    while (r < n) {
        while (r < n - 1 && A[r] == A[r + 1]) {
            r++;
        }

        int diff = A[r] - A[l];
        if (diff == k) {
            res++;
            l++;
            r++;
        } else if (diff < k) {
            r++;
        } else {
            l++;
        }

        if (l == r) {
            r++;
        }
    }

    return res;
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