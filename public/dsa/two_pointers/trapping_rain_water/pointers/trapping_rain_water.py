from typing import List


class Solution:
    def volumeOfTrappedRainWater(self, heights: List[int]) -> int:
        left = 0
        right = len(heights) - 1
        leftMax = 0
        rightMax = 0
        water = 0
        while left < right:
            leftMax = max(leftMax, heights[left])
            rightMax = max(rightMax, heights[right])
            if leftMax < rightMax:
                water += leftMax - heights[left]
                left += 1
            else:
                water += rightMax - heights[right]
                right -= 1
        return water


# tests-start
heights = [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
sol = Solution()
print(sol.volumeOfTrappedRainWater(heights))
# tests-end

'''output
6
'''
