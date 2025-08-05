from typing import List


class Solution:
    def removeDuplicates(self, A: List[int]) -> int:
        return len(set(A))


# tests-start
A = [1, 2, 3, 3, 3, 4, 5, 5]
sol = Solution()
print(sol.removeDuplicates(A))
# tests-end

'''output
5
'''
