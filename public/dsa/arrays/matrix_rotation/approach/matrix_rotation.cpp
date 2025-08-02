
#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> rotateMatrix(vector<vector<int>> &matrix) {
    int numRows = matrix.size();
    int numCols = matrix[0].size();
    vector<vector<int>> rotatedMatrix(numCols, vector<int>(numRows));
    for (int i = 0; i < numRows; i++) {
        for (int j = 0; j < numCols; j++) {
            rotatedMatrix[j][i] = matrix[i][j];
        }
    }
    for (auto &x : rotatedMatrix) {
        reverse(x.begin(), x.end());
    }
    return rotatedMatrix;
}

// tests-start
int main() {
    vector<vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    };
    auto rotated = rotateMatrix(matrix);
    for (auto row : rotated) {
        for (auto v : row) {
            cout << v << " ";
        }
        cout << endl;
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
7 4 1
8 5 2
9 6 3
*/