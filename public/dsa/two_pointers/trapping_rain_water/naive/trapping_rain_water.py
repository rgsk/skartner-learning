from typing import List


class Solution:
    def volumeOfTrappedRainWater(self, heights: List[int]) -> int:
        n = len(heights)
        totalRainWater = 0

        for i in range(n):
            maxOnLeft = 0
            for j in range(i + 1):
                maxOnLeft = max(maxOnLeft, heights[j])

            maxOnRight = 0
            for j in range(i, n):
                maxOnRight = max(maxOnRight, heights[j])

            minOfLeftAndRight = min(maxOnLeft, maxOnRight)
            waterForThisBlock = minOfLeftAndRight - heights[i]
            totalRainWater += waterForThisBlock

        return totalRainWater


# tests-start
heights = [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
sol = Solution()
print(sol.volumeOfTrappedRainWater(heights))
# tests-end

'''output
6
'''
