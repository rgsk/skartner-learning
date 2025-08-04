class Solution:
    def searchRoot(self, num: int) -> int:
        if num == 0 or num == 1:
            return num
        low = 1
        high = num // 2
        ans = 1
        while low <= high:
            mid = (low + high) // 2
            sq = mid * mid
            if (sq <= num):
                ans = mid
                low = mid + 1
            else:
                high = mid - 1
        return ans


# tests-start
sol = Solution()
print(sol.searchRoot(16))
print(sol.searchRoot(12))
# tests-end

'''output
4
3
'''
