
from typing import List


class Solution:
    def setRowColumnZeroes(self, matrix: List[List[int]]) -> None:
        rows = len(matrix)
        cols = len(matrix[0])
        first_row_zero = False
        first_col_zero = False
        for j in range(cols):
            if matrix[0][j] == 0:
                first_row_zero = True
                break
        for i in range(rows):
            if matrix[i][0] == 0:
                first_col_zero = True
                break

        for i in range(1, rows):
            for j in range(1, cols):
                if matrix[i][j] == 0:
                    matrix[0][j] = 0
                    matrix[i][0] = 0

        for i in range(1, rows):
            for j in range(1, cols):
                if matrix[0][j] == 0 or matrix[i][0] == 0:
                    matrix[i][j] = 0
        if first_row_zero:
            for j in range(cols):
                matrix[0][j] = 0
        if first_col_zero:
            for i in range(rows):
                matrix[i][0] = 0


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
