function partition(arr: number[], start: number, end: number): number {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}

function quickSort(arr: number[], start: number, end: number): void {
  if (start < end) {
    const pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
}

function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

// tests-start
const nums = [5, 2, 3, 1];
console.log(sortArray(nums));
// tests-end

/*output
[1,2,3,5]
*/

export {};
