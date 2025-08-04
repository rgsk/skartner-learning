class Solution:
    def isPerfectSquare(self, n: int) -> bool:
        if n == 1:
            return True
        l = 1
        r = n // 2
        while l <= r:
            mid = (l + r) // 2
            sq = mid * mid
            if sq == n:
                return True
            elif sq < n:
                l = mid + 1
            else:
                r = mid - 1
        return False


# tests-start
sol = Solution()
print(sol.isPerfectSquare(25))

sol = Solution()
print(sol.isPerfectSquare(30))
# tests-end

'''output
True
False
'''
