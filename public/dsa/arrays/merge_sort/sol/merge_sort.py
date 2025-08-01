
from typing import List


def merge(arr: List[int], start: int, mid: int, end: int):
    aux = [0 for _ in range(end - start + 1)]
    i = start
    j = mid + 1
    k = 0
    while i <= mid and j <= end:
        if arr[i] < arr[j]:
            aux[k] = arr[i]
            k += 1
            i += 1
        else:
            aux[k] = arr[j]
            k += 1
            j += 1
    while i <= mid:
        aux[k] = arr[i]
        k += 1
        i += 1
    while j <= end:
        aux[k] = arr[j]
        k += 1
        j += 1
    i = start
    k = 0
    while i <= end:
        arr[i] = aux[k]
        i += 1
        k += 1


def merge_sort(arr: List[int], start: int, end: int):
    if start < end:
        mid = (start + end) // 2
        merge_sort(arr, start, mid)
        merge_sort(arr, mid + 1, end)
        merge(arr, start, mid, end)


class Solution:
    def mergeSort(self, arr: List[int]) -> List[int]:
        merge_sort(arr, 0, len(arr) - 1)
        return arr


# tests-start
nums = [5, 2, 3, 1]
sol = Solution()
print(sol.mergeSort(nums))
# tests-end

'''output
[1, 2, 3, 5]
'''
