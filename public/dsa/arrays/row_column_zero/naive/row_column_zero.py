
from typing import List


class Solution:
    def setRowColumnZeroes(self, matrix: List[List[int]]) -> None:
        rows = len(matrix)
        cols = len(matrix[0])
        zero_rows = [False for _ in range(rows)]
        zero_cols = [False for _ in range(cols)]
        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == 0:
                    zero_rows[i] = True
                    zero_cols[j] = True
        for i in range(rows):
            for j in range(cols):
                if zero_rows[i] or zero_cols[j]:
                    matrix[i][j] = 0


# tests-start


matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]
sol = Solution()
sol.setRowColumnZeroes(matrix)
for row in matrix:
    print(row)
# tests-end

'''output
[1, 0, 1]
[0, 0, 0]
[1, 0, 1]
'''
