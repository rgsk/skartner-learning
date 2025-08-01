# imports-start
from typing import List

# imports-end


class Solution:
    def getIdenticalTwinsCount(self, arr: List[int]) -> int:
        count = 0
        n = len(arr)
        for i in range(n):
            for j in range(i + 1, n):
                if arr[i] == arr[j]:
                    count += 1
        return count


# tests-start
sol = Solution()
arr = [1, 2, 3, 2, 1]
sol.getIdenticalTwinsCount(arr)
# tests-end

'''output
2
'''
