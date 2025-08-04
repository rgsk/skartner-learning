#include <bits/stdc++.h>
using namespace std;

int searchRoot(int num) {
    if (num == 0 || num == 1) {
        return num;
    }
    for (int i = 1; i <= num; i++) {
        int sq = i * i;
        if (sq == num) {
            return i;
        } else if (sq > num) {
            return i - 1;
        }
    }
    return -1;
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