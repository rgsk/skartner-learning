
#include <bits/stdc++.h>
using namespace std;

int findNonRepeatingElement(vector<int> &arr) {
    int xor_value = 0;
    for (int v : arr) {
        xor_value ^= v;
    }
    return xor_value;
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