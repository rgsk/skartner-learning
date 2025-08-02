from typing import List


class Solution:
    def isPrime(self, n: int) -> bool:
        if n < 2:
            return False
        i = 2
        while i * i <= n:
            if n % i == 0:
                return False
            i += 1
        return True

    def primesUptoN(self, n: int) -> List[int]:
        answer = []
        for i in range(2, n + 1):
            if self.isPrime(i):
                answer.append(i)
        return answer


# tests-start
n = 20
sol = Solution()
answer = sol.primesUptoN(n)
print(answer)
# tests-end

'''output
[2, 3, 5, 7, 11, 13, 17, 19]
'''
