#include <bits/stdc++.h>
using namespace std;

int calculateMedianOfMatrix(vector<vector<int>> &matrix) {
    vector<int> arr;
    int rowSize = matrix.size(), columnSize = matrix[0].size();
    for (int i = 0; i < rowSize; i++) {
        for (int j = 0; j < columnSize; j++) {
            arr.push_back(matrix[i][j]);
        }
    }
    sort(arr.begin(), arr.end());
    int medianIndx = (arr.size() / 2);
    return arr[medianIndx];
}

// tests-start
int main() {
    vector<vector<int>> matrix = {
        {1, 2, 3},
        {3, 3, 4},
        {1, 1, 2},
    };
    cout << calculateMedianOfMatrix(matrix) << endl;
    return 0;
}
// tests-end

/*output
2
*/