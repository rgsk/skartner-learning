// imports-start
#include <bits/stdc++.h>
using namespace std;
// imports-end

int partition(vector<int>& arr, int start, int end) {
    int pivot = arr[end];
    int i = start;
    for (int j = start; j < end; ++j) {
        if (arr[j] < pivot) {
            swap(arr[i], arr[j]);
            ++i;
        }
    }
    swap(arr[i], arr[end]);
    return i;
}

void quick_sort(vector<int>& arr, int start, int end) {
    if (start < end) {
        int pivot_index = partition(arr, start, end);
        quick_sort(arr, start, pivot_index - 1);
        quick_sort(arr, pivot_index + 1, end);
    }
}

void quickSort(vector<int>& arr) {
    quick_sort(arr, 0, arr.size() - 1);
}

// tests-start
int main() {
    vector<int> nums = {5, 2, 3, 1};
    quickSort(nums);
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