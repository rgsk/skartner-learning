#include <bits/stdc++.h>
using namespace std;

int getKthElement(vector<int>& firstArr, vector<int>& secondArr, int k) {
    int i = 0, j = 0;

    while (k > 0) {
        if (i == firstArr.size()) {
            return secondArr[j + k - 1];
        }
        if (j == secondArr.size()) {
            return firstArr[i + k - 1];
        }

        if (k == 1) {
            return min(firstArr[i], secondArr[j]);
        }

        if (firstArr[i] < secondArr[j]) {
            i++;
        } else {
            j++;
        }
        k--;
    }

    return -1;  // unreachable if k is valid
}

// tests-start
int main() {
    vector<int> firstArr = {1, 2, 3, 4, 5, 6};
    vector<int> secondArr = {3, 4, 4, 5, 6, 6};
    cout << getKthElement(firstArr, secondArr, 3) << endl;
    cout << getKthElement(firstArr, secondArr, 6) << endl;
    return 0;
}
// tests-end

/*output
3
4
*/