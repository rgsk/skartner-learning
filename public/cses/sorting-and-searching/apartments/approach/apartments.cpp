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

    int n, m, k;
    cin >> n >> m >> k;
    vector<int> a(n), b(m);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    int i = 0;
    int j = 0;
    int ans = 0;
    while (i < n && j < m) {
        if (abs(a[i] - b[j]) <= k) {
            ans += 1;
            i += 1;
            j += 1;
        } else {
            if (a[i] > b[j]) {
                j += 1;
            } else {
                i += 1;
            }
        }
    }
    cout << ans << endl;
}