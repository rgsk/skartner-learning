#include <bits/stdc++.h>
using namespace std;

vector<int> kSubarraySum(vector<int> &A, int k) {
    int n = A.size();
    vector<int> result;
    int window_sum = 0;
    for (int i = 0; i < k; i++) {
        window_sum += A[i];
    }

    result.push_back(window_sum);

    for (int i = k; i < n; i++) {
        window_sum -= A[i - k];
        window_sum += A[i];
        result.push_back(window_sum);
    }

    return result;
}

// tests-start
int main() {
    vector<int> A = {3, 5, 6, 2, 4, 7, 8};
    int k = 3;
    auto result = kSubarraySum(A, k);
    for (int v : result) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
14 13 12 13 19
*/