// twoSum.test.ts

import { describe, it, expect } from "vitest";
import { twoSum, twoSum2 } from "./two_sum";

const runSharedTests = (
  fn: (nums: number[], target: number) => number[],
  name: string,
) => {
  describe(name, () => {
    it("should solve the basic example", () => {
      expect(fn([2, 7, 11, 15], 9).sort()).toEqual([0, 1]);
    });

    it("should work with duplicates", () => {
      expect(fn([3, 3], 6).sort()).toEqual([0, 1]);
    });

    it("should work with negative numbers", () => {
      expect(fn([-1, -2, -3, -4, -5], -8).sort()).toEqual([2, 4]);
    });

    it("should work with zeros", () => {
      expect(fn([0, 4, 3, 0], 0).sort()).toEqual([0, 3]);
    });

    it("should work with mixed positive and negative numbers", () => {
      expect(fn([-10, 20, 10, -20], 0).sort()).toEqual([0, 2]);
    });

    it("should not use the same index twice", () => {
      const result = fn([5, 5], 10);

      expect(result[0]).not.toBe(result[1]);
    });

    it("should return exactly two indices", () => {
      const result = fn([2, 7, 11, 15], 9);

      expect(result).toHaveLength(2);
    });

    it("should return indices whose values equal target", () => {
      const nums = [11, 15, 2, 7];
      const target = 9;

      const [i, j] = fn(nums, target);

      expect(nums[i] + nums[j]).toBe(target);
    });

    it("should work when answer is at the end", () => {
      expect(fn([1, 2, 3, 4, 9], 13).sort()).toEqual([3, 4]);
    });

    it("should throw when no solution exists", () => {
      expect(() => fn([1, 2, 3], 100)).toThrow("No valid solution found");
    });
  });
};

runSharedTests(twoSum, "twoSum - Hash Map Solution ⚡");
runSharedTests(twoSum2, "twoSum2 - Brute Force Solution 🪨");
