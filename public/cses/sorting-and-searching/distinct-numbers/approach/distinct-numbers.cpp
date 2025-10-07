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

    int n;
    cin >> n;
    vector<int> vec(n);
    for (int i = 0; i < n; i++) {
        cin >> vec[i];
    }
    sort(vec.begin(), vec.end());
    int distinct = 1;
    for (int i = 1; i < n; i++) {
        if (vec[i] != vec[i - 1]) {
            distinct++;
        }
    }
    cout << distinct << endl;
}