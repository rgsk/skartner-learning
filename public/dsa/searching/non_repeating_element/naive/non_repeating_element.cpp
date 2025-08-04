
#include <bits/stdc++.h>
using namespace std;

int findNonRepeatingElement(vector<int> &arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i += 2) {
        if (arr[i] != arr[i + 1]) {
            return arr[i];
        }
    }
    return arr[n - 1];
}

// tests-start
int main() {
    vector<int> arr = {1, 1, 2, 3, 3, 4, 4};
    cout << findNonRepeatingElement(arr) << endl;
    return 0;
}
// tests-end

/*output
2
*/