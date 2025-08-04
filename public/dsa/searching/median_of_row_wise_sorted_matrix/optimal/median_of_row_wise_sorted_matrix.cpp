#include <bits/stdc++.h>
using namespace std;

// Function to count the number of elements less than or equal to 'mid'
int countLessEqual(vector<int>& row, int mid) {
    return upper_bound(row.begin(), row.end(), mid) - row.begin();
}

// Function to find the median of a row-wise sorted matrix
int calculateMedianOfMatrix(vector<vector<int>>& matrix) {
    int n = matrix.size();
    int m = matrix[0].size();
    int minElement = matrix[0][0];
    int maxElement = matrix[0][m - 1];

    // Find the minimum and maximum element in the matrix
    for (int i = 1; i < n; i++) {
        minElement = min(minElement, matrix[i][0]);
        maxElement = max(maxElement, matrix[i][m - 1]);
    }

    int left = minElement;
    int right = maxElement;

    int desired = (n * m + 1) / 2;

    // Binary search to find the median
    while (left < right) {
        int mid = (left + right) / 2;
        int place = 0;

        // Count how many elements are less than or equal to 'mid'
        for (int i = 0; i < n; i++) {
            place += countLessEqual(matrix[i], mid);
        }

        if (place < desired) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
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