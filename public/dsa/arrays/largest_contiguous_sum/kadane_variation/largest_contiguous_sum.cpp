#include <bits/stdc++.h>
using namespace std;

int largestContiguousSum(vector<int> &arr) {
    int cur_sum = arr[0];
    int max_sum = cur_sum;

    for (int i = 1; i < arr.size(); i++) {
        if (cur_sum < 0) {
            cur_sum = 0;
        }
        cur_sum += arr[i];
        max_sum = max(max_sum, cur_sum);
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