from typing import List


class Solution:
    def volumeOfTrappedRainWater(self, heights: List[int]) -> int:
        n = len(heights)

        maxOnLefts = [0] * n
        maxOnRights = [0] * n

        maxOnLefts[0] = heights[0]
        for i in range(1, n):
            maxOnLefts[i] = max(maxOnLefts[i-1], heights[i])

        maxOnRights[n-1] = heights[n-1]
        for i in range(n-2, -1, -1):
            maxOnRights[i] = max(maxOnRights[i+1], heights[i])

        totalRainWater = 0

        for i in range(n):
            minOfLeftAndRight = min(maxOnLefts[i], maxOnRights[i])
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
