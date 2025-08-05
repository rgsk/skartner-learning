from typing import List


class Solution:
    def maxKSubarraySum(self, A: List[int], k: int) -> int:
        n = len(A)
        window = 0
        for i in range(k):
            window += A[i]

        max_window = window

        for i in range(k, n):
            window -= A[i - k]
            window += A[i]
            max_window = max(max_window, window)

        return max_window


# tests-start
A = [3, 5, 6, 2, 4, 7, 8]
k = 3
sol = Solution()
print(sol.maxKSubarraySum(A, k))
# tests-end

'''output
19
'''
