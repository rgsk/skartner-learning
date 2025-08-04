from typing import List


class Solution:
    def searchRange(self, arr: List[int], key: int) -> List[int]:
        first, last = -1, -1
        for i in range(len(arr)):
            if first == -1 and arr[i] == key:
                first = i
            if arr[i] == key:
                last = i
        return [first, last]


# tests-start
arr = [1, 2, 3, 3, 3, 4, 4, 5]
key = 3
sol = Solution()
print(sol.searchRange(arr, key))
# tests-end

'''output
[2, 4]
'''
