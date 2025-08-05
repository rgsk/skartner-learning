
from typing import List


class Solution:
    def getKthElement(self, firstArr: List[int], secondArr: List[int], k: int) -> int:
        mergedArr = []
        for num in firstArr:
            mergedArr.append(num)
        for num in secondArr:
            mergedArr.append(num)
        mergedArr.sort()
        return mergedArr[k - 1]


# tests-start
A = [1, 2, 3, 4, 5, 6]
B = [3, 4, 4, 5, 6, 6]
sol = Solution()
print(sol.getKthElement(A, B, 3))
print(sol.getKthElement(A, B, 6))
# tests-end

'''output
3
4
'''
