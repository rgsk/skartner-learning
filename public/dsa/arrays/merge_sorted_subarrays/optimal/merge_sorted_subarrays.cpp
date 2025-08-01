
#include <bits/stdc++.h>
using namespace std;

void merge(vector<int> &arr, int endIndex) {
    // add your logic here
    vector<int> ans(arr.size());
    int i = 0;
    int j = endIndex + 1;
    int k = 0;
    while (i <= endIndex && j < arr.size()) {
        if (arr[i] < arr[j]) {
            ans[k++] = arr[i++];
        } else {
            ans[k++] = arr[j++];
        }
    }
    while (i <= endIndex) {
        ans[k++] = arr[i++];
    }
    while (j < arr.size()) {
        ans[k++] = arr[j++];
    }
    for (int i = 0; i < arr.size(); i++) {
        arr[i] = ans[i];
    }
}

// tests-start
int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11, 0, 4, 6, 8};
    int endIndex = 5;
    merge(arr, endIndex);
    for (int v : arr) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
0 1 3 4 5 6 7 8 9 11
*/