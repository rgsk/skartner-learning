#include <bits/stdc++.h>
using namespace std;

int getInsertPosition(vector<int> &arr, int key) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] >= key) {
            return i;
        }
    }
    return -1;
}

// tests-start
int main() {
    vector<int> arr = {1, 2, 3, 5};
    int key = 4;
    cout << getInsertPosition(arr, key) << endl;
    return 0;
}
// tests-end

/*output
3
*/