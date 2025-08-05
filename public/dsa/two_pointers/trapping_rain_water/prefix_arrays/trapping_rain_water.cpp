#include <bits/stdc++.h>
using namespace std;

int volumeOfTrappedRainWater(vector<int> &heights) {
    int n = heights.size();

    vector<int> maxOnLefts(n);
    vector<int> maxOnRights(n);

    maxOnLefts[0] = heights[0];
    for (int i = 1; i < n; i++) {
        maxOnLefts[i] = max(maxOnLefts[i - 1], heights[i]);
    }

    maxOnRights[n - 1] = heights[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        maxOnRights[i] = max(maxOnRights[i + 1], heights[i]);
    }

    int totalRainWater = 0;
    for (int i = 0; i < n; i++) {
        int minOfLeftAndRight = min(maxOnLefts[i], maxOnRights[i]);
        int waterForThisBlock = minOfLeftAndRight - heights[i];
        totalRainWater += waterForThisBlock;
    }

    return totalRainWater;
}

// tests-start
int main() {
    vector<int> heights = {1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    int totalRainWater = volumeOfTrappedRainWater(heights);
    cout << totalRainWater << endl;
    return 0;
}
// tests-end

/*output
6
*/