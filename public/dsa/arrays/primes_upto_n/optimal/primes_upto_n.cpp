
#include <bits/stdc++.h>
using namespace std;

vector<int> primesUptoN(int n) {
    vector<bool> isPrime(n + 1, true);
    isPrime[0] = isPrime[1] = false;
    for (int i = 2; i * i <= n; i++) {
        for (int j = i * i; j <= n; j += i) {
            if (isPrime[i] == true) {
                isPrime[j] = false;
            }
        }
    }
    vector<int> answer;
    for (int i = 2; i <= n; i++) {
        if (isPrime[i] == true) {
            answer.push_back(i);
        }
    }
    return answer;
}

// tests-start
int main() {
    int n = 20;
    auto answer = primesUptoN(n);
    for (int v : answer) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
2 3 5 7 11 13 17 19
*/