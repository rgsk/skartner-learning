#include <bits/stdc++.h>
using namespace std;

int getNextGreaterElement(vector<int> &arr, int key) {
    // add your logic here
    int n = arr.size();
    if (key >= arr[n - 1]) {
        return key;
    }
    int l = 0;
    int r = n - 1;
    int i = -1;
    while (l <= r) {
        int m = (l + r) / 2;
        if (arr[m] <= key) {
            l = m + 1;
        } else {
            i = m;
            r = m - 1;
        }
    }
    return arr[i];
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
