// imports-start
#include <bits/stdc++.h>
using namespace std;
// imports-end

vector<int> getPositiveCumulativeSum(vector<int> &arr) {
    int cumulative_sum = 0;
    vector<int> result;
    for (int v : arr) {
        cumulative_sum += v;
        if (cumulative_sum > 0) {
            result.push_back(cumulative_sum);
        }
    }
    return result;
}

// tests-start
int main() {
    vector<int> nums = {1, 2, 3, 4};
    auto result = getPositiveCumulativeSum(nums);
    for (int v : result) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 2 6
*/