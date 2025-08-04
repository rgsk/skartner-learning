

from typing import List


def left_binary_search(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left


class Solution:
    def getInsertPosition(self, arr: List[int], key: int) -> int:
        return left_binary_search(arr, key)


# tests-start
arr = [1, 2, 3, 5]
key = 4
sol = Solution()
print(sol.getInsertPosition(arr, key))
# tests-end


'''output
3
'''
