#include <bits/stdc++.h>
using namespace std;

int getInsertPosition(vector<int> &arr, int key) {
    return lower_bound(arr.begin(), arr.end(), key) - arr.begin();
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 5};
    int key = 4;
    cout << getInsertPosition(arr, key) << endl;
    return 0;
}
// tests-end

/*output
3
*/