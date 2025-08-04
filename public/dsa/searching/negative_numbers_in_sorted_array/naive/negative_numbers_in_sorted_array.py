from typing import List


class Solution:
    def getNegativeNumbersCount(self, arr: List[int]) -> int:
        for i in range(len(arr)):
            if arr[i] >= 0:
                return i


# tests-start
arr = [-5, -3, -2, 3, 4, 6, 7, 8]
sol = Solution()
print(sol.getNegativeNumbersCount(arr))
# tests-end


'''output
3
'''
