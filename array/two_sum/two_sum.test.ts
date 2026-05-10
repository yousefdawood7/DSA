import { describe, it, expect } from "vitest";
import { twoSum } from "./two_sum";

describe("twoSum", () => {
  it("should return indices for a basic case", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(nums, target).sort()).toEqual([0, 1]);
  });

  it("should work when solution is in the middle", () => {
    const nums = [3, 2, 4];
    const target = 6;

    expect(twoSum(nums, target).sort()).toEqual([1, 2]);
  });

  it("should work with duplicate values", () => {
    const nums = [3, 3];
    const target = 6;

    expect(twoSum(nums, target).sort()).toEqual([0, 1]);
  });

  it("should work with negative numbers", () => {
    const nums = [-1, -2, -3, -4, -5];
    const target = -8;

    expect(twoSum(nums, target).sort()).toEqual([2, 4]);
  });

  it("should work with mixed positive and negative numbers", () => {
    const nums = [-10, 20, 10, -20, 30];
    const target = 0;

    expect(twoSum(nums, target).sort()).toEqual([0, 2]);
  });

  it("should work with zeros", () => {
    const nums = [0, 4, 3, 0];
    const target = 0;

    expect(twoSum(nums, target).sort()).toEqual([0, 3]);
  });

  it("should not use the same element twice", () => {
    const nums = [5, 1, 5];
    const target = 10;

    const result = twoSum(nums, target);

    expect(result[0]).not.toBe(result[1]);
    expect(result.sort()).toEqual([0, 2]);
  });

  it("should return valid indices regardless of order", () => {
    const nums = [1, 5, 7, 9];
    const target = 14;

    const result = twoSum(nums, target);

    expect(
      JSON.stringify(result) === JSON.stringify([1, 3]) ||
        JSON.stringify(result) === JSON.stringify([3, 1]),
    ).toBe(true);
  });

  it("should handle larger arrays", () => {
    const nums = Array.from({ length: 10000 }, (_, i) => i);
    const target = 19997;

    expect(twoSum(nums, target).sort()).toEqual([9998, 9999]);
  });

  it("should work when numbers are adjacent", () => {
    const nums = [1, 2, 3, 4];
    const target = 5;

    const result = twoSum(nums, target);

    expect(nums[result[0]] + nums[result[1]]).toBe(target);
  });

  it("should work when the answer uses the first and last elements", () => {
    const nums = [8, 1, 2, 3, 12];
    const target = 20;

    expect(twoSum(nums, target).sort()).toEqual([0, 4]);
  });

  it("should verify returned indices actually sum to target", () => {
    const nums = [11, 15, 2, 7];
    const target = 9;

    const [i, j] = twoSum(nums, target);

    expect(nums[i] + nums[j]).toBe(target);
  });

  it("should return exactly two indices", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum(nums, target);

    expect(result).toHaveLength(2);
  });

  it("should return numeric indices", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum(nums, target);

    expect(typeof result[0]).toBe("number");
    expect(typeof result[1]).toBe("number");
  });
});
