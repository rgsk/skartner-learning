from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], key: int) -> bool:
        rowSize = len(matrix)
        columnSize = len(matrix[0])
        for i in range(rowSize):
            for j in range(columnSize):
                if matrix[i][j] == key:
                    return True
        return False


# tests-start
matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
]

sol = Solution()
print(sol.searchMatrix(matrix1, 6))
print(sol.searchMatrix(matrix2, 15))

# tests-end


"""output
True
False
"""
