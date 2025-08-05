from typing import List


class Solution:
    def maxKSubarraySum(self, A: List[int], k: int) -> int:
        max_window = 0
        window = 0
        for i in range(len(A)):
            if i >= k:
                window -= A[i-k]
            window += A[i]
            if i >= k - 1:
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
