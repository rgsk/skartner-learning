from math import ceil


class Solution:
    def searchRoot(self, num: int) -> int:
        if num <= 1:
            return num
        l = 0
        r = num // 2
        while l < r:
            m = ceil((l + r) / 2)
            sq = m * m
            if sq > num:
                r = m - 1
            else:
                l = m
        return l


# tests-start
sol = Solution()
print(sol.searchRoot(16))
print(sol.searchRoot(12))
# tests-end

'''output
4
3
'''
