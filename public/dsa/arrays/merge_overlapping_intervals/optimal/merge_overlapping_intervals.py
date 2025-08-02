from typing import List


class Solution:
    def mergeIntervals(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        merged = [intervals[0]]
        for i in range(1, len(intervals)):
            if intervals[i][0] > merged[-1][1]:
                merged.append(intervals[i])
            else:
                merged[-1][1] = max(merged[-1][1], intervals[i][1])
        return merged


# tests-start
intervals = [[1, 2], [2, 3], [1, 4], [5, 6]]
sol = Solution()
print(sol.mergeIntervals(intervals))
# tests-end

'''output
[[1, 4], [5, 6]]
'''
