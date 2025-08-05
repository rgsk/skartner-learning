#include <bits/stdc++.h>
using namespace std;

int getKthElement(vector<int> firstArr, vector<int> secondArr, int k) {
    vector<int> mergedArr;
    for (int i = 0; i < firstArr.size(); i++) {
        mergedArr.push_back(firstArr[i]);
    }
    for (int i = 0; i < secondArr.size(); i++) {
        mergedArr.push_back(secondArr[i]);
    }
    sort(mergedArr.begin(), mergedArr.end());
    return mergedArr[k - 1];
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