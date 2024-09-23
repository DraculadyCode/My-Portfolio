import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("ENG");

  return (
    <div>
      <Header setLanguage={setLanguage} />
      <Content language={language} />
    </div>
  );
}

export default App;
