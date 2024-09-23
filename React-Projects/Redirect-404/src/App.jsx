import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import ErrorPage from "./components/404";
import "./App.css";

export default function App() {
  return (
    <>
      <nav>
        <Link to="home">Home</Link>
        <Link to="products">Products</Link>
        <Link to="about">About</Link>
        <Link to="login">Login</Link>
      </nav>

      <main>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
}

// * The "Products" page navigates to 404 ErrorPage because it is not exist.
