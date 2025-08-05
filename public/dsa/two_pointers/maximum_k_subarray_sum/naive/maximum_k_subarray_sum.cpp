#include <bits/stdc++.h>
using namespace std;

int maxKSubarraySum(vector<int> A, int k) {
    int n = A.size();
    int max_window = 0;
    for (int i = 0; i < n - k + 1; i++) {
        int window = 0;
        for (int j = i; j < i + k; j++) {
            window += A[j];
        }
        max_window = max(max_window, window);
    }
    return max_window;
}

// tests-start
int main() {
    vector<int> A = {3, 5, 6, 2, 4, 7, 8};
    int k = 3;
    cout << maxKSubarraySum(A, k) << endl;
    return 0;
}
// tests-end

/*output
19
*/