

def is_vowel(c):
    return c in ['a', 'e', 'i', 'o', 'u']


class Solution:
    def maxKSubstringVowels(self, s: str, k: int) -> int:
        max_vowels = 0
        vowels = 0
        for i in range(len(s)):
            if i >= k:
                if is_vowel(s[i-k]):
                    vowels -= 1
            if is_vowel(s[i]):
                vowels += 1
            if i >= k - 1:
                max_vowels = max(max_vowels, vowels)
        return max_vowels


# tests-start
sol = Solution()
s = "workaattech"
k = 3
print(sol.maxKSubstringVowels(s, k))
s = "substring"
k = 2
print(sol.maxKSubstringVowels(s, k))
# tests-end

'''output
2
1
'''
