
from typing import List


class Solution:
    def getKthElement(self, firstArr: List[int], secondArr: List[int], k: int) -> int:
        i, j = 0, 0

        while k > 0:
            if i == len(firstArr):
                return secondArr[j + k - 1]
            if j == len(secondArr):
                return firstArr[i + k - 1]

            if k == 1:
                return min(firstArr[i], secondArr[j])

            if firstArr[i] < secondArr[j]:
                i += 1
            else:
                j += 1
            k -= 1


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
