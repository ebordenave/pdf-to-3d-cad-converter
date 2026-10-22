import { describe, it, expect } from "vitest";
import validateDimensions from "./validateDimensions";

describe("validateDimensions", () => {
  it("returns true when all dimensions are positive", () => {
    const result = validateDimensions(10, 20, 30);
    expect(result).toBe(true);
  });
  it("returns false when all dimensions are negative", () => {
    const result = validateDimensions(-10, -20, -30);
    expect(result).toBe(false);
  });
  it.each([
    [0, 20, 30],
    [10, 0, 30],
    [10, 20, 0],
  ])("rejects dimensions (%i, %i, %i)", (width, height, depth) => {
    const result = validateDimensions(width, height, depth);
    expect(result).toBe(false);
  });
});
