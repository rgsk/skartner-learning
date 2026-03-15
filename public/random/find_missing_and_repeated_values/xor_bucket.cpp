#include <bits/stdc++.h>
using namespace std;

class Solution {
   public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        int n = grid.size();
        int total = n * n;
        int xr = 0;

        for (const auto& row : grid) {
            for (int x : row) {
                xr ^= x;
            }
        }

        for (int value = 1; value <= total; ++value) {
            xr ^= value;
        }

        int rightmost_set_bit = xr & -xr;
        int bucket1 = 0, bucket2 = 0;

        for (const auto& row : grid) {
            for (int x : row) {
                if (x & rightmost_set_bit) {
                    bucket1 ^= x;
                } else {
                    bucket2 ^= x;
                }
            }
        }

        for (int value = 1; value <= total; ++value) {
            if (value & rightmost_set_bit) {
                bucket1 ^= value;
            } else {
                bucket2 ^= value;
            }
        }

        for (const auto& row : grid) {
            for (int x : row) {
                if (x == bucket1) {
                    return {bucket1, bucket2};
                }
            }
        }

        return {bucket2, bucket1};
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