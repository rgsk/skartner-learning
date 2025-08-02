#include <bits/stdc++.h>
using namespace std;

int partition(vector<int> &list, int start, int end) {
    int pivot = list[end];
    int i = start;
    for (int j = start; j < end; j++) {
        if (list[j] < pivot) {
            swap(list[i], list[j]);
            i++;
        }
    }
    swap(list[i], list[end]);
    return i;
}

int quick_sort(vector<int> &list, int start, int end, int index) {
    if (start == end) {
        return list[start];
    }
    int pivotIndex = partition(list, start, end);
    if (pivotIndex == index) {
        return list[pivotIndex];
    } else if (index > pivotIndex) {
        return quick_sort(list, pivotIndex + 1, end, index);
    } else {
        return quick_sort(list, start, pivotIndex - 1, index);
    }
}

int getKthSmallestElement(vector<int> &list, int k) {
    return quick_sort(list, 0, list.size() - 1, k - 1);
}

int getKthLargestElement(vector<int> &list, int k) {
    return getKthSmallestElement(list, list.size() - k + 1);
}

// tests-start
int main() {
    vector<int> list = {4, 3, 6, 4, 1};
    int k = 3;
    int result = getKthLargestElement(list, k);
    cout << result << endl;
    return 0;
}
// tests-end

/*output
4
*/