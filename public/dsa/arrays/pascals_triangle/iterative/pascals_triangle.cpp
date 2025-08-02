
#include <bits/stdc++.h>
using namespace std;

vector<int> pascalTriangleRow(int rowNo) {
    vector<int> result;
    result.push_back(1);
    for (int i = 2; i <= rowNo; i++) {
        auto prev = result;
        for (int j = 1; j < prev.size(); j++) {
            result[j] = prev[j - 1] + prev[j];
        }
        result.push_back(1);
    }
    return result;
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