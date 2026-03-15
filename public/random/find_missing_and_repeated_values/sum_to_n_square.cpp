#include <bits/stdc++.h>
using namespace std;

class Solution {
   public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        int n = grid.size();
        long long total = 1LL * n * n;
        long long expected_sum = total * (total + 1) / 2;
        long long expected_sq_sum = total * (total + 1) * (2 * total + 1) / 6;
        long long actual_sum = 0;
        long long actual_sq_sum = 0;

        for (const auto& row : grid) {
            for (int x : row) {
                actual_sum += x;
                actual_sq_sum += 1LL * x * x;
            }
        }

        long long diff = actual_sum - expected_sum;
        long long sq_diff = actual_sq_sum - expected_sq_sum;
        long long sum = sq_diff / diff;

        long long repeated = (diff + sum) / 2;
        long long missing = repeated - diff;

        return {(int)repeated, (int)missing};
    }
};

// tests-start
int main() {
    vector<vector<int>> grid = {
        {1, 3},
        {2, 2},
    };
    Solution sol;
    auto res = sol.findMissingAndRepeatedValues(grid);
    cout << res[0] << " " << res[1] << endl;
    return 0;
}
// tests-end

/*output
2 4
*/