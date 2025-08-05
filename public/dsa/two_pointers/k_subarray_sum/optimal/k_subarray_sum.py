
from typing import List


class Solution:
    def kSubarraySum(self, A: List[int], k: int) -> List[int]:
        n = len(A)
        result = []
        window_sum = 0

        for i in range(k):
            window_sum += A[i]

        result.append(window_sum)

        for i in range(k, n):
            window_sum -= A[i - k]
            window_sum += A[i]
            result.append(window_sum)

        return result


# tests-start
A = [3, 5, 6, 2, 4, 7, 8]
k = 3
sol = Solution()
print(sol.kSubarraySum(A, k))

# tests-end


'''output
[14, 13, 12, 13, 19]
'''
