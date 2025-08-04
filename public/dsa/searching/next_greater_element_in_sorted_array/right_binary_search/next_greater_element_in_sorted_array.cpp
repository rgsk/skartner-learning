#include <bits/stdc++.h>
using namespace std;

int right_binary_search(const vector<int> &nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int mid = (left + right + 1) / 2;  // equivalent to ceil((left + right) / 2.0)
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left + 1;
}

int getNextGreaterElement(vector<int> &arr, int key) {
    int r = right_binary_search(arr, key);
    if (r == arr.size()) {
        return key;
    }
    return arr[r];
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 3, 4, 4, 8, 10};
    int key = 4;
    cout << getNextGreaterElement(arr, key) << endl;
    return 0;
}
// tests-end

/*output
8
*/
