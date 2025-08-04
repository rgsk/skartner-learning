from typing import List


class Solution:
    def findNonRepeatingElement(self, arr: List[int]) -> int:
        xor = 0
        for v in arr:
            xor ^= v
        return xor


# tests-start
arr = [1, 1, 2, 3, 3, 4, 4]
sol = Solution()
print(sol.findNonRepeatingElement(arr))
# tests-end

'''output
2
'''
