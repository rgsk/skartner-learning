#include <bits/stdc++.h>
using namespace std;

bool hasTwoSumZero(vector<int> A) {
    int n = A.size();
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (A[i] + A[j] == 0) {
                return true;
            }
        }
    }
    return false;
}

// tests-start

int main() {
    vector<int> A = {-3, 1, 3, 4};
    vector<int> B = {-2, 1, 3, 4};
    cout << boolalpha << hasTwoSumZero(A) << endl;
    cout << boolalpha << hasTwoSumZero(B) << endl;
    return 0;
}

// tests-end

/*output
true
false
*/