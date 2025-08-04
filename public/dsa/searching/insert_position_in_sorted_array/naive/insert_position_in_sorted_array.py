

from typing import List


class Solution:
    def getInsertPosition(self, arr: List[int], key: int) -> int:
        for i in range(len(arr)):
            if arr[i] >= key:
                return i


# tests-start
arr = [1, 2, 3, 5]
key = 4
sol = Solution()
print(sol.getInsertPosition(arr, key))
# tests-end


'''output
3
'''
