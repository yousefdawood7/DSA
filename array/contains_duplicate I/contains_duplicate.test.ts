// containsDuplicate.test.ts

import { describe, it, expect } from "vitest";
import { containsDuplicate, containsDuplicate2 } from "./contains_duplicate";

describe("containsDuplicate", () => {
  it("should return true when duplicates exist", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("should return false when all elements are unique", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it("should return true for multiple duplicates", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it("should return false for an empty array", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it("should return false for a single element array", () => {
    expect(containsDuplicate([42])).toBe(false);
  });

  it("should handle negative numbers", () => {
    expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
  });

  it("should handle zero correctly", () => {
    expect(containsDuplicate([0, 1, 2, 0])).toBe(true);
  });

  it("should return false for large unique arrays", () => {
    const nums = Array.from({ length: 1000 }, (_, i) => i);
    expect(containsDuplicate(nums)).toBe(false);
  });

  it("should return true when duplicate is at the end", () => {
    expect(containsDuplicate([1, 2, 3, 4, 5, 1])).toBe(true);
  });
});

describe("containsDuplicate2", () => {
  it("should return true when duplicates exist", () => {
    expect(containsDuplicate2([1, 2, 3, 1])).toBe(true);
  });

  it("should return false when all elements are unique", () => {
    expect(containsDuplicate2([1, 2, 3, 4])).toBe(false);
  });

  it("should return true for multiple duplicates", () => {
    expect(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it("should return false for an empty array", () => {
    expect(containsDuplicate2([])).toBe(false);
  });

  it("should return false for a single element array", () => {
    expect(containsDuplicate2([42])).toBe(false);
  });

  it("should handle negative numbers", () => {
    expect(containsDuplicate2([-1, -2, -3, -1])).toBe(true);
  });

  it("should handle zero correctly", () => {
    expect(containsDuplicate2([0, 1, 2, 0])).toBe(true);
  });

  it("should return false for large unique arrays", () => {
    const nums = Array.from({ length: 1000 }, (_, i) => i);
    expect(containsDuplicate2(nums)).toBe(false);
  });

  it("should return true when duplicate is at the end", () => {
    expect(containsDuplicate2([1, 2, 3, 4, 5, 1])).toBe(true);
  });
});
