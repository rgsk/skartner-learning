from typing import List


class Solution:
    def getNextGreaterElement(self, arr: List[int], key: int) -> int:
        n = len(arr)
        if key >= arr[n-1]:
            return key
        l = 0
        r = n - 1
        while l < r:
            m = (l + r) // 2
            if arr[m] <= key:
                l = m + 1
            else:
                r = m
        return arr[l]


# tests-start
arr = [1, 2, 3, 3, 4, 4, 8, 10]
key = 4
sol = Solution()
print(sol.getNextGreaterElement(arr, key))
# tests-end

'''output
8
'''
