#include <bits/stdc++.h>
using namespace std;

vector<int> searchRange(vector<int> &arr, int key) {
    // add your logic here
    auto lb = lower_bound(arr.begin(), arr.end(), key);
    auto ub = upper_bound(arr.begin(), arr.end(), key);
    if (lb == arr.end() || *lb != key) {
        return {-1, -1};
    }
    int lbi = lb - arr.begin();
    int ubi = ub - arr.begin();
    return {lbi, ubi - 1};
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 3, 3, 4, 4, 5};
    int key = 3;
    vector<int> indexes = searchRange(arr, key);
    cout << indexes[0] << " " << indexes[1] << endl;
    return 0;
}
// tests-end

/* output
2 4
*/