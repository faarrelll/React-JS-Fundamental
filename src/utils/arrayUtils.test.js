import { describe, it, expect } from "vitest";
import { getFilteredArray } from "./arrayUtils";

describe("getFilteredArray", () => {
  const sampleArray = [
    { id: 1, name: "John Doe", role: "developer" },
    { id: 2, name: "Jane Smith", role: "designer" },
    { id: 3, name: "Bob Johnson", role: "developer" },
  ];

  it("filters array based on search string and key", () => {
    const result = getFilteredArray(sampleArray, "name", "john");
    expect(result).toEqual([
      { id: 1, name: "John Doe", role: "developer" },
      { id: 3, name: "Bob Johnson", role: "developer" },
    ]);
  });

  it("is case insensitive", () => {
    const result = getFilteredArray(sampleArray, "role", "DEVELOPER");
    expect(result).toEqual([
      { id: 1, name: "John Doe", role: "developer" },
      { id: 3, name: "Bob Johnson", role: "developer" },
    ]);
  });

  it("returns empty array for non-array input", () => {
    const result = getFilteredArray(null, "name", "john");
    expect(result).toEqual([]);
  });

  it("returns original array if search key or string is missing", () => {
    expect(getFilteredArray(sampleArray, "", "john")).toEqual(sampleArray);
    expect(getFilteredArray(sampleArray, "name", "")).toEqual(sampleArray);
  });

  it("handles missing or undefined property values", () => {
    const arrayWithUndefined = [
      { id: 1, name: "John" },
      { id: 2 },
      { id: 3, name: null },
    ];
    const result = getFilteredArray(arrayWithUndefined, "name", "john");
    expect(result).toEqual([{ id: 1, name: "John" }]);
  });
});
