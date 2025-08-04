from typing import List


class Solution:
    def findNonRepeatingElement(self, arr: List[int]) -> int:
        n = len(arr)
        low, high = 0, n - 1
        while low <= high:
            mid = (low + high) // 2
            if mid % 2 == 0:
                if mid + 1 < n and arr[mid] == arr[mid + 1]:
                    low = mid + 1
                elif mid - 1 >= 0 and arr[mid] == arr[mid - 1]:
                    high = mid - 1
                else:
                    return arr[mid]
            else:
                if mid - 1 >= 0 and arr[mid] == arr[mid - 1]:
                    low = mid + 1
                elif mid + 1 < n and arr[mid] == arr[mid + 1]:
                    high = mid - 1
                else:
                    return arr[mid]
        return -1


# tests-start
arr = [1, 1, 2, 3, 3, 4, 4]
sol = Solution()
print(sol.findNonRepeatingElement(arr))
# tests-end

'''output
2
'''
