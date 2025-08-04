#include <bits/stdc++.h>
using namespace std;

vector<int> searchRange(vector<int> &arr, int key) {
    int first = -1, last = -1;
    for (int i = 0; i < arr.size(); i++) {
        if (first == -1 && key == arr[i]) {
            first = i;
        }
        if (key == arr[i]) {
            last = i;
        }
    }
    vector<int> indexes = {first, last};
    return indexes;
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

/* output
2 4
*/