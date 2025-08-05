
from typing import List


class Solution:
    def kSubarraySum(self, A: List[int], k: int) -> List[int]:
        n = len(A)
        result = []
        for i in range(n - k + 1):
            sub_array_sum = 0
            for j in range(i, i + k):
                sub_array_sum += A[j]
            result.append(sub_array_sum)
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
