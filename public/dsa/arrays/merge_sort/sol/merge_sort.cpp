// imports-start
#include <bits/stdc++.h>
using namespace std;
// imports-end

void merge(vector<int>& arr, int start, int mid, int end) {
    vector<int> aux(end - start + 1);
    int i = start;
    int j = mid + 1;
    int k = 0;

    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            aux[k++] = arr[i++];
        } else {
            aux[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        aux[k++] = arr[i++];
    }

    while (j <= end) {
        aux[k++] = arr[j++];
    }

    for (int p = 0; p < aux.size(); ++p) {
        arr[start + p] = aux[p];
    }
}

void merge_sort(vector<int>& arr, int start, int end) {
    if (start < end) {
        int mid = (start + end) / 2;
        merge_sort(arr, start, mid);
        merge_sort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}

void mergeSort(vector<int>& arr) {
    merge_sort(arr, 0, arr.size() - 1);
}

// tests-start
int main() {
    vector<int> nums = {5, 2, 3, 1};
    mergeSort(nums);
    for (int n : nums) {
        cout << n << " ";
    }
    cout << endl;
    return 0;
}
// tests-end

/*output
1 2 3 5
*/