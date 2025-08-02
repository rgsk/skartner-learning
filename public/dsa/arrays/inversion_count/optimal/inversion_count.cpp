#include <bits/stdc++.h>
using namespace std;

int merge(vector<int> &arr, int start, int mid, int end) {
    int i = start, j = mid + 1, inversions = 0, k = 0;
    vector<int> temp(end - start + 1);
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp[k] = arr[i];
            i++;
        } else {
            // arr[j] < arr[i]
            temp[k] = arr[j];
            j++;
            inversions += mid - i + 1;
        }
        k++;
    }
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= end) {
        temp[k++] = arr[j++];
    }

    for (i = start, k = 0; i <= end; i++, k++) {
        arr[i] = temp[k];
    }
    return inversions;
}
int mergesort(vector<int> &arr, int start, int end) {
    int inversions = 0;
    if (start < end) {
        int mid = (end + start) / 2;
        inversions += mergesort(arr, start, mid);
        inversions += mergesort(arr, mid + 1, end);
        inversions += merge(arr, start, mid, end);
    }
    return inversions;
}
int getInversionCount(vector<int> arr) {
    return mergesort(arr, 0, arr.size() - 1);
}

// tests-start
int main() {
    vector<int> arr = {8, 4, 1, 2};
    int inversions = getInversionCount(arr);
    cout << inversions << endl;
    return 0;
}
// tests-end

/* output
5
*/