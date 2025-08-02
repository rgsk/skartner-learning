

from typing import List


def merge(arr: List[int], start: int, mid: int, end: int):
    inversions = 0
    aux = [0 for _ in range(end - start + 1)]
    i = start
    j = mid + 1
    k = 0
    while i <= mid and j <= end:
        if arr[i] <= arr[j]:
            aux[k] = arr[i]
            k += 1
            i += 1
        else:
            # arr[j] < arr[i]
            aux[k] = arr[j]
            k += 1
            j += 1
            inversions += mid - i + 1
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
    return inversions


def merge_sort(arr: List[int], start: int, end: int):
    if start < end:
        mid = (start + end) // 2
        return merge_sort(arr, start, mid) + \
            merge_sort(arr, mid + 1, end) + \
            merge(arr, start, mid, end)

    return 0


class Solution:
    def getInversionCount(self, arr: List[int]) -> int:
        return merge_sort(arr, 0, len(arr) - 1)


# tests-start
arr = [8, 4, 1, 2]
sol = Solution()
print(sol.getInversionCount(arr))

# tests-end

'''output
5
'''
