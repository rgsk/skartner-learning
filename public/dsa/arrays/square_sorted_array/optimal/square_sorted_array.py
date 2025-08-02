from typing import List


class Solution:
    def getSquareSortedArray(self, arr: List[int]) -> List[int]:
        return sorted([v**2 for v in arr])


# tests-start
arr = [6, -8, 3, -1, 4]
sol = Solution()
print(sol.getSquareSortedArray(arr))
# tests-end

'''output
[1, 9, 16, 36, 64]
'''
