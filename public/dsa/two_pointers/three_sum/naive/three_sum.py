from typing import List


class Solution:
    def threeSum(self, A: List[int]) -> List[List[int]]:
        n = len(A)
        solution_set = set()

        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    if A[i] + A[j] + A[k] == 0:
                        triplet = tuple(sorted([A[i], A[j], A[k]]))
                        solution_set.add(triplet)

        return sorted([list(triplet) for triplet in solution_set])


# tests-start
A = [1, 1, 0, -1, -2]
sol = Solution()
print(sol.threeSum(A))

# tests-end

'''output
[[-2, 1, 1], [-1, 0, 1]]
'''
