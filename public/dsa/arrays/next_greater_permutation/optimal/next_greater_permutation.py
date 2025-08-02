from typing import List


class Solution:
    def nextGreaterPermutation(self, arr: List[int]) -> None:
        n = len(arr)
        first_drop_index = -1

        for i in range(n - 1, 0, -1):
            if arr[i - 1] < arr[i]:
                first_drop_index = i - 1
                break

        if first_drop_index == -1:
            arr.reverse()
            return

        for i in range(n - 1, first_drop_index, -1):
            if arr[i] > arr[first_drop_index]:
                arr[i], arr[first_drop_index] = arr[first_drop_index], arr[i]
                break

        arr[first_drop_index + 1:] = reversed(arr[first_drop_index + 1:])


# tests-start
arr = [1, 2, 3, 4]
sol = Solution()
sol.nextGreaterPermutation(arr)
print(arr)
# tests-end

'''output
[1, 2, 4, 3]
'''