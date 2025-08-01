
#include <bits/stdc++.h>
using namespace std;

int getIdenticalTwinsCount(vector<int> &arr) {
    unordered_map<int, int> frequency;
    for (auto x : arr) {
        frequency[x]++;
    }
    int count = 0;
    for (auto x : frequency) {
        count += (x.second * (x.second - 1) / 2);
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