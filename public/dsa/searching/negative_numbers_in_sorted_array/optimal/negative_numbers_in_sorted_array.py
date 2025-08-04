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
    def getNegativeNumbersCount(self, arr: List[int]) -> int:
        return left_binary_search(arr, 0)


# tests-start
arr = [-5, -3, -2, 3, 4, 6, 7, 8]
sol = Solution()
print(sol.getNegativeNumbersCount(arr))
# tests-end


'''output
3
'''
