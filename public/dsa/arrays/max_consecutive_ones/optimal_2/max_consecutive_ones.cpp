
#include <bits/stdc++.h>
using namespace std;

int getMaxConsecutiveOnes(vector<int> &A) {
    int max_count = 0;
    int cur_count = 0;
    for (int v : A) {
        if (v == 1) {
            cur_count++;
            max_count = max(max_count, cur_count);
        } else {
            cur_count = 0;
        }
    }
    return max_count;
}

// tests-start
int main() {
    vector<int> arr = {1, 1, 3, 2, 3, 1, 1, 1};
    cout << getMaxConsecutiveOnes(arr) << endl;
    return 0;
}
// tests-end
/*output
3
*/