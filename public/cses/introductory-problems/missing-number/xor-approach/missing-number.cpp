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