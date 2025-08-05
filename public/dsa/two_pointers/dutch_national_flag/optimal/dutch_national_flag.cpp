#include <bits/stdc++.h>
using namespace std;

void sortTheArray(vector<int> &A) {
    int low = 0, mid = 0, high = A.size() - 1;
    while (mid <= high) {
        if (A[mid] == 0) {
            swap(A[low], A[mid]);
            low++;
            mid++;
        } else if (A[mid] == 1) {
            mid++;
        } else {  // nums[mid] == 2
            swap(A[mid], A[high]);
            high--;
        }
    }
}

// tests-start
int main() {
    vector<int> A = {2, 2, 0, 1};
    sortTheArray(A);
    for (int v : A) {
        cout << v << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
0 1 2 2
*/