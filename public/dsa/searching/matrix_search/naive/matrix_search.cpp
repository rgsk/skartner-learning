#include <bits/stdc++.h>
using namespace std;

bool searchMatrix(vector<vector<int>> &matrix, int key) {
    int rowSize = matrix.size(), columnSize = matrix[0].size();
    for (int i = 0; i < rowSize; i++) {
        for (int j = 0; j < columnSize; j++) {
            if (matrix[i][j] == key) {
                return true;
            }
        }
    }
    return false;
}

// tests-start
int main() {
    vector<vector<int>> matrix1 = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    };

    vector<vector<int>> matrix2 = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
        {10, 11, 12},
    };

    cout << boolalpha << searchMatrix(matrix1, 6) << endl;
    cout << boolalpha << searchMatrix(matrix2, 15) << endl;

    return 0;
}

// tests-end

/*output
true
false
*/