
#include <bits/stdc++.h>
using namespace std;

bool isArithmeticSequence(vector<int> &arr) {
    int n = arr.size();
    if (n == 1) {
        return true;
    }
    sort(arr.begin(), arr.end());
    int commonDiff = arr[1] - arr[0];
    for (int i = 2; i < n; i++) {
        if (arr[i] - arr[i - 1] != commonDiff) {
            return false;
        }
    }
    return true;
}

// tests-start
int main() {
    vector<int> arr = {9, 13, 5, 15, 7, 11};
    bool res = isArithmeticSequence(arr);
    cout << res << endl;
    return 0;
}
// tests-end

/*output
1
*/