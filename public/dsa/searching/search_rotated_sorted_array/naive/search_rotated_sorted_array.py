from typing import List


class Solution:
    def getElementIndex(self, array: List[int], target: int) -> int:
        for i in range(len(array)):
            if array[i] == target:
                return i
        return -1


# tests-start
array = [4, 5, 6, 7, 1, 2, 3]
target = 6
sol = Solution()
print(sol.getElementIndex(array, target))
# tests-end

'''output
2
'''
