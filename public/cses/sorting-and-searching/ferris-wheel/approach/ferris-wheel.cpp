#include <bits/stdc++.h>
using namespace std;

int main() {
    // setup
    // setup-start
#ifndef ONLINE_JUDGE
    freopen("../test_cases/1/input.txt", "r", stdin);
    freopen("../test_cases/1/output.txt", "w", stdout);
#endif
    // setup-end

    int n, x;
    cin >> n >> x;
    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> p[i];
    }
    sort(p.begin(), p.end());
    int l = 0;
    int r = n - 1;
    int ans = 0;
    while (l <= r) {
        if (p[l] + p[r] <= x) {
            ans += 1;
            l += 1;
            r -= 1;
        } else {
            r -= 1;
            ans += 1;
        }
    }
    cout << ans << endl;
}