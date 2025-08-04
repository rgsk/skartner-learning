#include <bits/stdc++.h>
using namespace std;

int findRotatedIndex(vector<int> &arr) {
    int n = arr.size();
    int l = 0;
    int r = n - 1;
    while (l <= r) {
        int m = (l + r) / 2;
        if (m > 0 && arr[m - 1] > arr[m]) {
            return m - 1;
        } else if (arr[m] >= arr[0]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return -1;
}

int binarySearch(vector<int> &arr, int l, int r, int target) {
    while (l <= r) {
        int m = (l + r) / 2;
        if (arr[m] == target) {
            return m;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return -1;
}

int getElementIndex(vector<int> &arr, int target) {
    // add your logic here
    int n = arr.size();
    int leftEndIndex = findRotatedIndex(arr);
    if (leftEndIndex == -1) {
        return binarySearch(arr, 0, n - 1, target);
    }
    if (target >= arr[0]) {
        return binarySearch(arr, 0, leftEndIndex, target);
    } else {
        return binarySearch(arr, leftEndIndex + 1, n - 1, target);
    }
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