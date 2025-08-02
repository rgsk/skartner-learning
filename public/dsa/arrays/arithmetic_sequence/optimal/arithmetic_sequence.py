from typing import List


class Solution:
    def isArithmeticSequence(self, arr: List[int]) -> bool:
        arr.sort()
        n = len(arr)
        cd = arr[1] - arr[0]  # common difference
        for i in range(2, n):
            if arr[i] - arr[i-1] != cd:
                return False
        return True


# tests-start
sol = Solution()
arr = [9, 13, 5, 15, 7, 11]
sol.isArithmeticSequence(arr)
# tests-end

'''output
True
'''
