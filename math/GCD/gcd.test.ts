import { describe, it, expect } from "vitest";
import { gcd, gcdRecursive } from "./gcd";

describe("gcd", () => {
  // ── Identity / base cases ────────────────────────────────────────────────

  it("gcd(0, 0) should be 0", () => {
    expect(gcd(0, 0)).toBe(0);
  });

  it("gcd(0, 5) should be 5", () => {
    expect(gcd(0, 5)).toBe(5);
  });

  it("gcd(0, 6) should be 6", () => {
    expect(gcd(0, 6)).toBe(6);
  });

  it("gcd(5, 0) should be 0's partner → 5", () => {
    expect(gcd(5, 0)).toBe(5);
  });

  it("gcd(1, 1) should be 1", () => {
    expect(gcd(1, 1)).toBe(1);
  });

  it("gcd(1, 7) should be 1", () => {
    expect(gcd(1, 7)).toBe(1);
  });

  it("gcd(7, 1) should be 1", () => {
    expect(gcd(7, 1)).toBe(1);
  });

  // ── Equal numbers ────────────────────────────────────────────────────────

  it("gcd(12, 12) should be 12", () => {
    expect(gcd(12, 12)).toBe(12);
  });

  it("gcd(100, 100) should be 100", () => {
    expect(gcd(100, 100)).toBe(100);
  });

  // ── One divides the other ────────────────────────────────────────────────

  it("gcd(6, 3) should be 3", () => {
    expect(gcd(6, 3)).toBe(3);
  });

  it("gcd(3, 6) should be 3", () => {
    expect(gcd(3, 6)).toBe(3);
  });

  it("gcd(100, 25) should be 25", () => {
    expect(gcd(100, 25)).toBe(25);
  });

  it("gcd(25, 100) should be 25", () => {
    expect(gcd(25, 100)).toBe(25);
  });

  // ── Coprime pairs (GCD = 1) ──────────────────────────────────────────────

  it("gcd(7, 13) should be 1 (both prime)", () => {
    expect(gcd(7, 13)).toBe(1);
  });

  it("gcd(13, 7) should be 1 (both prime, reversed)", () => {
    expect(gcd(13, 7)).toBe(1);
  });

  it("gcd(8, 15) should be 1", () => {
    expect(gcd(8, 15)).toBe(1);
  });

  it("gcd(17, 31) should be 1 (both prime)", () => {
    expect(gcd(17, 31)).toBe(1);
  });

  // ── Common small cases ───────────────────────────────────────────────────

  it("gcd(12, 8) should be 4", () => {
    expect(gcd(12, 8)).toBe(4);
  });

  it("gcd(8, 12) should be 4", () => {
    expect(gcd(8, 12)).toBe(4);
  });

  it("gcd(54, 24) should be 6", () => {
    expect(gcd(54, 24)).toBe(6);
  });

  it("gcd(24, 54) should be 6", () => {
    expect(gcd(24, 54)).toBe(6);
  });

  it("gcd(48, 18) should be 6", () => {
    expect(gcd(48, 18)).toBe(6);
  });

  it("gcd(56, 42) should be 14", () => {
    expect(gcd(56, 42)).toBe(14);
  });

  it("gcd(270, 192) should be 6", () => {
    expect(gcd(270, 192)).toBe(6);
  });

  // ── Larger numbers ───────────────────────────────────────────────────────

  it("gcd(462, 1071) should be 21", () => {
    expect(gcd(462, 1071)).toBe(21);
  });

  it("gcd(1071, 462) should be 21", () => {
    expect(gcd(1071, 462)).toBe(21);
  });

  it("gcd(3456, 2160) should be 432", () => {
    expect(gcd(3456, 2160)).toBe(432);
  });

  it("gcd(10000, 625) should be 625", () => {
    expect(gcd(10000, 625)).toBe(625);
  });

  it("gcd(97, 89) should be 1 (both prime)", () => {
    expect(gcd(97, 89)).toBe(1);
  });

  // ── Consecutive numbers (always coprime) ─────────────────────────────────

  it("gcd(9, 10) should be 1", () => {
    expect(gcd(9, 10)).toBe(1);
  });

  it("gcd(99, 100) should be 1", () => {
    expect(gcd(99, 100)).toBe(1);
  });

  // ── Powers of 2 ─────────────────────────────────────────────────────────

  it("gcd(16, 8) should be 8", () => {
    expect(gcd(16, 8)).toBe(8);
  });

  it("gcd(64, 48) should be 16", () => {
    expect(gcd(64, 48)).toBe(16);
  });

  it("gcd(1024, 512) should be 512", () => {
    expect(gcd(1024, 512)).toBe(512);
  });

  // ── Commutativity: gcd(a, b) === gcd(b, a) ──────────────────────────────

  it("should be commutative for (36, 60)", () => {
    expect(gcd(36, 60)).toBe(gcd(60, 36));
  });

  it("should be commutative for (111, 259)", () => {
    expect(gcd(111, 259)).toBe(gcd(259, 111));
  });

  // ── GCD properties ──────────────────────────────────────────────────────

  it("gcd(a, b) should divide both a and b", () => {
    const a = 270;
    const b = 192;
    const result = gcd(a, b);
    expect(a % result).toBe(0);
    expect(b % result).toBe(0);
  });

  it("result should always be a positive integer for positive inputs", () => {
    const pairs: [number, number][] = [
      [12, 8],
      [54, 24],
      [7, 13],
      [100, 25],
      [1071, 462],
    ];
    for (const [a, b] of pairs) {
      const result = gcd(a, b);
      expect(result).toBeGreaterThan(0);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});

// ─── gcdRecursive ──────────────────────────────────────────────────────────────

describe("gcdRecursive", () => {
  // ── Identity / base cases ────────────────────────────────────────────────

  it("gcdRecursive(0, 0) should be 0", () => {
    expect(gcdRecursive(0, 0)).toBe(0);
  });

  it("gcdRecursive(0, 5) should be 5", () => {
    expect(gcdRecursive(0, 5)).toBe(5);
  });

  it("gcdRecursive(5, 0) should be 5", () => {
    expect(gcdRecursive(5, 0)).toBe(5);
  });

  it("gcdRecursive(1, 1) should be 1", () => {
    expect(gcdRecursive(1, 1)).toBe(1);
  });

  it("gcdRecursive(1, 7) should be 1", () => {
    expect(gcdRecursive(1, 7)).toBe(1);
  });

  it("gcdRecursive(7, 1) should be 1", () => {
    expect(gcdRecursive(7, 1)).toBe(1);
  });

  // ── Equal numbers ────────────────────────────────────────────────────────

  it("gcdRecursive(12, 12) should be 12", () => {
    expect(gcdRecursive(12, 12)).toBe(12);
  });

  it("gcdRecursive(100, 100) should be 100", () => {
    expect(gcdRecursive(100, 100)).toBe(100);
  });

  // ── One divides the other ────────────────────────────────────────────────

  it("gcdRecursive(6, 3) should be 3", () => {
    expect(gcdRecursive(6, 3)).toBe(3);
  });

  it("gcdRecursive(3, 6) should be 3", () => {
    expect(gcdRecursive(3, 6)).toBe(3);
  });

  it("gcdRecursive(100, 25) should be 25", () => {
    expect(gcdRecursive(100, 25)).toBe(25);
  });

  it("gcdRecursive(25, 100) should be 25", () => {
    expect(gcdRecursive(25, 100)).toBe(25);
  });

  // ── Coprime pairs (GCD = 1) ──────────────────────────────────────────────

  it("gcdRecursive(7, 13) should be 1 (both prime)", () => {
    expect(gcdRecursive(7, 13)).toBe(1);
  });

  it("gcdRecursive(13, 7) should be 1 (both prime, reversed)", () => {
    expect(gcdRecursive(13, 7)).toBe(1);
  });

  it("gcdRecursive(8, 15) should be 1", () => {
    expect(gcdRecursive(8, 15)).toBe(1);
  });

  it("gcdRecursive(17, 31) should be 1 (both prime)", () => {
    expect(gcdRecursive(17, 31)).toBe(1);
  });

  // ── Common small cases ───────────────────────────────────────────────────

  it("gcdRecursive(12, 8) should be 4", () => {
    expect(gcdRecursive(12, 8)).toBe(4);
  });

  it("gcdRecursive(8, 12) should be 4", () => {
    expect(gcdRecursive(8, 12)).toBe(4);
  });

  it("gcdRecursive(54, 24) should be 6", () => {
    expect(gcdRecursive(54, 24)).toBe(6);
  });

  it("gcdRecursive(24, 54) should be 6", () => {
    expect(gcdRecursive(24, 54)).toBe(6);
  });

  it("gcdRecursive(48, 18) should be 6", () => {
    expect(gcdRecursive(48, 18)).toBe(6);
  });

  it("gcdRecursive(56, 42) should be 14", () => {
    expect(gcdRecursive(56, 42)).toBe(14);
  });

  it("gcdRecursive(270, 192) should be 6", () => {
    expect(gcdRecursive(270, 192)).toBe(6);
  });

  // ── Larger numbers ───────────────────────────────────────────────────────

  it("gcdRecursive(462, 1071) should be 21", () => {
    expect(gcdRecursive(462, 1071)).toBe(21);
  });

  it("gcdRecursive(1071, 462) should be 21", () => {
    expect(gcdRecursive(1071, 462)).toBe(21);
  });

  it("gcdRecursive(3456, 2160) should be 432", () => {
    expect(gcdRecursive(3456, 2160)).toBe(432);
  });

  it("gcdRecursive(10000, 625) should be 625", () => {
    expect(gcdRecursive(10000, 625)).toBe(625);
  });

  it("gcdRecursive(97, 89) should be 1 (both prime)", () => {
    expect(gcdRecursive(97, 89)).toBe(1);
  });

  // ── Consecutive numbers (always coprime) ─────────────────────────────────

  it("gcdRecursive(9, 10) should be 1", () => {
    expect(gcdRecursive(9, 10)).toBe(1);
  });

  it("gcdRecursive(99, 100) should be 1", () => {
    expect(gcdRecursive(99, 100)).toBe(1);
  });

  // ── Powers of 2 ─────────────────────────────────────────────────────────

  it("gcdRecursive(16, 8) should be 8", () => {
    expect(gcdRecursive(16, 8)).toBe(8);
  });

  it("gcdRecursive(64, 48) should be 16", () => {
    expect(gcdRecursive(64, 48)).toBe(16);
  });

  it("gcdRecursive(1024, 512) should be 512", () => {
    expect(gcdRecursive(1024, 512)).toBe(512);
  });

  // ── Commutativity: gcd(a, b) === gcd(b, a) ──────────────────────────────

  it("should be commutative for (36, 60)", () => {
    expect(gcdRecursive(36, 60)).toBe(gcdRecursive(60, 36));
  });

  it("should be commutative for (111, 259)", () => {
    expect(gcdRecursive(111, 259)).toBe(gcdRecursive(259, 111));
  });

  // ── GCD properties ──────────────────────────────────────────────────────

  it("gcdRecursive(a, b) should divide both a and b", () => {
    const a = 270;
    const b = 192;
    const result = gcdRecursive(a, b);
    expect(a % result).toBe(0);
    expect(b % result).toBe(0);
  });

  it("result should always be a positive integer for positive inputs", () => {
    const pairs: [number, number][] = [
      [12, 8],
      [54, 24],
      [7, 13],
      [100, 25],
      [1071, 462],
    ];
    for (const [a, b] of pairs) {
      const result = gcdRecursive(a, b);
      expect(result).toBeGreaterThan(0);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});
