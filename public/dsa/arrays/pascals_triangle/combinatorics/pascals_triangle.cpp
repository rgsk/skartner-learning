
#include <bits/stdc++.h>
using namespace std;

vector<int> pascalTriangleRow(int rowNo) {
    int n = rowNo - 1;
    vector<int> row;
    for (int r = 0; r <= n; r++) {
        // Compute nCr
        int comb = 1;
        for (int i = 0; i < r; i++) {
            comb = comb * (n - i) / (i + 1);
        }
        row.push_back(comb);
    }
    return row;
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