#include <bits/stdc++.h>
using namespace std;

class Solution {
   public:
    bool containsElement(vector<int> &arr, int key) {
        int n = arr.size();
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                return true;
            }
        }
        return false;
    }
};

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 3, 3, 4, 4, 5};
    int key = 2;

    Solution sol;
    cout << (sol.containsElement(arr, key) ? "true" : "false") << endl;

    return 0;
}
// tests-end

/*output
true
*/
