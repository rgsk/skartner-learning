#include <bits/stdc++.h>
using namespace std;

int main() {
    // setup
    // setup-start
#ifndef ONLINE_JUDGE
    freopen("../input.txt", "r", stdin);
    freopen("../output.txt", "w", stdout);
#endif
    // setup-end

    int n;
    cin >> n;

    long long total = 0;
    for (int i = 0; i < n - 1; i++) {
        int v;
        cin >> v;
        total += v;
    }
    long long sum_upto_n = (1LL * n * (n + 1)) / 2;

    int res = sum_upto_n - total;
    cout << res << endl;
}