from typing import List


class Solution:
    def merge(self, arr: List[int], endIndex: int) -> List[int]:
        n = len(arr)
        result = [0 for _ in range(n)]
        i = 0
        j = endIndex + 1
        k = 0
        while i <= endIndex and j < n:
            if arr[i] < arr[j]:
                result[k] = arr[i]
                i += 1
                k += 1
            else:
                result[k] = arr[j]
                j += 1
                k += 1
        while i <= endIndex:
            result[k] = arr[i]
            i += 1
            k += 1
        while j < n:
            result[k] = arr[j]
            j += 1
            k += 1
        return result


# tests-start
arr = [1, 3, 5, 7, 9, 11, 0, 4, 6, 8]
endIndex = 5
sol = Solution()
sol.merge(arr, endIndex)
# tests-end

'''output
[0, 1, 3, 4, 5, 6, 7, 8, 9, 11]
'''
