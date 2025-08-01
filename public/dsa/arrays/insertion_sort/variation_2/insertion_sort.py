from typing import List


class Solution:
    def insertionSort(self, arr: List[int]) -> List[int]:
        n = len(arr)
        for i in range(1, n):
            j = i
            while j > 0 and arr[j] < arr[j-1]:
                arr[j], arr[j-1] = arr[j-1], arr[j]
                j -= 1
        return arr


# tests-start
nums = [5, 2, 3, 1]
sol = Solution()
print(sol.insertionSort(nums))
# tests-end

'''output
[1, 2, 3, 5]
'''
