#include <bits/stdc++.h>
using namespace std;

int volumeOfTrappedRainWater(vector<int> &heights) {
    int n = heights.size();
    int totalRainWater = 0;
    for (int i = 0; i < n; i++) {
        int maxOnLeft = 0, maxOnRight = 0;
        for (int j = 0; j <= i; j++) {
            maxOnLeft = max(maxOnLeft, heights[j]);
        }
        for (int j = i; j < n; j++) {
            maxOnRight = max(maxOnRight, heights[j]);
        }
        int minOfLeftAndRight = min(maxOnLeft, maxOnRight);
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