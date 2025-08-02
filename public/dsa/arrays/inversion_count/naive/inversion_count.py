from typing import List


class Solution:
    def getInversionCount(self, arr: List[int]) -> int:
        inversions = 0
        n = len(arr)
        for i in range(n):
            for j in range(i + 1, n):
                if arr[j] < arr[i]:
                    inversions += 1
        return inversions


# tests-start
arr = [8, 4, 1, 2]
sol = Solution()
print(sol.getInversionCount(arr))
# tests-end

'''output
5
'''
