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
    return left;
}

int getInsertPosition(vector<int> &arr, int key) {
    return left_binary_search(arr, key);
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 5};
    int key = 4;
    cout << getInsertPosition(arr, key) << endl;
    return 0;
}
// tests-end

/*output
3
*/