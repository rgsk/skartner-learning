
#include <bits/stdc++.h>
using namespace std;

vector<int> getSquareSortedArray(vector<int> &arr) {
    for (int i = 0; i < arr.size(); i++) {
        arr[i] *= arr[i];
    }
    sort(arr.begin(), arr.end());
    return arr;
}

// tests-start
int main() {
    vector<int> arr = {6, -8, 3, -1, 4};
    auto result = getSquareSortedArray(arr);
    for (int v : result) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 9 16 36 64
*/