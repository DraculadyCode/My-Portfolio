import { useState, useRef } from "react";
import "./Login.css";

export default function Login({ setUser }) {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [attempt, setAttempt] = useState(0);
  // const [rememberMe, setRememberMe] = useState(false);

  const maxAttempts = 5;

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  function checkLogin() {
    if (attempt >= maxAttempts) {
      setError("Too many attempts. Refresh the page and try again later. 🕐");
      return;
    }
    if (username !== "root" && password !== "toor") {
      setError("Wrong username and password 😕");
      usernameRef.current.focus();
      setAttempt(attempt + 1);
      return;
    }
    if (username !== "root") {
      setError("Wrong username 🚫");
      usernameRef.current.focus();
      setAttempt(attempt + 1);
      return;
    }
    if (password === "1234") {
      setError("That's the old password ❌");
      passwordRef.current.focus();
      setAttempt(attempt + 1);
      return;
    }
    if (password !== "toor") {
      setError("Wrong password 🚫");
      passwordRef.current.focus();
      setAttempt(attempt + 1);
      return;
    }
    // if (rememberMe) {
    //   localStorage.setItem("usernameRemembered", username);
    // } else {
    //   localStorage.removeItem("usernameRemembered");
    // }
    setUser(username);
  }

  return (
    <>
      <p className="error">{error}</p>
      <p className="attempts">
        {attempt < maxAttempts
          ? `Attempts left: ${maxAttempts - attempt}`
          : "Too many attempts. Refresh the page. ♻️"}
      </p>
      <label>
        Username
        <input
          type="text"
          ref={usernameRef}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          disabled={attempt >= maxAttempts}
        />
      </label>

      <label>
        Password
        <input
          type={showPassword ? "text" : "password"}
          ref={passwordRef}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={attempt >= maxAttempts}
        />
      </label>

      <label>
        👁️
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => {
            setShowPassword(!showPassword);
            passwordRef.current.focus();
          }}
          disabled={attempt >= maxAttempts}
        />
      </label>
      {/* <label>
        Remember me
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          disabled={attempt >= maxAttempts}
        />
      </label> */}
      <button onClick={checkLogin} disabled={attempt >= maxAttempts}>
        {" "}
        Login{" "}
      </button>

      <p className="error">{error}</p>
    </>
  );
}
