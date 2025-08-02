

from typing import List


class Solution:
    def largestContiguousSum(self, arr: List[int]) -> int:
        cur_sum = arr[0]
        max_sum = cur_sum
        for i in range(1, len(arr)):
            if cur_sum < 0:
                cur_sum = 0
            cur_sum += arr[i]
            max_sum = max(max_sum, cur_sum)
        return max_sum


# tests-start
arr = [4, -6, 2, 5]
sol = Solution()
print(sol.largestContiguousSum(arr))
# tests-end

'''output
7
'''
