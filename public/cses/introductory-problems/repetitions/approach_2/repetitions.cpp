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

    string s;
    cin >> s;
    int n = s.size();
    int last_index = 0;
    int max_same = 0;
    for (int i = 1; i < n; i++) {
        if (s[i] != s[i - 1]) {
            max_same = max(max_same, i - last_index);
            last_index = i;
        }
    }
    max_same = max(max_same, n - last_index);
    cout << max_same << endl;
}
