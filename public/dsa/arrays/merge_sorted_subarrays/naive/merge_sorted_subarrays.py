from typing import List


class Solution:
    def merge(self, arr: List[int], endIndex: int) -> List[int]:
        arr.sort()
        return arr


# tests-start
arr = [1, 3, 5, 7, 9, 11, 0, 4, 6, 8]
endIndex = 5
sol = Solution()
print(sol.merge(arr, endIndex))
# tests-end

'''output
[0, 1, 3, 4, 5, 6, 7, 8, 9, 11]
'''
