
#include <bits/stdc++.h>
using namespace std;

vector<int> pascalTriangleRow(int rowNo) {
    vector<int> currentRow, prevRow;
    currentRow.push_back(1);
    if (rowNo == 1) {
        return currentRow;
    }
    prevRow = pascalTriangleRow(rowNo - 1);
    for (int i = 1; i < prevRow.size(); i++) {
        currentRow.push_back(prevRow[i - 1] + prevRow[i]);
    }
    currentRow.push_back(1);
    return currentRow;
}

// tests-start
int main() {
    int rowNo = 5;
    auto row = pascalTriangleRow(rowNo);
    for (int v : row) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 4 6 4 1
*/