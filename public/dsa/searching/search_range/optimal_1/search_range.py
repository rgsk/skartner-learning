from typing import List


class Solution:
    def findStart(self, arr: List[int], key: int) -> int:
        low, high = 0, len(arr) - 1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == key and (mid == 0 or key > arr[mid - 1]):
                return mid
            elif arr[mid] < key:
                low = mid + 1
            else:
                high = mid - 1
        return -1

    def findEnd(self, arr: List[int], key: int) -> int:
        low, high = 0, len(arr) - 1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == key and (mid == len(arr) - 1 or key < arr[mid + 1]):
                return mid
            elif arr[mid] > key:
                high = mid - 1
            else:
                low = mid + 1
        return -1

    def searchRange(self, arr: List[int], key: int) -> List[int]:
        return [self.findStart(arr, key), self.findEnd(arr, key)]


# tests-start
arr = [1, 2, 3, 3, 3, 4, 4, 5]
key = 3
sol = Solution()
print(sol.searchRange(arr, key))
# tests-end

'''output
[2, 4]
'''
