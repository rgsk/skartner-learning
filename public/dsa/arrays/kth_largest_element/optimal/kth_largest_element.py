from typing import List


def partition(arr: List[int], start: int, end: int):
    pivot = arr[end]
    i = start
    for j in range(start, end):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1

    arr[i], arr[end] = arr[end], arr[i]
    return i


def quick_sort(arr: List[int], start: int, end: int, index: int):
    if start == end:
        return arr[start]
    pivot_index = partition(arr, start, end)
    if pivot_index == index:
        return arr[pivot_index]
    elif index > pivot_index:
        return quick_sort(arr, pivot_index + 1, end, index)
    else:
        return quick_sort(arr, start, pivot_index - 1, index)


class Solution:
    def getKthSmallestElement(self, arr: List[int], k: int) -> int:
        return quick_sort(arr, 0, len(arr) - 1, k - 1)

    def getKthLargestElement(self, arr: List[int], k: int) -> int:
        return self.getKthSmallestElement(arr, len(arr) - k + 1)


# tests-start
arr = [4, 3, 6, 4, 1]
k = 3
sol = Solution()
print(sol.getKthLargestElement(arr, k))
# tests-end

'''output
4
'''
