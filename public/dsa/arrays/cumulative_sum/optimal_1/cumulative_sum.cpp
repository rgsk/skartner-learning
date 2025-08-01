// imports-start
#include <bits/stdc++.h>
using namespace std;
// imports-end

vector<int> getCumulativeSum(vector<int> &arr) {
    int n = arr.size();
    vector<int> result(n);
    int prefixSum = 0;
    for (int i = 0; i < n; i++) {
        prefixSum += arr[i];
        result[i] = prefixSum;
    }
    return result;
}

// tests-start
int main() {
    vector<int> nums = {1, 2, 3, 4};
    auto result = getCumulativeSum(nums);
    for (int v : result) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 3 6 10
*/