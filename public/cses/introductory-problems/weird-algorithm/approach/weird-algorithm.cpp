#include <bits/stdc++.h>
using namespace std;

int main() {

// setup-start
#ifndef ONLINE_JUDGE
    // For getting input from input.txt file
    freopen("../input.txt", "r", stdin);

    // Prlong longing the Output to output.txt file
    freopen("../output.txt", "w", stdout);
#endif
// setup-end

    long long n;
    cin >> n;

    while (n != 1) {
        cout << n << " ";
        if (n % 2) {
            n = n * 3 + 1;
        } else {
            n /= 2;
        }
    }   
    cout << 1 << endl;
}