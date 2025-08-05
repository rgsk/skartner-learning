#include <bits/stdc++.h>
using namespace std;

vector<int> intersection(vector<int> &A, vector<int> &B) {
    vector<int> result;
    int i = 0, j = 0;

    while (i < A.size() && j < B.size()) {
        if (A[i] < B[j]) {
            i++;
        } else if (B[j] < A[i]) {
            j++;
        } else {
            result.push_back(A[i]);
            i++;
            j++;
        }
    }

    return result;
}

// tests-start

int main() {
    vector<int> A = {1, 3, 4, 5, 5, 6, 6, 7};
    vector<int> B = {2, 5, 6, 6, 7, 8};
    auto result = intersection(A, B);
    for (int v : result) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}

// tests-end

/*output
5 6 6 7
*/