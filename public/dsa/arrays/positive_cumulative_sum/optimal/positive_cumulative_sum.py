
from typing import List


class Solution:
    def getPositiveCumulativeSum(self, arr: List[int]) -> List[int]:
        result = []
        cumulative_sum = 0
        for v in arr:
            cumulative_sum += v
            if cumulative_sum > 0:
                result.append(cumulative_sum)
        return result


# tests-start
sol = Solution()
arr = [1, -2, 3, 4, -6]
sol.getPositiveCumulativeSum(arr)
# tests-end

'''output
[1, 2, 6]
'''
