from typing import List


class Solution:
    def getElementIndex(self, array: List[int], target: int) -> int:
        n = len(array)
        l, r = 0, n - 1
        while l <= r:
            m = (l + r) // 2
            if array[m] == target:
                return m

            if target >= array[0]:
                # We need to be on left side
                if array[m] >= array[0]:
                    # We are on left side - normal binary search
                    if array[m] > target:
                        r = m - 1
                    else:
                        l = m + 1
                else:
                    # We are on right side, but we want left side
                    r = m - 1
            else:
                # We need to be on right side
                if array[m] < array[0]:
                    # We are on right side - normal binary search
                    if array[m] > target:
                        r = m - 1
                    else:
                        l = m + 1
                else:
                    # We are on left side, but we want right side
                    l = m + 1
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
