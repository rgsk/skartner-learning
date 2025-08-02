from typing import List


class Solution:
    def rotateMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        # 2 steps
        # take transpose
        # reverse each row
        rows = len(matrix)
        cols = len(matrix[0])
        result = [[0 for _ in range(rows)] for _ in range(cols)]
        for i in range(rows):
            for j in range(cols):
                result[j][i] = matrix[i][j]

        for row in result:
            row.reverse()
        return result


# tests-start
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
sol = Solution()
result = sol.rotateMatrix(matrix)
for row in result:
    print(row)
# tests-end

'''output
[7, 4, 1]
[8, 5, 2]
[9, 6, 3]
'''
