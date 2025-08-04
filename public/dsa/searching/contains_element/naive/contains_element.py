from typing import List


class Solution:
    def containsElement(self, arr: List[int], key: int) -> bool:
        n = len(arr)
        for i in range(n):
            if arr[i] == key:
                return True
        return False


# tests-start
arr = [1, 2, 3, 3, 3, 4, 4, 5]
key = 2
sol = Solution()
print(sol.containsElement(arr, key))
# tests-end

'''output
True
'''
