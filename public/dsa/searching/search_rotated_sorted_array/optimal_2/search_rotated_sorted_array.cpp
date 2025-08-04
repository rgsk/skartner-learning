#include <bits/stdc++.h>
using namespace std;

int getElementIndex(vector<int> &arr, int target) {
    // add your logic here
    int n = arr.size();
    int l = 0;
    int r = n - 1;
    while (l <= r) {
        int m = (l + r) / 2;
        if (arr[m] == target) {
            return m;
        }
        if (target >= arr[0]) {
            // we need to be on left side
            if (arr[m] >= arr[0]) {
                // we are on left side
                // normal binary search
                if (arr[m] > target) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                // we are on right side
                // we need to go to left side
                r = m - 1;
            }
        } else {
            // we need to be on right side
            if (arr[m] < arr[0]) {
                // we are on right side
                // normal binary search
                if (arr[m] > target) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                // we are on left side
                // we need to go to right side
                l = m + 1;
            }
        }
    }
    return -1;
}
int main() {
    vector<int> arr = {4, 5, 6, 7, 1, 2, 3};
    int target = 6;
    int index = getElementIndex(arr, target);
    cout << index << endl;
}

/*output
2
*/