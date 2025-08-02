from typing import List


class Solution:
    def getKthLargestElement(self, arr: List[int], k: int) -> int:
        arr.sort()
        i = len(arr) - k
        return arr[i]


# tests-start
arr = [4, 3, 6, 4, 1]
k = 3
sol = Solution()
sol.getKthLargestElement(arr, k)
# tests-end

'''output
4
'''
