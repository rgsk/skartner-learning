
#include <bits/stdc++.h>
using namespace std;

int getIdenticalTwinsCount(vector<int> &arr) {
    int count = 0;
    for (int i = 0; i < arr.size(); i++) {
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
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