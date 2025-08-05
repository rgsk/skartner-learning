#include <bits/stdc++.h>
using namespace std;

bool hasTwoSumZero(vector<int> A) {
    int n = A.size();
    int left = 0, right = n - 1;
    while (left < right) {
        if (A[left] + A[right] == 0) {
            return true;
        } else if (A[left] + A[right] < 0) {
            left++;
        } else {
            right--;
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