from collections import defaultdict
from typing import List


class Solution:
    def getIdenticalTwinsCount(self, arr: List[int]) -> int:
        count = 0
        mp = defaultdict(int)
        for v in arr:
            count += mp[v]
            mp[v] += 1
        return count


# tests-start
arr = [1, 2, 3, 2, 1]
sol = Solution()
print(sol.getIdenticalTwinsCount(arr))
# tests-end

'''output
2
'''
