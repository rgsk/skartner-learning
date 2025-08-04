from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], key: int) -> bool:
        rowSize = len(matrix)
        columnSize = len(matrix[0])

        low, high = 0, rowSize - 1
        row = -1

        # Binary search to find the potential row
        while low <= high:
            mid = (low + high) // 2
            if matrix[mid][0] <= key and matrix[mid][columnSize - 1] >= key:
                row = mid
                break
            elif matrix[mid][0] > key:
                high = mid - 1
            else:
                low = mid + 1

        if row == -1:
            return False

        # Binary search in the found row
        low, high = 0, columnSize - 1
        while low <= high:
            mid = (low + high) // 2
            if matrix[row][mid] == key:
                return True
            elif matrix[row][mid] < key:
                low = mid + 1
            else:
                high = mid - 1

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
