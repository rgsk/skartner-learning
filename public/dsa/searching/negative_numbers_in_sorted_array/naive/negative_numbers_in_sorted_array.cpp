#include <bits/stdc++.h>
using namespace std;

int getNegativeNumbersCount(vector<int> &arr) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] >= 0) {
            return i;
        }
    }
    return -1;
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