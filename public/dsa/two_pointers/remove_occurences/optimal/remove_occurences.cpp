#include <bits/stdc++.h>
using namespace std;

int removeOccurences(vector<int> A, int k) {
    int n = A.size();
    int j = 0;
    for (int i = 0; i < n; i++) {
        if (A[i] != k) {
            A[j] = A[i];
            j++;
        }
    }
    return j;
}

// tests-start

int main() {
    vector<int> A = {1, 4, 2, 6, 2, 6, 9, 4};
    int k = 4;
    cout << removeOccurences(A, k) << endl;
    return 0;
}

// tests-end

/*output
6
*/