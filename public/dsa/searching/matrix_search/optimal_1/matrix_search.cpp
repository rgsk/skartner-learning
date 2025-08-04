#include <bits/stdc++.h>
using namespace std;

bool searchMatrix(vector<vector<int>> &matrix, int key) {
    int rowSize = matrix.size(), columnSize = matrix[0].size();
    int low = 0, high = rowSize - 1, mid, row = -1;
    while (low <= high) {
        mid = (high + low) / 2;
        if (matrix[mid][0] <= key && matrix[mid][columnSize - 1] >= key) {
            row = mid;
            break;
        } else if (matrix[mid][0] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    if (row == -1) {
        return false;
    } else {
        low = 0;
        high = columnSize - 1;
        while (low <= high) {
            mid = (high + low) / 2;
            if (matrix[row][mid] == key) {
                return true;
            } else if (matrix[row][mid] < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return false;
    }
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