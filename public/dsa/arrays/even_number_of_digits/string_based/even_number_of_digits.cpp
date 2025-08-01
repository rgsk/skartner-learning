// imports-start
#include <bits/stdc++.h>
using namespace std;
// imports-end

vector<int> getEvenDigitNumbers(vector<int> &arr) {
    vector<int> result;
    for (int v : arr) {
        int digits_count = to_string(v).length();
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