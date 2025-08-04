from bisect import bisect_right
from typing import List


class Solution:
    def calculateMedianOfMatrix(self, matrix: List[List[int]]) -> int:
        n = len(matrix)
        m = len(matrix[0])

        # Find the minimum and maximum elements in the matrix
        left = min(row[0] for row in matrix)
        right = max(row[-1] for row in matrix)

        desired = (n * m + 1) // 2

        # Binary search to find the median
        while left < right:
            mid = (left + right) // 2
            place = 0

            # Count elements <= mid in each row using binary search
            for row in matrix:
                place += bisect_right(row, mid)

            if place < desired:
                left = mid + 1
            else:
                right = mid

        return left


# tests-start
matrix = [
    [1, 2, 3],
    [3, 3, 4],
    [1, 1, 2],
]
sol = Solution()
print(sol.calculateMedianOfMatrix(matrix))
# tests-end

"""output
2
"""
