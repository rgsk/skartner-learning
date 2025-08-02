from typing import List


class Solution:
    def getMaxConsecutiveOnes(self, arr: List[int]) -> int:
        max_count = 0
        cur_count = 0
        for v in arr:
            if v == 1:
                cur_count += 1
            else:
                max_count = max(cur_count, max_count)
                cur_count = 0
        max_count = max(cur_count, max_count)
        return max_count


# tests-start
arr = [1, 1, 3, 2, 3, 1, 1, 1]
sol = Solution()
print(sol.getMaxConsecutiveOnes(arr))
# tests-end

'''output
3
'''
