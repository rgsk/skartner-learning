
#include <bits/stdc++.h>
using namespace std;

void setRowColumnZeroes(vector<vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();

    bool first_row_zero = false;
    bool first_col_zero = false;

    // Check if first row has any zero
    for (int j = 0; j < cols; j++) {
        if (matrix[0][j] == 0) {
            first_row_zero = true;
            break;
        }
    }

    // Check if first column has any zero
    for (int i = 0; i < rows; i++) {
        if (matrix[i][0] == 0) {
            first_col_zero = true;
            break;
        }
    }

    // Use first row & column as markers
    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < cols; j++) {
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    // Set zeroes based on markers
    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < cols; j++) {
            if (matrix[0][j] == 0 || matrix[i][0] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out first row if needed
    if (first_row_zero) {
        for (int j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero out first column if needed
    if (first_col_zero) {
        for (int i = 0; i < rows; i++) {
            matrix[i][0] = 0;
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