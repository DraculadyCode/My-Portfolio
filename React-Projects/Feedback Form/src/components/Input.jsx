// import "../App.css";
import { useState } from "react";
// import "../components/Input.css";
import "./Input.css";

function Input({ name, type, value, onChange, label }) {
  return (
    <div className="inputs">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        id={name}
      ></textarea>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        id={name}
      />
    </div>
  );
}

export default Input;
