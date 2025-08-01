
from typing import List, Optional


class Solution:
    def getEvenDigitNumbers(self, arr: List[int]) -> Optional[List[int]]:
        result = []
        for v in arr:
            digits_count = len(str(v))
            if digits_count % 2 == 0:
                result.append(v)
        return result


# tests-start
arr = [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]
sol = Solution()
sol.getEvenDigitNumbers(arr)
# tests-end

'''output
[42, 5775, 34, 45, 3556]
'''
