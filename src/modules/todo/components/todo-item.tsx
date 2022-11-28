import { useState } from "react";

export interface ItemProps {
  item?: Item;
  update: (itemId: number | string | undefined, ctx: any) => void;
  remove: (itemId: number | string | undefined) => void;
}

const TodoItem = ({ item, update, remove }: ItemProps) => {
  const [editing, setEditing] = useState(false);

  return (
    <li style={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
      <label
        htmlFor={`toggle-${item?.id}`}
        style={{
          display: `${editing ? "none" : "flex"}`,
          alignItems: "center",
        }}
      >
        {item?.name}
      </label>
      <input
        value={item?.name}
        id={`edit-${item?.id}`}
        style={{
          display: editing ? "block" : "none",
          paddingLeft: "1.25rem",
          paddingRight: 0,
        }}
        onChange={e => update(item?.id, { name: e.target.value })}
      />
      <div style={{ display: "flex", gap: 2 }}>
        <button
          aria-label={`Edit ${item?.name}`}
          onClick={() => setEditing(!editing)}
        >
          {editing ? "💾 Save" : "✎ Edit"}
        </button>
        <button
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
          aria-label={`Remove "${item?.name}}`}
          onClick={() => remove(item?.id)}
        >
          🗑 Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
