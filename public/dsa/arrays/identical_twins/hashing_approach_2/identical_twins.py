from collections import defaultdict
from typing import List


class Solution:
    def getIdenticalTwinsCount(self, arr: List[int]) -> int:
        mp = defaultdict(int)
        for v in arr:
            mp[v] += 1

        count = 0
        for k in mp:
            count += (mp[k] * (mp[k] - 1))//2

        return count


# tests-start
arr = [1, 2, 3, 2, 1]
sol = Solution()
print(sol.getIdenticalTwinsCount(arr))
# tests-end

'''output
2
'''
