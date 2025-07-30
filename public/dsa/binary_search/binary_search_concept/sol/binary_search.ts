function search(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
}

// tests-start
const nums = [1, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target));
// tests-end

/*output
3
*/

export {};
