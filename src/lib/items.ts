import { v4 as id } from "uuid";

export const createItem = (name: string): Item => {
  return {
    id: id(),
    name,
    completed: false,
  };
};

let items = ["Workout", "Pay bills", "Get lunch"].map(createItem);

const [first] = items;
first.completed = true;

export const getInitialItems = (): Item[] => {
  return items;
};

export const updateItem = (
  items: Item[],
  id: string,
  updates: Partial<Item>,
) => {
  return items.map(item => {
    if (item.id === id) return { ...item, ...updates };
    return item;
  });
};

export const removeItem = (items: Readonly<Item[]>, id: string) => {
  return items.filter(item => item.id !== id);
};

export const filterItems = (
  items: Item[] = [],
  properties: Readonly<Partial<Item>>,
) => {
  return items.filter(item => {
    for (const [filterKey, filterValue] of Object.entries(properties)) {
      if (filterKey === "name" && typeof filterValue === "string") {
        return item.name.toLowerCase().startsWith(filterValue.toLowerCase());
      }

      if (filterKey === "completed" && typeof filterValue === "boolean") {
        return item.completed === filterValue;
      }
    }
    return false;
  });
};
