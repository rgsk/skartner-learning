#include <bits/stdc++.h>
using namespace std;

bool containsElement(vector<int>& arr, int key) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (arr[mid] == key) {
            return true;
        } else if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
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
