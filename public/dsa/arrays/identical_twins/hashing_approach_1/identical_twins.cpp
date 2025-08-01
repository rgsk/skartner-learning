
#include <bits/stdc++.h>
using namespace std;

int getIdenticalTwinsCount(vector<int> &arr) {
    int count = 0;
    unordered_map<int, int> frequency;
    for (auto v : arr) {
        count += frequency[v];
        frequency[v]++;
    }
    return count;
}
// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 2, 1};
    int count = getIdenticalTwinsCount(arr);
    cout << count << endl;
    return 0;
}
// tests-end

/*output
2
*/