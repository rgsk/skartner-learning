
#include <bits/stdc++.h>
using namespace std;

int findNonRepeatingElement(vector<int> &arr) {
    int n = arr.size();
    int low = 0, high = n - 1;
    while (low < high) {
        int mid = (high + low) / 2;
        if (mid % 2 == 0) {
            if (arr[mid] == arr[mid + 1]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        } else {
            if (arr[mid] == arr[mid - 1]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
    }
    return arr[low];
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