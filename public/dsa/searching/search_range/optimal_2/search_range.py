from typing import List


class Solution:
    def findStart(self, arr: List[int], key: int) -> int:
        low, high = 0, len(arr) - 1
        ans = -1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == key:
                ans = mid
                high = mid - 1  # search left half
            elif arr[mid] < key:
                low = mid + 1
            else:
                high = mid - 1
        return ans

    def findEnd(self, arr: List[int], key: int) -> int:
        low, high = 0, len(arr) - 1
        ans = -1
        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == key:
                ans = mid
                low = mid + 1  # search right half
            elif arr[mid] < key:
                low = mid + 1
            else:
                high = mid - 1
        return ans

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
