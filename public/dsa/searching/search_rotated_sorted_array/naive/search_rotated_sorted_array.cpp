#include <bits/stdc++.h>
using namespace std;

int getElementIndex(vector<int> &arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

int main() {
    vector<int> arr = {4, 5, 6, 7, 1, 2, 3};
    int target = 6;
    int index = getElementIndex(arr, target);
    cout << index << endl;
}

/*output
2
*/