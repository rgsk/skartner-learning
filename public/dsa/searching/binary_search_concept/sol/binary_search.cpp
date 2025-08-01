
#include <bits/stdc++.h>
using namespace std;

class Solution {
   public:
    int search(const vector<int>& nums, int target) {
        int lo = 0;
        int hi = nums.size() - 1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] > target)
                hi = mid - 1;
            else
                lo = mid + 1;
        }
        return -1;
    }
};

// tests-start
int main() {
    vector<int> nums = {1, 3, 5, 9, 12};
    int target = 9;

    Solution sol;
    cout << sol.search(nums, target) << endl;

    return 0;
}
// tests-end

/*output
3
*/