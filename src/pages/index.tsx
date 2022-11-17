import { useNavigate } from "react-router-dom";
import "../index.css";

const Index = () => {
  const navigate = useNavigate();
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
        >
          Login
        </button>
        <button className="button cta-register" type="button">
          Start Creating Todos
        </button>
      </div>
    </div>
  );
};

export default Index;
