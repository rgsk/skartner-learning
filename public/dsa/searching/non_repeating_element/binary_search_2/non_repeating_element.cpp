
#include <bits/stdc++.h>
using namespace std;

int findNonRepeatingElement(vector<int> &arr) {
    int n = arr.size();
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (high + low) / 2;
        if (mid % 2 == 0) {
            if (mid + 1 < n && arr[mid] == arr[mid + 1]) {
                low = mid + 1;
            } else if (mid - 1 >= 0 && arr[mid] == arr[mid - 1]) {
                high = mid - 1;
            } else {
                return arr[mid];
            }
        } else {
            if (mid - 1 >= 0 && arr[mid] == arr[mid - 1]) {
                low = mid + 1;
            } else if (mid + 1 < n && arr[mid == arr[mid + 1]]) {
                high = mid - 1;
            } else {
                return arr[mid];
            }
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