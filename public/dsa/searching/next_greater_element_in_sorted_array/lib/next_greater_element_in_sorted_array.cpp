#include <bits/stdc++.h>
using namespace std;

int getNextGreaterElement(vector<int> &arr, int key) {
    auto it = upper_bound(arr.begin(), arr.end(), key);
    if (it == arr.end()) {
        return key;
    }
    return *it;
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 3, 4, 4, 8, 10};
    int key = 4;
    cout << getNextGreaterElement(arr, key) << endl;
    return 0;
}
// tests-end

/*output
8
*/
