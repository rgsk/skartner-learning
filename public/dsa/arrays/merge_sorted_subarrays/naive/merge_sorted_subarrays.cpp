
#include <bits/stdc++.h>
using namespace std;

void merge(vector<int> &arr, int endIndex) {
    // add your logic here
    sort(arr.begin(), arr.end());
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