#include <bits/stdc++.h>
using namespace std;

int largestContiguousSum(vector<int> &arr) {
    int n = arr.size();
    int max_sum = arr[0];
    for (int i = 0; i < n; i++) {
        int subarray_sum = 0;
        for (int j = i; j < n; j++) {
            subarray_sum += arr[j];
            max_sum = max(max_sum, subarray_sum);
        }
    }
    return max_sum;
}

// tests-start
int main() {
    vector<int> arr = {4, -6, 2, 5};
    cout << largestContiguousSum(arr) << endl;
    return 0;
}
// tests-end

/*output
7
*/