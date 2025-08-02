

from typing import List


class Solution:
    def largestContiguousSum(self, arr: List[int]) -> int:
        max_so_far = arr[0]
        max_ending_here = arr[0]

        for i in range(1, len(arr)):
            max_ending_here = max(arr[i], max_ending_here + arr[i])
            max_so_far = max(max_so_far, max_ending_here)

        return max_so_far


# tests-start
arr = [4, -6, 2, 5]
sol = Solution()
print(sol.largestContiguousSum(arr))
# tests-end

'''output
7
'''
