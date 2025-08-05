#include <bits/stdc++.h>
using namespace std;

void sortTheArray(vector<int> &A) {
    sort(A.begin(), A.end());
}

// tests-start
int main() {
    vector<int> A = {2, 2, 0, 1};
    sortTheArray(A);
    for (int v : A) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
0 1 2 2
*/