from typing import List


class Solution:
    def threeSum(self, A: List[int]) -> List[List[int]]:
        n = len(A)
        A.sort()
        result = []
        for i in range(n):
            if i > 0 and A[i] == A[i-1]:
                continue
            left = i + 1
            right = n - 1
            while left < right:
                if left > i + 1 and A[left] == A[left-1]:
                    left += 1
                    continue
                triplet_sum = A[i] + A[left] + A[right]
                if triplet_sum > 0:
                    right -= 1
                elif triplet_sum < 0:
                    left += 1
                else:
                    result.append([A[i], A[left], A[right]])
                    left += 1
                    right -= 1
        return result


# tests-start
A = [1, 1, 0, -1, -2]
sol = Solution()
print(sol.threeSum(A))

# tests-end

'''output
[[-2, 1, 1], [-1, 0, 1]]
'''
