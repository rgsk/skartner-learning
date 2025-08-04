#include <bits/stdc++.h>
using namespace std;

bool searchMatrix(vector<vector<int>> &matrix, int key) {
    int rows = matrix.size();
    int cols = matrix[0].size();

    int l = 0;
    int h = rows * cols - 1;

    while (l <= h) {
        int m = (l + h) / 2;
        int v = matrix[m / cols][m % cols];

        if (v == key) {
            return true;
        } else if (v < key) {
            l = m + 1;
        } else {
            h = m - 1;
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