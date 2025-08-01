#include <bits/stdc++.h>
using namespace std;

void insertionSort(vector<int> &arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(arr[j], arr[j - 1]);
            j--;
        }
    }
}

// tests-start
int main() {
    vector<int> arr = {5, 2, 3, 1};
    insertionSort(arr);
    for (int v : arr) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 2 3 5
*/