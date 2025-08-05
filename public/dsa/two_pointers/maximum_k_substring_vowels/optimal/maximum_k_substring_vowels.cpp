#include <bits/stdc++.h>
using namespace std;

bool is_vowel(char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int maxKSubstringVowels(string s, int k) {
    int max_vowels = 0;
    int vowels = 0;
    int n = s.size();

    for (int i = 0; i < n; i++) {
        if (i >= k && is_vowel(s[i - k])) {
            vowels--;
        }
        if (is_vowel(s[i])) {
            vowels++;
        }
        if (i >= k - 1) {
            max_vowels = max(max_vowels, vowels);
        }
    }

    return max_vowels;
}

// tests-start
int main() {
    string s1 = "workaattech";
    int k1 = 3;
    cout << maxKSubstringVowels(s1, k1) << endl;

    string s2 = "substring";
    int k2 = 2;
    cout << maxKSubstringVowels(s2, k2) << endl;

    return 0;
}
// tests-end

/*output
2
1
*/