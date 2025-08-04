from typing import List


class Solution:
    def findNonRepeatingElement(self, arr: List[int]) -> int:
        low, high = 0, len(arr) - 1
        while low < high:
            mid = (low + high) // 2
            if mid % 2 == 0:
                if arr[mid] == arr[mid + 1]:
                    low = mid + 1
                else:
                    high = mid
            else:
                if arr[mid] == arr[mid - 1]:
                    low = mid + 1
                else:
                    high = mid
        return arr[low]


# tests-start
arr = [1, 1, 2, 3, 3, 4, 4]
sol = Solution()
print(sol.findNonRepeatingElement(arr))
# tests-end

'''output
2
'''
