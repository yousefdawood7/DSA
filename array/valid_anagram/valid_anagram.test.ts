import { describe, it, expect } from "vitest";
import { isAnagram, isAnagram2 } from "./valid_anagram";

describe("242. Valid Anagram", () => {
  describe("isAnagram", () => {
    it("should return true for valid anagrams", () => {
      expect(isAnagram("anagram", "nagaram")).toBe(true);
    });

    it("should return false for non-anagrams", () => {
      expect(isAnagram("rat", "car")).toBe(false);
    });

    it("should return false for different lengths", () => {
      expect(isAnagram("abc", "ab")).toBe(false);
    });

    it("should handle single character strings", () => {
      expect(isAnagram("a", "a")).toBe(true);
      expect(isAnagram("a", "b")).toBe(false);
    });

    it("should handle repeated characters", () => {
      expect(isAnagram("aacc", "ccac")).toBe(false);
      expect(isAnagram("aacc", "ccaa")).toBe(true);
    });

    it("should handle empty-like edge cases", () => {
      expect(isAnagram("", "")).toBe(true);
    });
  });

  describe("isAnagram2", () => {
    it("should return true for valid anagrams", () => {
      expect(isAnagram2("anagram", "nagaram")).toBe(true);
    });

    it("should return false for non-anagrams", () => {
      expect(isAnagram2("rat", "car")).toBe(false);
    });

    it("should return false for different lengths", () => {
      expect(isAnagram2("abc", "ab")).toBe(false);
    });

    it("should handle single character strings", () => {
      expect(isAnagram2("a", "a")).toBe(true);
      expect(isAnagram2("a", "b")).toBe(false);
    });

    it("should handle repeated characters", () => {
      expect(isAnagram2("aacc", "ccac")).toBe(false);
      expect(isAnagram2("aacc", "ccaa")).toBe(true);
    });

    it("should handle empty-like edge cases", () => {
      expect(isAnagram2("", "")).toBe(true);
    });
  });
});
