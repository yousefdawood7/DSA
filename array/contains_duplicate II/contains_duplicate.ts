export const containsDuplicate = function (nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; ++i)
    for (let j = i + 1; j < nums.length; ++j)
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;

  return false;
};

/*
  TIME COMPLEXITIES ==> O(n^2)
  SPACE COMPLEXITY ==> O(1)
*/

export const containsDuplicate2 = function (
  nums: number[],
  k: number,
): boolean {
  const mapIndicies: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (
      mapIndicies.has(nums[i]) &&
      Math.abs(mapIndicies.get(nums[i])! - i) <= k
    )
      return true;
    mapIndicies.set(nums[i], i);
  }

  return false;
};

/*
  TIME COMPLEXITIES ==> O(n)
  SPACE COMPLEXITY ==> O(1)
*/
