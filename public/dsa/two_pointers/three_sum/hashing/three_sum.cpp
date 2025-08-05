#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    int n = nums.size();
    set<vector<int>> result;

    for (int i = 0; i < n; i++) {
        int target = -nums[i];
        unordered_set<int> seen;

        for (int j = i + 1; j < n; j++) {
            int complement = target - nums[j];
            if (seen.count(complement)) {
                vector<int> triplet = {nums[i], nums[j], complement};
                sort(triplet.begin(), triplet.end());
                result.insert(triplet);
            }
            seen.insert(nums[j]);
        }
    }

    return vector<vector<int>>(result.begin(), result.end());
}

// tests-start

int main() {
    vector<int> A = {1, 1, 0, -1, -2};
    vector<vector<int>> result = threeSum(A);

    for (const auto& triplet : result) {
        cout << "[";
        for (int i = 0; i < triplet.size(); ++i) {
            cout << triplet[i];
            if (i < triplet.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }

    return 0;
}

// tests-end

/*output
[-2, 1, 1]
[-1, 0, 1]
*/