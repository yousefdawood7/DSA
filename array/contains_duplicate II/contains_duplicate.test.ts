// containsNearbyDuplicate.test.ts

import { describe, it, expect } from "vitest";
import { containsDuplicate, containsDuplicate2 } from "./contains_duplicate";

describe("containsDuplicate", () => {
  it("should return true when duplicate is within k distance", () => {
    expect(containsDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  it("should return true when adjacent duplicates exist", () => {
    expect(containsDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });

  it("should return false when duplicates are farther than k", () => {
    expect(containsDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });

  it("should return false for array with no duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 4, 5], 3)).toBe(false);
  });

  it("should return false when k is 0", () => {
    expect(containsDuplicate([1, 2, 3, 1], 0)).toBe(false);
  });

  it("should handle negative numbers", () => {
    expect(containsDuplicate([-1, -2, -3, -1], 3)).toBe(true);
  });

  it("should return true when duplicate is exactly k distance away", () => {
    expect(containsDuplicate([1, 2, 3, 4, 1], 4)).toBe(true);
  });

  it("should return false when duplicate is just outside k distance", () => {
    expect(containsDuplicate([1, 2, 3, 4, 1], 3)).toBe(false);
  });

  it("should work with a single element array", () => {
    expect(containsDuplicate([1], 1)).toBe(false);
  });

  it("should handle multiple duplicates correctly", () => {
    expect(containsDuplicate([1, 2, 3, 1, 2, 3, 2], 2)).toBe(true);
  });
});

describe("containsDuplicate2", () => {
  it("should return true when duplicate is within k distance", () => {
    expect(containsDuplicate2([1, 2, 3, 1], 3)).toBe(true);
  });

  it("should return true when adjacent duplicates exist", () => {
    expect(containsDuplicate2([1, 0, 1, 1], 1)).toBe(true);
  });

  it("should return false when duplicates are farther than k", () => {
    expect(containsDuplicate2([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });

  it("should return false for array with no duplicates", () => {
    expect(containsDuplicate2([1, 2, 3, 4, 5], 3)).toBe(false);
  });

  it("should return false when k is 0", () => {
    expect(containsDuplicate2([1, 2, 3, 1], 0)).toBe(false);
  });

  it("should handle negative numbers", () => {
    expect(containsDuplicate2([-1, -2, -3, -1], 3)).toBe(true);
  });

  it("should return true when duplicate is exactly k distance away", () => {
    expect(containsDuplicate2([1, 2, 3, 4, 1], 4)).toBe(true);
  });

  it("should return false when duplicate is just outside k distance", () => {
    expect(containsDuplicate2([1, 2, 3, 4, 1], 3)).toBe(false);
  });

  it("should work with a single element array", () => {
    expect(containsDuplicate2([1], 1)).toBe(false);
  });

  it("should handle multiple duplicates correctly", () => {
    expect(containsDuplicate2([1, 2, 3, 1, 2, 3, 2], 2)).toBe(true);
  });
});
