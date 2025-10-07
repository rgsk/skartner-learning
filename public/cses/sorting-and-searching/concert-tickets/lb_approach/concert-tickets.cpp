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
    multiset<int> tickets;
    vector<int> bids(m);
    for (int i = 0; i < n; i++) {
        int v;
        cin >> v;
        tickets.insert(v);
    }
    for (int i = 0; i < m; i++) {
        cin >> bids[i];
    }
    for (int bid : bids) {
        auto it = tickets.lower_bound(bid);
        if (it != tickets.end() && *it == bid) {
            cout << *it << endl;
            tickets.erase(it);
        } else {
            // we have a smaller value
            if (it != tickets.begin()) {
                it--;
                cout << *it << endl;
                tickets.erase(it);
            } else {
                cout << -1 << endl;
            }
        }
    }
}
