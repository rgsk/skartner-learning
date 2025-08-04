class Solution:
    def searchRoot(self, num: int) -> int:
        if num == 0 or num == 1:
            return num
        for i in range(1, num + 1):
            sq = i * i
            if sq == num:
                return i
            elif sq > num:
                return i - 1
        return -1


# tests-start
sol = Solution()
print(sol.searchRoot(16))
print(sol.searchRoot(12))
# tests-end

'''output
4
3
'''
