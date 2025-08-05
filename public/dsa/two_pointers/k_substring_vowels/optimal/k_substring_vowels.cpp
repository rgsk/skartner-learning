#include <bits/stdc++.h>
using namespace std;

bool is_vowel(char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

vector<int> kSubstringVowels(string s, int k) {
    vector<int> result;
    int vowels = 0;
    int n = s.size();

    for (int i = 0; i < n; i++) {
        if (i >= k) {
            if (is_vowel(s[i - k])) {
                vowels--;
            }
        }
        if (is_vowel(s[i])) {
            vowels++;
        }
        if (i >= k - 1) {
            result.push_back(vowels);
        }
    }

    return result;
}

// tests-start
int main() {
    vector<int> res1 = kSubstringVowels("workattech", 3);
    for (int x : res1) cout << x << " ";
    cout << endl;

    vector<int> res2 = kSubstringVowels("substring", 2);
    for (int x : res2) cout << x << " ";
    cout << endl;

    return 0;
}
// tests-end

/*output
1 1 1 1 1 1 1 1
1 1 0 0 0 1 1 0
*/