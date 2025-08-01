#include <bits/stdc++.h>
using namespace std;

vector<int> getEvenDigitNumbers(vector<int> &arr) {
    // add your logic here
    vector<int> result;
    for (int v : arr) {
        int digits_count = v == 0 ? 1 : (int)log10(v) + 1;
        if (digits_count % 2 == 0) {
            result.push_back(v);
        }
    }
    return result;
}

// tests-start
int main() {
    vector<int> arr = {42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442};
    auto result = getEvenDigitNumbers(arr);
    for (int v : result) {
        cout << v << " ";
    }
    return 0;
}
// tests-end

/*output
42 5775 34 45 3556
*/