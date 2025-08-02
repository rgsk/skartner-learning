import math
from typing import List


class Solution:
    def pascalTriangleRow(self, rowNo: int) -> List[int]:
        n = rowNo - 1
        return [math.comb(n, r) for r in range(n + 1)]


# tests-start
rowNo = 5
sol = Solution()
print(sol.pascalTriangleRow(rowNo))
# tests-end

'''output
[1, 4, 6, 4, 1]
'''
