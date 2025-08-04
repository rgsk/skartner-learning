from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], key: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0])

        l = 0
        h = rows * cols - 1

        while l <= h:
            m = (l + h) // 2
            v = matrix[m // cols][m % cols]

            if v == key:
                return True
            elif v < key:
                l = m + 1
            else:
                h = m - 1

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
