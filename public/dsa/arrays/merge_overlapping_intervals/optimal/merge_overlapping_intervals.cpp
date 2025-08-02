

#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> mergeIntervals(vector<vector<int>> &intervals) {
    if (intervals.empty()) return {};

    sort(intervals.begin(), intervals.end());

    vector<vector<int>> merged;
    merged.push_back(intervals[0]);

    for (int i = 1; i < intervals.size(); i++) {
        if (intervals[i][0] > merged.back()[1]) {
            merged.push_back(intervals[i]);
        } else {
            merged.back()[1] = max(merged.back()[1], intervals[i][1]);
        }
    }
    return merged;
}

// tests-start
int main() {
    vector<vector<int>> intervals = {{1, 2}, {2, 3}, {1, 4}, {5, 6}};
    vector<vector<int>> result = mergeIntervals(intervals);

    // Output
    cout << "[";
    for (int i = 0; i < result.size(); i++) {
        cout << "[" << result[i][0] << ", " << result[i][1] << "]";
        if (i != result.size() - 1) cout << ", ";
    }
    cout << "]" << endl;

    return 0;
}
// tests-end

/*output
[[1, 4], [5, 6]]
*/