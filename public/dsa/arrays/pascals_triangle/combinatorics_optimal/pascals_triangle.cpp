
#include <bits/stdc++.h>
using namespace std;

vector<int> pascalTriangleRow(int rowNo) {
    int n = rowNo - 1;
    vector<int> pascalRow(n + 1);
    pascalRow[0] = 1;
    for (int k = 1; k <= n; k++) {
        pascalRow[k] = pascalRow[k - 1] * (n - k + 1) / k;
    }
    return pascalRow;
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