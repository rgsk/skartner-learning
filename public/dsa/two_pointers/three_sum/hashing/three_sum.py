from typing import List


class Solution:
    def threeSum(self, nums):
        n = len(nums)
        result = set()

        for i in range(n):
            target = -nums[i]
            seen = set()
            for j in range(i + 1, n):
                complement = target - nums[j]
                if complement in seen:
                    triplet = tuple(sorted((nums[i], nums[j], complement)))
                    result.add(triplet)
                seen.add(nums[j])

        return sorted([list(triplet) for triplet in result])


# tests-start
A = [1, 1, 0, -1, -2]
sol = Solution()
print(sol.threeSum(A))

# tests-end

'''output
[[-2, 1, 1], [-1, 0, 1]]
'''
