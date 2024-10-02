import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <h1>404</h1>
      <p>Sorry, this page doesnt exist! Redirecting you to the homepage...</p>
    </div>
  );
}

export default ErrorPage;
