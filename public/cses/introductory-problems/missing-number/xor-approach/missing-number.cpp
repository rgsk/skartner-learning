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
    int acc = 0;
    for (int i = 0; i < n - 1; i++) {
        int v;
        cin >> v;
        acc ^= v;
    }
    for (int i = 1; i <= n; i++) {
        acc ^= i;
    }
    cout << acc << endl;
}