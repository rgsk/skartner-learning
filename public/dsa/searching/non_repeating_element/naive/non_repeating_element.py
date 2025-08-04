from typing import List


class Solution:
    def findNonRepeatingElement(self, arr: List[int]) -> int:
        n = len(arr)
        for i in range(0, n - 1, 2):
            if arr[i] != arr[i + 1]:
                return arr[i]
        return arr[n - 1]


# tests-start
arr = [1, 1, 2, 3, 3, 4, 4]
sol = Solution()
print(sol.findNonRepeatingElement(arr))
# tests-end

'''output
2
'''
