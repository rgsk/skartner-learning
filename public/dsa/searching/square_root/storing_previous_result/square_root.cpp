#include <bits/stdc++.h>
using namespace std;

int searchRoot(int num) {
    if (num == 0 || num == 1) {
        return num;
    }
    int low = 1, high = num / 2, ans = 1;
    while (low <= high) {
        long long mid = (low + high) / 2;
        long long sq = mid * mid;
        if (sq <= num) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
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