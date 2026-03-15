#include <bits/stdc++.h>
using namespace std;

class Solution {
   public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        int n = grid.size();
        vector<int> freq(n * n + 1);

        for (const auto& row : grid) {
            for (int x : row) {
                ++freq[x];
            }
        }

        int repeated = -1, missing = -1;
        for (int value = 1; value <= n * n; ++value) {
            if (freq[value] == 2) {
                repeated = value;
            } else if (freq[value] == 0) {
                missing = value;
            }
        }

        return {repeated, missing};
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