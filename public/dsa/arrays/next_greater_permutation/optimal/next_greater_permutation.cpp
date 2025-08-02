#include <bits/stdc++.h>
using namespace std;

void nextGreaterPermutation(vector<int> &arr) {
    int n = arr.size();
    int first_drop_index = -1;

    for (int i = n - 1; i > 0; i--) {
        if (arr[i - 1] < arr[i]) {
            first_drop_index = i - 1;
            break;
        }
    }

    if (first_drop_index == -1) {
        reverse(arr.begin(), arr.end());
        return;
    }

    for (int i = n - 1; i > first_drop_index; i--) {
        if (arr[i] > arr[first_drop_index]) {
            swap(arr[i], arr[first_drop_index]);
            break;
        }
    }

    reverse(arr.begin() + first_drop_index + 1, arr.end());
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 4};
    nextGreaterPermutation(arr);

    cout << "[";
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i];
        if (i != arr.size() - 1) cout << ", ";
    }
    cout << "]" << endl;
    return 0;
}
// tests-end

/* output
[1, 2, 4, 3]
*/
