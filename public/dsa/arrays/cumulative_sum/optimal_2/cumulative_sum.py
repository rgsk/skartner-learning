
from typing import List


class Solution:
    def getCumulativeSum(self, arr: List[int]) -> List[int]:
        n = len(arr)
        result = [0 for _ in range(n)]
        result[0] = arr[0]
        for i in range(1, n):
            result[i] = result[i-1] + arr[i]
        return result


# tests-start
arr = [1, 2, 3, 4]
sol = Solution()
print(sol.getCumulativeSum(arr))
# tests-end

'''output
[1, 3, 6, 10]
'''
