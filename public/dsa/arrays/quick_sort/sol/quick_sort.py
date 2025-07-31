# imports-start
from typing import List

# imports-end


def partition(arr: List[int], start: int, end: int):
    pivot = arr[end]
    i = start
    for j in range(start, end):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1

    arr[i], arr[end] = arr[end], arr[i]
    return i


def quick_sort(arr: List[int], start: int, end: int):
    if start < end:
        pivot_index = partition(arr, start, end)
        quick_sort(arr, start, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, end)


class Solution:
    def quickSort(self, arr: List[int]) -> List[int]:
        quick_sort(arr, 0, len(arr) - 1)
        return arr


# tests-start
nums = [5, 2, 3, 1]
sol = Solution()
print(sol.quickSort(nums))
# tests-end

'''output
[1, 2, 3, 5]
'''
