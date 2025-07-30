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
    def sortArray(self, nums: List[int]) -> List[int]:
        quick_sort(nums, 0, len(nums) - 1)
        return nums


# tests-start
nums = [5, 2, 3, 1]
sol = Solution()
sol.sortArray(nums)
# tests-end

'''output
[1, 2, 3, 5]
'''
