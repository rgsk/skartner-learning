from typing import List


def is_vowel(c):
    return c in ['a', 'e', 'i', 'o', 'u']


class Solution:
    def kSubstringVowels(self, s: str, k: int) -> List[int]:
        result = []
        vowels = 0
        for i in range(len(s)):
            if i >= k:
                if is_vowel(s[i-k]):
                    vowels -= 1
            if is_vowel(s[i]):
                vowels += 1
            if i >= k - 1:
                result.append(vowels)
        return result


# tests-start
sol = Solution()
s = "workattech"
k = 3
print(sol.kSubstringVowels(s, k))
s = "substring"
k = 2
print(sol.kSubstringVowels(s, k))
# tests-end

'''output
[1, 1, 1, 1, 1, 1, 1, 1]
[1, 1, 0, 0, 0, 1, 1, 0]
'''
