# imports-start
from typing import List

# imports-end


class Solution:
    def getCumulativeSum(self, arr: List[int]) -> List[int]:
        n = len(arr)
        result = [0 for _ in range(n)]
        prefix_sum = 0
        for i in range(n):
            prefix_sum += arr[i]
            result[i] = prefix_sum
        return result


# tests-start
sol = Solution()
arr = [1, 2, 3, 4]
sol.getCumulativeSum(arr)
# tests-end

'''output
[1, 3, 6, 10]
'''
