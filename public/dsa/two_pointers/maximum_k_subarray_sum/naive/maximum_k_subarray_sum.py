from typing import List


class Solution:
    def maxKSubarraySum(self, A: List[int], k: int) -> int:
        n = len(A)
        max_window = 0
        for i in range(n - k + 1):
            window = 0
            for j in range(i, i + k):
                window += A[j]
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
