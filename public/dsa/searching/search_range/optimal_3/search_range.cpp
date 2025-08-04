#include <bits/stdc++.h>
using namespace std;

int left_binary_search(const vector<int> &nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int mid = (left + right) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return (nums[left] == target) ? left : -1;
}

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
    return (nums[left] == target) ? left : -1;
}

vector<int> searchRange(const vector<int> &arr, int key) {
    int l = left_binary_search(arr, key);
    if (l == -1) return {-1, -1};
    int r = right_binary_search(arr, key);
    return {l, r};
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

/*output
2 4
*/
