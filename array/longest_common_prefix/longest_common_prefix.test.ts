import { describe, it, expect } from "vitest";
import { longestCommonPrefix } from "./longest_common_prefix";

describe("longestCommonPrefix", () => {
  it("should return the common prefix for a basic case", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it("should return an empty string when there is no common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it("should return the full string when all strings are identical", () => {
    expect(longestCommonPrefix(["test", "test", "test"])).toBe("test");
  });

  it("should return an empty string for an empty array", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  it("should return the single string when array contains one item", () => {
    expect(longestCommonPrefix(["alone"])).toBe("alone");
  });

  it("should handle empty strings inside the array", () => {
    expect(longestCommonPrefix(["", "b", "c"])).toBe("");
  });

  it("should be case-sensitive", () => {
    expect(longestCommonPrefix(["Case", "casing"])).toBe("");
  });

  it("should return the shortest full prefix match", () => {
    expect(longestCommonPrefix(["interstellar", "internet", "internal"])).toBe(
      "inter",
    );
  });

  it("should handle prefixes with special characters", () => {
    expect(longestCommonPrefix(["pre-fix", "pre-form", "pre-test"])).toBe(
      "pre-",
    );
  });
});
