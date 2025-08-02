#include <bits/stdc++.h>
using namespace std;

int largestContiguousSum(vector<int> &arr) {
    int max_so_far = arr[0];
    int max_ending_here = arr[0];

    for (int i = 1; i < arr.size(); i++) {
        max_ending_here = max(arr[i], max_ending_here + arr[i]);
        max_so_far = max(max_so_far, max_ending_here);
    }
    return max_so_far;
}

// tests-start
int main() {
    vector<int> arr = {4, -6, 2, 5};
    cout << largestContiguousSum(arr) << endl;
    return 0;
}
// tests-end

/*output
7
*/