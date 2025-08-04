#include <bits/stdc++.h>
using namespace std;

bool isPerfectSquare(int num) {
    if (num == 1) {
        return true;
    }
    int l = 1;
    int r = num / 2;
    while (l <= r) {
        long long mid = (l + r) / 2;
        long long sq = mid * mid;
        if (sq == num) {
            return true;
        } else if (sq < num) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
}

// tests-start
int main() {
    cout << (isPerfectSquare(25) ? "true" : "false") << endl;
    cout << (isPerfectSquare(30) ? "true" : "false") << endl;
    return 0;
}

// tests-end

/*output
true
false
*/