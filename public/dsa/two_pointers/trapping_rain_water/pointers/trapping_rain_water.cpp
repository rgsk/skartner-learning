#include <bits/stdc++.h>
using namespace std;

int volumeOfTrappedRainWater(vector<int>& heights) {
    int left = 0;
    int right = heights.size() - 1;
    int leftMax = 0;
    int rightMax = 0;
    int water = 0;

    while (left < right) {
        leftMax = max(leftMax, heights[left]);
        rightMax = max(rightMax, heights[right]);

        if (leftMax < rightMax) {
            water += leftMax - heights[left];
            left++;
        } else {
            water += rightMax - heights[right];
            right--;
        }
    }

    return water;
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