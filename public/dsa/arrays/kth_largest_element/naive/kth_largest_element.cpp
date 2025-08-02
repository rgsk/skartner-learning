#include <bits/stdc++.h>
using namespace std;

int getKthLargestElement(vector<int>& list, int k) {
    sort(list.begin(), list.end());
    int i = list.size() - k;
    return list[i];
}

// tests-start
int main() {
    vector<int> list = {4, 3, 6, 4, 1};
    int k = 3;
    int result = getKthLargestElement(list, k);
    cout << result << endl;
    return 0;
}
// tests-end

/*output
4
*/