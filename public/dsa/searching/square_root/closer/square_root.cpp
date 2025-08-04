#include <bits/stdc++.h>
using namespace std;

int searchRoot(int num) {
    if (num == 0 || num == 1) {
        return num;
    }
    int l = 0;
    int r = num / 2;
    while (l < r) {
        int m = ceil((l + r) / 2.0);
        long long sq = 1LL * m * m;  // avoid overflow
        if (sq > num) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    return l;
}

// tests-start
int main() {
    cout << searchRoot(16) << endl;
    cout << searchRoot(12) << endl;
}
// tests-end

/*output
4
3
*/