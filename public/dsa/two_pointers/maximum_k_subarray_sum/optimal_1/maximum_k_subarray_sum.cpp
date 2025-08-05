#include <bits/stdc++.h>
using namespace std;

int maxKSubarraySum(vector<int> A, int k) {
    int n = A.size();
    int max_window = 0;
    int window = 0;
    for (int i = 0; i < k; i++) {
        window += A[i];
    }
    max_window = max(window, max_window);
    for (int i = k; i < n; i++) {
        window -= A[i - k];
        window += A[i];
        max_window = max(window, max_window);
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