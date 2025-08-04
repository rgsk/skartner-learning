#include <bits/stdc++.h>
using namespace std;

int left_binary_search(const vector<int> &arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        int mid = (left + right) / 2;
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

int getNegativeNumbersCount(vector<int> &arr) {
    return left_binary_search(arr, 0);
}

// tests-start
int main() {
    vector<int> arr = {-5, -3, -2, 3, 4, 6, 7, 8};
    int result = getNegativeNumbersCount(arr);
    cout << result << endl;
    return 0;
}
// tests-end

/*output
3
*/