#include <bits/stdc++.h>
using namespace std;

// setup-start
void setup() {
#ifndef ONLINE_JUDGE
    // For getting input from input.txt file
    freopen("../input.txt", "r", stdin);

    // Prlong longing the Output to output.txt file
    freopen("../output.txt", "w", stdout);
#endif
}
// setup-end

int main() {
    setup();

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