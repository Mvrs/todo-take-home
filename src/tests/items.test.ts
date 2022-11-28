import { describe, expect, it } from "vitest";
import { filterItems, removeItem, updateItem } from "../lib/items";

const items: Item[] = [
  { id: "1", name: "Workout", completed: true },
  { id: "2", name: "Pay bills", completed: false },
  { id: "3", name: "Get lunch", completed: false },
];

describe("updateItem", () => {
  it("should change the name of an item", () => {
    const expected = "Hoodie";
    const results = updateItem(items, "1", { name: expected });
    expect(results).toEqual([
      { id: "1", name: expected, completed: true },
      { id: "2", name: "Pay bills", completed: false },
      { id: "3", name: "Get lunch", completed: false },
    ]);
  });

  it("should change the status of an item", () => {
    const expected = true;
    const results = updateItem(items, "2", { completed: expected });
    expect(results).toEqual([
      { id: "1", name: "Workout", completed: true },
      { id: "2", name: "Pay bills", completed: expected },
      { id: "3", name: "Get lunch", completed: false },
    ]);
  });

  it("should change multiple properties of an item", () => {
    const expected = { completed: true, name: "Hoodie" };
    const results = updateItem(items, "2", { ...expected });
    expect(results).toEqual([
      { id: "1", name: "Workout", completed: true },
      { id: "2", name: expected.name, completed: expected.completed },
      { id: "3", name: "Get lunch", completed: false },
    ]);
  });
});

describe("removeItems", () => {
  it("should remove an item from its ID", () => {
    expect(removeItem(items, "2")).toEqual([
      { id: "1", name: "Workout", completed: true },
      { id: "3", name: "Get lunch", completed: false },
    ]);
  });
});

describe("filterItems", () => {
  it("should filter by name", () => {
    const filter = { name: "W" };
    const result = filterItems(items, filter);
    expect(result).toEqual([{ id: "1", name: "Workout", completed: true }]);
  });

  it("should filter by status", () => {
    const filter = { completed: true };
    const result = filterItems(items, filter);
    expect(result).toEqual([{ id: "1", name: "Workout", completed: true }]);
  });

  it("should filter by name and status", () => {
    const filter = { name: "P", completed: false };
    const result = filterItems(items, filter);
    expect(result).toEqual([{ id: "2", name: "Pay bills", completed: false }]);
  });
});
