
#include <bits/stdc++.h>
using namespace std;

vector<int> getCumulativeSum(vector<int> &arr) {
    int n = arr.size();
    vector<int> result(n);
    result[0] = arr[0];
    for (int i = 1; i < n; i++) {
        result[i] = result[i - 1] + arr[i];
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