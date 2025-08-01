from typing import List


class Solution:
    def insertionSort(self, arr: List[int]) -> List[int]:
        n = len(arr)
        for i in range(1, n):
            cur = arr[i]
            j = i - 1
            while j >= 0 and arr[j] > cur:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = cur
        return arr


# tests-start
nums = [5, 2, 3, 1]
sol = Solution()
print(sol.insertionSort(nums))
# tests-end

'''output
[1, 2, 3, 5]
'''
