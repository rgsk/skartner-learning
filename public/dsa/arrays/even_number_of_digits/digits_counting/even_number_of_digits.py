from typing import List, Optional


def get_digits_count(v: int):
    if v == 0:
        return 1
    count = 0
    while v > 0:
        v //= 10
        count += 1
    return count


class Solution:
    def getEvenDigitNumbers(self, arr: List[int]) -> Optional[List[int]]:
        result = []
        for v in arr:
            digits_count = get_digits_count(v)
            if digits_count % 2 == 0:
                result.append(v)
        return result


# tests-start
arr = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]
sol = Solution()
print(sol.getEvenDigitNumbers(arr))
# tests-end

'''output
[42, 5775, 34, 45, 3556]
'''
