from typing import List


def findRotatedIndex(array: List[int]) -> int:
    n = len(array)
    l, r = 0, n - 1
    while l <= r:
        m = (l + r) // 2
        if m > 0 and array[m - 1] > array[m]:
            return m - 1
        elif array[m] >= array[0]:
            l = m + 1
        else:
            r = m - 1
    return -1


def binarySearch(array: List[int], l: int, r: int, target: int) -> int:
    while l <= r:
        m = (l + r) // 2
        if array[m] == target:
            return m
        elif array[m] < target:
            l = m + 1
        else:
            r = m - 1
    return -1


class Solution:
    def getElementIndex(self, array: List[int], target: int) -> int:
        n = len(array)
        leftEndIndex = findRotatedIndex(array)
        if leftEndIndex == -1:
            return binarySearch(array, 0, n - 1, target)
        if target >= array[0]:
            return binarySearch(array, 0, leftEndIndex, target)
        else:
            return binarySearch(array, leftEndIndex + 1, n - 1, target)


# tests-start
array = [4, 5, 6, 7, 1, 2, 3]
target = 6
sol = Solution()
print(sol.getElementIndex(array, target))
# tests-end

'''output
2
'''
