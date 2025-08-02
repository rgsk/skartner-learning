

from typing import List


class Solution:
    def pascalTriangleRow(self, rowNo: int) -> List[int]:
        n = rowNo - 1
        result = [0] * (n + 1)
        result[0] = 1
        for k in range(1, n + 1):
            result[k] = result[k-1] * (n - k + 1) // k
        return result


# tests-start
rowNo = 5
sol = Solution()
print(sol.pascalTriangleRow(rowNo))
# tests-end

'''output
[1, 4, 6, 4, 1]
'''
