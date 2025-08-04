#include <bits/stdc++.h>
using namespace std;

int findStart(vector<int> &arr, int key) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key && (mid == 0 || key > arr[mid - 1])) {
            return mid;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

int findEnd(vector<int> &arr, int key) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key && (mid == arr.size() - 1 || key < arr[mid + 1])) {
            return mid;
        } else if (arr[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

vector<int> searchRange(vector<int> &arr, int key) {
    return {findStart(arr, key), findEnd(arr, key)};
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 3, 3, 4, 4, 5};
    int key = 3;
    vector<int> indexes = searchRange(arr, key);
    cout << indexes[0] << " " << indexes[1] << endl;
    return 0;
}
// tests-end

/*output
2 4
*/
