
from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        lo = 0
        hi = len(nums) - 1
        while lo <= hi:
            mid = (lo + hi) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                hi = mid - 1
            else:
                lo = mid + 1
        return -1


# tests-start
nums = [1, 3, 5, 9, 12]
target = 9
sol = Solution()
print(sol.search(nums, target))
# tests-end

'''output
3
'''
