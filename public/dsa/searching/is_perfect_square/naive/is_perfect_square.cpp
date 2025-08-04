#include <bits/stdc++.h>
using namespace std;

bool isPerfectSquare(int num) {
    for (int v = 1; v <= num; v++) {
        int sq = v * v;
        if (sq == num) {
            return true;
        } else if (sq > num) {
            return false;
        }
    }
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