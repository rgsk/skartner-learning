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

    int n, m;
    cin >> n >> m;
    multiset<int> h;
    vector<int> t(m);
    for (int i = 0; i < n; i++) {
        int v;
        cin >> v;
        h.insert(v);
    }
    for (int i = 0; i < m; i++) {
        cin >> t[i];
    }
    for (int v : t) {
        auto it = h.upper_bound(v);

        if (it != h.begin()) {
            it--;
            cout << *it << endl;
            h.erase(it);
        } else {
            cout << -1 << endl;
        }
    }
}
