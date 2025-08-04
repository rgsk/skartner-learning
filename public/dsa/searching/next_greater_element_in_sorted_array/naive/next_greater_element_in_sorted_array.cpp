#include <bits/stdc++.h>
using namespace std;

int getNextGreaterElement(vector<int> &arr, int key) {
    int n = arr.size();
    if (arr[n - 1] <= key) {
        return key;
    }
    for (int i = 0; i < n; i++) {
        if (arr[i] > key) {
            return arr[i];
        }
    }
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
