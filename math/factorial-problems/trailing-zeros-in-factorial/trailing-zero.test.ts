import { describe, it, expect } from "vitest";
import {
  trailingZero,
  trailingZero2,
  trailingZeroByFive,
} from "./trailing-zero";

describe("trailingZero", () => {
  it("should return 0 for 0!", () => {
    expect(trailingZero(0n)).toBe(0n);
  });

  it("should return 0 for 1!", () => {
    expect(trailingZero(1n)).toBe(0n);
  });

  it("should return 0 for 2!", () => {
    expect(trailingZero(2n)).toBe(0n);
  });

  it("should return 0 for 3!", () => {
    expect(trailingZero(3n)).toBe(0n);
  });

  it("should return 0 for 4!", () => {
    expect(trailingZero(4n)).toBe(0n);
  });

  it("should return 1 for 5! (first multiple of 5)", () => {
    expect(trailingZero(5n)).toBe(1n);
  });

  it("should return 1 for 6!", () => {
    expect(trailingZero(6n)).toBe(1n);
  });

  it("should return 1 for 9!", () => {
    expect(trailingZero(9n)).toBe(1n);
  });

  it("should return 2 for 10!", () => {
    expect(trailingZero(10n)).toBe(2n);
  });

  it("should return 2 for 11!", () => {
    expect(trailingZero(11n)).toBe(2n);
  });

  it("should return 2 for 14!", () => {
    expect(trailingZero(14n)).toBe(2n);
  });

  it("should return 3 for 15!", () => {
    expect(trailingZero(15n)).toBe(3n);
  });

  it("should return 4 for 20!", () => {
    expect(trailingZero(20n)).toBe(4n);
  });

  it("should return 4 for 24!", () => {
    expect(trailingZero(24n)).toBe(4n);
  });

  it("should return 6 for 25! (25 = 5², extra factor of 5)", () => {
    expect(trailingZero(25n)).toBe(6n);
  });

  it("should return 7 for 30!", () => {
    expect(trailingZero(30n)).toBe(7n);
  });

  it("should return 12 for 50!", () => {
    expect(trailingZero(50n)).toBe(12n);
  });

  it("should return 24 for 100!", () => {
    expect(trailingZero(100n)).toBe(24n);
  });

  it("should return 31 for 125! (125 = 5³, extra factor of 5)", () => {
    expect(trailingZero(125n)).toBe(31n);
  });

  it("should return 49 for 200!", () => {
    expect(trailingZero(200n)).toBe(49n);
  });

  it("should return 62 for 250!", () => {
    expect(trailingZero(250n)).toBe(62n);
  });

  it("should return 124 for 500!", () => {
    expect(trailingZero(500n)).toBe(124n);
  });

  it("should return 249 for 1000!", () => {
    expect(trailingZero(1000n)).toBe(249n);
  });

  it("should always return a non-negative bigint", () => {
    for (let n = 0n; n <= 30n; n++) {
      const result = trailingZero(n);
      expect(result).toBeGreaterThanOrEqual(0n);
      expect(typeof result).toBe("bigint");
    }
  });

  it("trailing zeros should be non-decreasing as n increases", () => {
    let prev = trailingZero(0n);
    for (let n = 1n; n <= 30n; n++) {
      const curr = trailingZero(n);
      expect(curr).toBeGreaterThanOrEqual(prev);
      prev = curr;
    }
  });

  it("trailing zeros should jump at every multiple of 5", () => {
    expect(trailingZero(5n)).toBeGreaterThan(trailingZero(4n));
    expect(trailingZero(10n)).toBeGreaterThan(trailingZero(9n));
    expect(trailingZero(15n)).toBeGreaterThan(trailingZero(14n));
    expect(trailingZero(20n)).toBeGreaterThan(trailingZero(19n));
    expect(trailingZero(25n)).toBeGreaterThan(trailingZero(24n));
  });

  it("25! should have 2 more trailing zeros than 24! (25 = 5²)", () => {
    expect(trailingZero(25n) - trailingZero(24n)).toBe(2n);
  });

  it("125! should have 3 more trailing zeros than 124! (125 = 5³)", () => {
    expect(trailingZero(125n) - trailingZero(124n)).toBe(3n);
  });
});

// ─── trailingZero2 ─────────────────────────────────────────────────────────────

describe("trailingZero2", () => {
  it("should return 0 for 0!", () => {
    expect(trailingZero2(0n)).toBe(0n);
  });

  it("should return 0 for 1!", () => {
    expect(trailingZero2(1n)).toBe(0n);
  });

  it("should return 0 for 2!", () => {
    expect(trailingZero2(2n)).toBe(0n);
  });

  it("should return 0 for 3!", () => {
    expect(trailingZero2(3n)).toBe(0n);
  });

  it("should return 0 for 4!", () => {
    expect(trailingZero2(4n)).toBe(0n);
  });

  it("should return 1 for 5! (first multiple of 5)", () => {
    expect(trailingZero2(5n)).toBe(1n);
  });

  it("should return 1 for 6!", () => {
    expect(trailingZero2(6n)).toBe(1n);
  });

  it("should return 1 for 9!", () => {
    expect(trailingZero2(9n)).toBe(1n);
  });

  it("should return 2 for 10!", () => {
    expect(trailingZero2(10n)).toBe(2n);
  });

  it("should return 2 for 11!", () => {
    expect(trailingZero2(11n)).toBe(2n);
  });

  it("should return 2 for 14!", () => {
    expect(trailingZero2(14n)).toBe(2n);
  });

  it("should return 3 for 15!", () => {
    expect(trailingZero2(15n)).toBe(3n);
  });

  it("should return 4 for 20!", () => {
    expect(trailingZero2(20n)).toBe(4n);
  });

  it("should return 4 for 24!", () => {
    expect(trailingZero2(24n)).toBe(4n);
  });

  it("should return 6 for 25! (25 = 5², extra factor of 5)", () => {
    expect(trailingZero2(25n)).toBe(6n);
  });

  it("should return 7 for 30!", () => {
    expect(trailingZero2(30n)).toBe(7n);
  });

  it("should return 12 for 50!", () => {
    expect(trailingZero2(50n)).toBe(12n);
  });

  it("should return 24 for 100!", () => {
    expect(trailingZero2(100n)).toBe(24n);
  });

  it("should return 31 for 125! (125 = 5³, extra factor of 5)", () => {
    expect(trailingZero2(125n)).toBe(31n);
  });

  it("should return 49 for 200!", () => {
    expect(trailingZero2(200n)).toBe(49n);
  });

  it("should return 62 for 250!", () => {
    expect(trailingZero2(250n)).toBe(62n);
  });

  it("should return 124 for 500!", () => {
    expect(trailingZero2(500n)).toBe(124n);
  });

  it("should return 249 for 1000!", () => {
    expect(trailingZero2(1000n)).toBe(249n);
  });

  it("should always return a non-negative bigint", () => {
    for (let n = 0n; n <= 30n; n++) {
      const result = trailingZero2(n);
      expect(result).toBeGreaterThanOrEqual(0n);
      expect(typeof result).toBe("bigint");
    }
  });

  it("trailing zeros should be non-decreasing as n increases", () => {
    let prev = trailingZero2(0n);
    for (let n = 1n; n <= 30n; n++) {
      const curr = trailingZero2(n);
      expect(curr).toBeGreaterThanOrEqual(prev);
      prev = curr;
    }
  });

  it("trailing zeros should jump at every multiple of 5", () => {
    expect(trailingZero2(5n)).toBeGreaterThan(trailingZero2(4n));
    expect(trailingZero2(10n)).toBeGreaterThan(trailingZero2(9n));
    expect(trailingZero2(15n)).toBeGreaterThan(trailingZero2(14n));
    expect(trailingZero2(20n)).toBeGreaterThan(trailingZero2(19n));
    expect(trailingZero2(25n)).toBeGreaterThan(trailingZero2(24n));
  });

  it("25! should have 2 more trailing zeros than 24! (25 = 5²)", () => {
    expect(trailingZero2(25n) - trailingZero2(24n)).toBe(2n);
  });

  it("125! should have 3 more trailing zeros than 124! (125 = 5³)", () => {
    expect(trailingZero2(125n) - trailingZero2(124n)).toBe(3n);
  });
});

// ─── trailingZeroByFive ────────────────────────────────────────────────────────

describe("trailingZeroByFive", () => {
  it("should return 0 for 0!", () => {
    expect(trailingZeroByFive(0)).toBe(0);
  });

  it("should return 0 for 1!", () => {
    expect(trailingZeroByFive(1)).toBe(0);
  });

  it("should return 0 for 2!", () => {
    expect(trailingZeroByFive(2)).toBe(0);
  });

  it("should return 0 for 3!", () => {
    expect(trailingZeroByFive(3)).toBe(0);
  });

  it("should return 0 for 4!", () => {
    expect(trailingZeroByFive(4)).toBe(0);
  });

  it("should return 1 for 5! (first multiple of 5)", () => {
    expect(trailingZeroByFive(5)).toBe(1);
  });

  it("should return 1 for 6!", () => {
    expect(trailingZeroByFive(6)).toBe(1);
  });

  it("should return 1 for 9!", () => {
    expect(trailingZeroByFive(9)).toBe(1);
  });

  it("should return 2 for 10!", () => {
    expect(trailingZeroByFive(10)).toBe(2);
  });

  it("should return 2 for 11!", () => {
    expect(trailingZeroByFive(11)).toBe(2);
  });

  it("should return 2 for 14!", () => {
    expect(trailingZeroByFive(14)).toBe(2);
  });

  it("should return 3 for 15!", () => {
    expect(trailingZeroByFive(15)).toBe(3);
  });

  it("should return 4 for 20!", () => {
    expect(trailingZeroByFive(20)).toBe(4);
  });

  it("should return 4 for 24!", () => {
    expect(trailingZeroByFive(24)).toBe(4);
  });

  it("should return 6 for 25! (25 = 5², extra factor of 5)", () => {
    expect(trailingZeroByFive(25)).toBe(6);
  });

  it("should return 7 for 30!", () => {
    expect(trailingZeroByFive(30)).toBe(7);
  });

  it("should return 12 for 50!", () => {
    expect(trailingZeroByFive(50)).toBe(12);
  });

  it("should return 24 for 100!", () => {
    expect(trailingZeroByFive(100)).toBe(24);
  });

  it("should return 31 for 125! (125 = 5³, extra factor of 5)", () => {
    expect(trailingZeroByFive(125)).toBe(31);
  });

  it("should return 49 for 200!", () => {
    expect(trailingZeroByFive(200)).toBe(49);
  });

  it("should return 62 for 250!", () => {
    expect(trailingZeroByFive(250)).toBe(62);
  });

  it("should return 124 for 500!", () => {
    expect(trailingZeroByFive(500)).toBe(124);
  });

  it("should return 249 for 1000!", () => {
    expect(trailingZeroByFive(1000)).toBe(249);
  });

  it("should always return a non-negative integer", () => {
    for (let n = 0; n <= 30; n++) {
      const result = trailingZeroByFive(n);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it("trailing zeros should be non-decreasing as n increases", () => {
    let prev = trailingZeroByFive(0);
    for (let n = 1; n <= 30; n++) {
      const curr = trailingZeroByFive(n);
      expect(curr).toBeGreaterThanOrEqual(prev);
      prev = curr;
    }
  });

  it("trailing zeros should jump at every multiple of 5", () => {
    expect(trailingZeroByFive(5)).toBeGreaterThan(trailingZeroByFive(4));
    expect(trailingZeroByFive(10)).toBeGreaterThan(trailingZeroByFive(9));
    expect(trailingZeroByFive(15)).toBeGreaterThan(trailingZeroByFive(14));
    expect(trailingZeroByFive(20)).toBeGreaterThan(trailingZeroByFive(19));
    expect(trailingZeroByFive(25)).toBeGreaterThan(trailingZeroByFive(24));
  });

  it("25! should have 2 more trailing zeros than 24! (25 = 5²)", () => {
    expect(trailingZeroByFive(25) - trailingZeroByFive(24)).toBe(2);
  });

  it("125! should have 3 more trailing zeros than 124! (125 = 5³)", () => {
    expect(trailingZeroByFive(125) - trailingZeroByFive(124)).toBe(3);
  });
});
