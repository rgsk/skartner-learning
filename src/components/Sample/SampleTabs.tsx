import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SyntaxHighlighter from "../Shared/SyntaxHighlighter";

export function SampleTabs() {
  return (
    <Tabs defaultValue="Python">
      <TabsList>
        <TabsTrigger value="Python">Python</TabsTrigger>
        <TabsTrigger value="C++">C++</TabsTrigger>
      </TabsList>
      <TabsContent value="Python">
        <SyntaxHighlighter
          isCodeOutput={false}
          language="python"
          defaultOutput={`3`}
          code={`

from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        lo = 0
        hi = len(nums) - 1
        while lo <= hi:
            mid = (lo + hi) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                hi = mid - 1
            else:
                lo = mid + 1
        return -1

# tests-start
nums = [1, 3, 5, 9, 12]
target = 9
sol = Solution()
print(sol.search(nums, target))
# tests-end
`}
        />
      </TabsContent>
      <TabsContent value="C++">
        <SyntaxHighlighter
          isCodeOutput={false}
          language="cpp"
          defaultOutput={`3`}
          code={`

#include <bits/stdc++.h>
using namespace std;


class Solution {
   public:
    int search(const vector<int>& nums, int target) {
        int lo = 0;
        int hi = nums.size() - 1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] > target)
                hi = mid - 1;
            else
                lo = mid + 1;
        }
        return -1;
    }
};

// tests-start
int main() {
    vector<int> nums = {1, 3, 5, 9, 12};
    int target = 9;

    Solution sol;
    cout << sol.search(nums, target) << endl;

    return 0;
}
// tests-end
`}
        />
      </TabsContent>
    </Tabs>
  );
}
