export const containsDuplicate = function (nums: number[]): boolean {
  for (let i = 0; i < nums.length; ++i)
    for (let j = i + 1; j < nums.length; ++j)
      if (nums[i] === nums[j]) return true;

  return false;
};

/*
  TIME COMPLEXITIES ==> O(n^2)
  SPACE COMPLEXITY ==> O(1)
*/

export const containsDuplicate2 = function (nums: number[]): boolean {
  const uniqueSet: Set<number> = new Set();
  for (let i = 0; i < nums.length; ++i) {
    if (uniqueSet.has(nums[i])) return true;
    uniqueSet.add(nums[i]);
  }

  return false;
};

/*
  TIME COMPLEXITIES ==> O(n)
  SPACE COMPLEXITY ==> O(1)
*/
