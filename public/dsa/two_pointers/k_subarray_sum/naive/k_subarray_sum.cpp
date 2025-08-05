#include <bits/stdc++.h>
using namespace std;

vector<int> kSubarraySum(vector<int> &A, int k) {
    int n = A.size();
    vector<int> result;
    for (int i = 0; i < n - k + 1; i++) {
        int sub_array_sum = 0;
        for (int j = i; j < i + k; j++) {
            sub_array_sum += A[j];
        }
        result.push_back(sub_array_sum);
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