import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import "./index.css";
import Index from "./pages";
import Login from "./pages/login";
import TodoApp from "./pages/todo";

const authenticatedUser = window.localStorage.getItem("user");

console.log({ user: !!authenticatedUser });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/todo-app",
    element: (
      <ProtectedRoute isAuth={!!authenticatedUser} redirectPath="/login">
        <TodoApp />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
