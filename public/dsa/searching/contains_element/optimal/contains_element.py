from typing import List


class Solution:
    def containsElement(self, arr: List[int], key: int) -> bool:
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == key:
                return True
            elif arr[mid] < key:
                left = mid + 1
            else:
                right = mid - 1
        return False


# tests-start
arr = [1, 2, 3, 3, 3, 4, 4, 5]
key = 2
sol = Solution()
sol.containsElement(arr, key)
# tests-end

'''output
True
'''
