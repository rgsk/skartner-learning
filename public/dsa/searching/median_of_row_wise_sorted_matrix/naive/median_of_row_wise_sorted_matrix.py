from typing import List


class Solution:
    def calculateMedianOfMatrix(self, matrix: List[List[int]]) -> int:
        arr = []
        rowSize = len(matrix)
        columnSize = len(matrix[0])
        for i in range(rowSize):
            for j in range(columnSize):
                arr.append(matrix[i][j])
        arr.sort()
        medianIndex = len(arr) // 2
        return arr[medianIndex]


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
