import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Login</h1>
      <form className="login-form">
        <label>
          <span>Username</span>
          <input type="text" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <button onClick={() => navigate("/home")}>Submit</button>
      </form>
    </>
  );
}
