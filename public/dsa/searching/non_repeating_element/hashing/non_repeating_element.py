from collections import defaultdict
from typing import List


class Solution:
    def findNonRepeatingElement(self, arr: List[int]) -> int:
        mp = defaultdict(int)
        for v in arr:
            mp[v] += 1
        for k in mp:
            if mp[k] == 1:
                return k


# tests-start
arr = [1, 1, 2, 3, 3, 4, 4]
sol = Solution()
print(sol.findNonRepeatingElement(arr))
# tests-end

'''output
2
'''
