

from typing import List


class Solution:
    def pascalTriangleRow(self, rowNo: int) -> List[int]:
        current_row = []
        prev_row = []
        current_row.append(1)
        if rowNo == 1:
            return current_row
        prev_row = self.pascalTriangleRow(rowNo - 1)
        for i in range(1, len(prev_row)):
            current_row.append(prev_row[i-1] + prev_row[i])
        current_row.append(1)
        return current_row


# tests-start
rowNo = 5
sol = Solution()
print(sol.pascalTriangleRow(rowNo))
# tests-end

'''output
[1, 4, 6, 4, 1]
'''
