import { useNavigate } from "react-router-dom";
import "../index.css";

const Index = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  return (
    <div id="home-page">
      <h1>Todo App</h1>

      <div className="cta-container">
        <button
          className="button cta-login"
          type="button"
          onClick={() => {
            navigate("/login");
          }}
          style={{ display: `${!!user ? "none" : "block"}` }}
        >
          Login
        </button>
        <button
          className="button cta-register"
          type="button"
          onClick={() => {
            if (!!user) {
              navigate("/todo-app");
            } else {
              alert(`Please login first`);
            }
          }}
        >
          {!!user ? "My List" : "Start Creating Todos"}
        </button>
      </div>
    </div>
  );
};

export default Index;
