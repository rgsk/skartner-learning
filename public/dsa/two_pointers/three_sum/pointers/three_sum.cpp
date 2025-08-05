#include <bits/stdc++.h>
using namespace std;

#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> threeSum(vector<int>& A) {
    int n = A.size();
    sort(A.begin(), A.end());
    vector<vector<int>> result;

    for (int i = 0; i < n; i++) {
        if (i > 0 && A[i] == A[i - 1])
            continue;

        int left = i + 1;
        int right = n - 1;

        while (left < right) {
            if (left > i + 1 && A[left] == A[left - 1]) {
                left++;
                continue;
            }

            int triplet_sum = A[i] + A[left] + A[right];

            if (triplet_sum > 0) {
                right--;
            } else if (triplet_sum < 0) {
                left++;
            } else {
                result.push_back({A[i], A[left], A[right]});
                left++;
                right--;
            }
        }
    }

    return result;
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