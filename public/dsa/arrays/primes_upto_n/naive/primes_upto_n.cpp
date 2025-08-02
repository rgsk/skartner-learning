
#include <bits/stdc++.h>
using namespace std;

bool isPrime(int n) {
    if (n < 2) {
        return false;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
vector<int> primesUptoN(int n) {
    vector<int> answer;
    for (int i = 2; i <= n; i++) {
        if (isPrime(i) == true) {
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