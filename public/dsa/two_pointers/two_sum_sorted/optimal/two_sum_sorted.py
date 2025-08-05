from typing import List


class Solution:
    def hasTwoSumZero(self, A: List[int]) -> bool:
        n = len(A)
        left = 0
        right = n - 1
        while left < right:
            if A[left] + A[right] == 0:
                return True
            elif A[left] + A[right] < 0:
                # we need a bigger number
                left += 1
            else:
                # A[left] + A[right] > 0
                # we need a smaller number
                right -= 1
        return False


# tests-start
sol = Solution()
A = [-3, 1, 3, 4]
print(sol.hasTwoSumZero(A))
B = [-2, 1, 3, 4]
print(sol.hasTwoSumZero(B))
# tests-end

'''output
True
False
'''
