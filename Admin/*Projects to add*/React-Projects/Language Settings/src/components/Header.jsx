// import React from "react";
import LanguageChooser from "./LanguageChooser";

function Header({ setLanguage }) {
  return (
    <header>
      <h1>Languages World</h1>
      <h3>Select A Language:</h3>
      <LanguageChooser setLanguage={setLanguage} />
    </header>
  );
}

export default Header;
