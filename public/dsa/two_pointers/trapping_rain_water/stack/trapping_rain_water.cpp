#include <bits/stdc++.h>
using namespace std;

int volumeOfTrappedRainWater(vector<int>& heights) {
    stack<int> st;
    int water = 0;
    int i = 0;
    int n = heights.size();

    while (i < n) {
        // While current bar is higher than bar at top of stack
        while (!st.empty() && heights[i] > heights[st.top()]) {
            int top = st.top();
            st.pop();

            if (st.empty()) break;  // No left boundary

            int distance = i - st.top() - 1;
            int bounded_height = min(heights[i], heights[st.top()]) - heights[top];
            water += distance * bounded_height;
        }

        st.push(i);
        i++;
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