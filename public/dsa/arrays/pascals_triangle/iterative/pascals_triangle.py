

from typing import List


class Solution:
    def pascalTriangleRow(self, rowNo: int) -> List[int]:
        result = []
        result.append(1)
        for i in range(2, rowNo + 1):
            prev = result[:]
            for j in range(1, len(prev)):
                result[j] = prev[j - 1] + prev[j]
            result.append(1)
        return result


# tests-start
rowNo = 5
sol = Solution()
print(sol.pascalTriangleRow(rowNo))
# tests-end

'''output
[1, 4, 6, 4, 1]
'''
