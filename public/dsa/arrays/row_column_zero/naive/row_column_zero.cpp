
#include <bits/stdc++.h>
using namespace std;

void setRowColumnZeroes(vector<vector<int>> &matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();

    vector<bool> zero_rows(rows, false);
    vector<bool> zero_cols(cols, false);

    // Mark rows and columns that need to be zeroed
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (matrix[i][j] == 0) {
                zero_rows[i] = true;
                zero_cols[j] = true;
            }
        }
    }

    // Set elements to zero if their row or column is marked
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (zero_rows[i] || zero_cols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}

// tests-start
int main() {
    vector<vector<int>> matrix = {
        {1, 1, 1},
        {1, 0, 1},
        {1, 1, 1},
    };
    setRowColumnZeroes(matrix);
    for (auto row : matrix) {
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
1 0 1
0 0 0
1 0 1
*/