import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem, filterItems, removeItem, updateItem } from "~/lib/items";
import Header from "~/modules/todo/components/header";
import NewTodoItem from "~/modules/todo/components/new-todo-item";
import TodoList from "~/modules/todo/components/todo-list";

const TodoApp = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [newTodoItemName, setNewTodoItemName] = useState<string>("");

  const navigate = useNavigate();

  const add = (name: string) => {
    const item = createItem(name);

    if (name === "") {
      return;
    }
    setItems([...items, item]);
  };

  const update = (id: any, updates: any) => {
    setItems(updateItem(items, id, updates));
  };

  const remove = (id: any) => {
    setItems(removeItem(items, id));
  };

  const todoItems = filterItems(items, { completed: false });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "2rem",
        margin: "0 auto",
        maxWidth: "56rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignContent: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
          style={{
            borderRadius: "0.5rem",
            padding: "0.5rem",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
      <Header items={items} />
      <NewTodoItem
        newItemName={newTodoItemName}
        setNewItemName={setNewTodoItemName}
        addItem={add}
      />
      <section
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <TodoList
          title="Todo"
          items={todoItems}
          update={update}
          remove={remove}
        />
      </section>
    </main>
  );
};

export default TodoApp;
