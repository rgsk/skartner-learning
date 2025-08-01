// imports-start
#include <bits/stdc++.h>
using namespace std;
// imports-end

int getDigitCount(int n) {
    int count = 0;
    if (n == 0) {
        return 1;
    }
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}
vector<int> getEvenDigitNumbers(vector<int> &arr) {
    // add your logic here
    vector<int> result;
    for (int v : arr) {
        if (getDigitCount(v) % 2 == 0) {
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