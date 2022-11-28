import { useState } from "react";
import { filterItems } from "~/lib/items";
import { toKebabCase } from "~/lib/kebab-case";
import TodoItem, { ItemProps } from "./todo-item";

interface Props {
  id: string;
  items?: Item[] | undefined;
  filteredItems: Item[];
}

interface ListProps extends ItemProps {
  title: string;
  items?: Item[];
}

const EmptyState = ({ id, items, filteredItems }: Props) => (
  <p id={id} style={{ fontWeight: 400 }}>
    (No items.)
  </p>
);

const TodoList = ({ title = "Items", items, update, remove }: ListProps) => {
  const [filter, setFilter] = useState<string>("");
  const id = toKebabCase(title);

  const filteredItems = filterItems(items, { name: filter });
  const isEmpty = !items?.length;

  return (
    <section
      id={id}
      style={{
        width: "100%",
        padding: 0,
        borderWidth: 2,
        borderColor: "#ccc",
        contentVisibility: "auto", // allows you to skip rendering & painting offscreen content until needed.
      }}
    >
      <header style={{ marginBottom: "1rem" }}>
        <h2>{title}</h2>
        <label htmlFor={`${id}-filter`} style={{ display: "hidden" }}></label>
        <input
          id={`${id}-filter`}
          placeholder="Filter"
          className="chrome-style browser-style"
          style={{
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </header>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          paddingLeft: 0,
          fontSize: "1.25rem",
        }}
      >
        {filteredItems.map(item => (
          <TodoItem key={item.id} item={item} update={update} remove={remove} />
        ))}
      </ul>
      {isEmpty && (
        <EmptyState
          id={`${id}-empty-state`}
          items={items}
          filteredItems={filteredItems}
        />
      )}
    </section>
  );
};

export default TodoList;
