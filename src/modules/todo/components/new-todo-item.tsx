import { FormEvent } from "react";

interface Props {
  newItemName: string;
  setNewItemName: (item: string) => void;
  addItem: (item: any) => void;
}

const NewTodoItem = ({ newItemName, setNewItemName, addItem }: Props) => {
  return (
    <form
      id="new-item"
      onSubmit={(e: any) => {
        e.preventDefault();
        addItem(newItemName);
        setNewItemName("");
        e.target.reset();
      }}
    >
      <label htmlFor="new-item-name">New Item</label>

      <div
        style={{ display: "flex", marginTop: "0.5rem", marginBottom: "0.5rem" }}
      >
        <input
          id="new-item-name"
          style={{ width: "100%" }}
          type="search"
          placeholder="New Item"
          autoFocus
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setNewItemName(e.currentTarget.value)
          }
        />

        <button
          id="new-item-submit"
          style={{ backgroundColor: "#009EFF" }}
          aria-label={`Add ${newItemName}`}
          type="submit"
        >
          New
        </button>
      </div>
    </form>
  );
};

export default NewTodoItem;
