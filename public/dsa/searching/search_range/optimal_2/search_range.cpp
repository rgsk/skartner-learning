#include <bits/stdc++.h>
using namespace std;

int findStart(vector<int> &arr, int key) {
    int low = 0, high = arr.size() - 1, ans = -1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) {
            ans = mid;
            high = mid - 1;  // keep searching in the left half
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

int findEnd(vector<int> &arr, int key) {
    int low = 0, high = arr.size() - 1, ans = -1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) {
            ans = mid;
            low = mid + 1;  // keep searching in the right half
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
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
