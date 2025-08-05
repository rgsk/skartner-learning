from typing import List


class Solution:
    def volumeOfTrappedRainWater(self, heights: List[int]) -> int:
        stack = []
        water = 0
        i = 0
        n = len(heights)

        while i < n:
            # While the current height is greater than the height at top of the stack
            while stack and heights[i] > heights[stack[-1]]:
                top = stack.pop()

                if not stack:
                    break  # No left boundary

                distance = i - stack[-1] - 1
                bounded_height = min(
                    heights[i], heights[stack[-1]]) - heights[top]
                water += distance * bounded_height

            stack.append(i)
            i += 1

        return water


# tests-start
heights = [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
sol = Solution()
print(sol.volumeOfTrappedRainWater(heights))
# tests-end

'''output
6
'''
