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
    int cur_same = 1;
    int max_same = 1;

    for (int i = 1; i < n; i++) {
        if (s[i] == s[i - 1]) {
            cur_same++;
        } else {
            max_same = max(max_same, cur_same);
            cur_same = 1;
        }
    }
    max_same = max(max_same, cur_same);
    cout << max_same << endl;
}
