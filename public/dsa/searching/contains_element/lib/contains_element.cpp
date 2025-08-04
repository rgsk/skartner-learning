#include <bits/stdc++.h>
using namespace std;

bool containsElement(vector<int> &arr, int key) {
    auto it = lower_bound(arr.begin(), arr.end(), key);
    return it != arr.end() && *it == key;
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 3, 3, 4, 4, 5};
    int key = 2;

    cout << (containsElement(arr, key) ? "true" : "false") << endl;

    return 0;
}
// tests-end

/*output
true
*/
