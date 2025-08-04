class Solution:
    def isPerfectSquare(self, n: int) -> bool:
        for v in range(1, n + 1):
            sq = v * v
            if sq == n:
                return True
            elif sq > n:
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
