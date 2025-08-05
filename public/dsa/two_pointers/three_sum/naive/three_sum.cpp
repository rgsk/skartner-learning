#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSum(vector<int>& A) {
    int n = A.size();
    set<vector<int>> solutionSet;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            for (int k = j + 1; k < n; k++) {
                if (A[i] + A[j] + A[k] == 0) {
                    vector<int> triples = {A[i], A[j], A[k]};
                    sort(triples.begin(), triples.end());
                    solutionSet.insert(triples);
                }
            }
        }
    }
    vector<vector<int>> answer;
    for (auto x : solutionSet) {
        answer.push_back(x);
    }
    return answer;
}

// tests-start

int main() {
    vector<int> A = {1, 1, 0, -1, -2};
    vector<vector<int>> result = threeSum(A);

    for (const auto& triplet : result) {
        cout << "[";
        for (int i = 0; i < triplet.size(); ++i) {
            cout << triplet[i];
            if (i < triplet.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }

    return 0;
}

// tests-end

/*output
[-2, 1, 1]
[-1, 0, 1]
*/