from typing import List


class Solution:
    def primesUptoN(self, n: int) -> List[int]:
        isPrime = [True] * (n + 1)
        isPrime[0] = isPrime[1] = False

        i = 2
        while i * i <= n:
            if isPrime[i]:
                j = i * i
                while j <= n:
                    isPrime[j] = False
                    j += i
            i += 1

        answer = []
        i = 2
        while i <= n:
            if isPrime[i]:
                answer.append(i)
            i += 1

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
