

from typing import List


class Solution:
    def largestContiguousSum(self, arr: List[int]) -> int:
        n = len(arr)
        max_sum = arr[0]
        for i in range(n):
            subarray_sum = 0
            for j in range(i, n):
                subarray_sum += arr[j]
                max_sum = max(max_sum, subarray_sum)
        return max_sum


# tests-start
arr = [4, -6, 2, 5]
sol = Solution()
sol.largestContiguousSum(arr)
# tests-end

'''output
7
'''
