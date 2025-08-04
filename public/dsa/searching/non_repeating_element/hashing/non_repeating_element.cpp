
#include <bits/stdc++.h>
using namespace std;

int findNonRepeatingElement(vector<int> &arr) {
    unordered_map<int, int> mp;
    for (int v : arr) {
        mp[v]++;
    }
    for (auto [k, v] : mp) {
        if (v == 1) {
            return k;
        }
    }
    return -1;
}

// tests-start
int main() {
    vector<int> arr = {1, 1, 2, 3, 3, 4, 4};
    cout << findNonRepeatingElement(arr) << endl;
    return 0;
}
// tests-end

/*output
2
*/