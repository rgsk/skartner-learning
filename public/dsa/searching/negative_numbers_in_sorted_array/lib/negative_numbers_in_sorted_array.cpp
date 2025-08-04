#include <bits/stdc++.h>
using namespace std;

int getNegativeNumbersCount(vector<int> &arr) {
    auto lb = lower_bound(arr.begin(), arr.end(), 0);
    int lbi = lb - arr.begin();
    return lbi;
}

// tests-start
int main() {
    vector<int> arr = {-5, -3, -2, 3, 4, 6, 7, 8};
    int result = getNegativeNumbersCount(arr);
    cout << result << endl;
    return 0;
}
// tests-end

/*output
3
*/