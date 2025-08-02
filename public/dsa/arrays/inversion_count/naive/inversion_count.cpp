#include <bits/stdc++.h>
using namespace std;

int getInversionCount(vector<int> arr) {
    int inversions = 0;
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                inversions++;
            }
        }
    }
    return inversions;
}

// tests-start
int main() {
    vector<int> arr = {8, 4, 1, 2};
    int inversions = getInversionCount(arr);
    cout << inversions << endl;
    return 0;
}
// tests-end

/* output
5
*/