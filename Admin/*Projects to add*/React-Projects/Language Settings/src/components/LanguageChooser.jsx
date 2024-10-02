// import React from "react";

function LanguageChooser({ setLanguage }) {
  function handleChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option value="ENG">🏴󠁧󠁢󠁥󠁮󠁧󠁿 English</option>
      <option value="GER">🇩🇪 German</option>
      <option value="ESP">🇪🇸 Spanish</option>
      <option value="FRA">🇫🇷 French</option>
      <option value="ITA">🇮🇹 Italian</option>
      <option value="POR">🇵🇹 Portuguese</option>
      <option value="HEB">🇮🇱 Hebrew</option>
      <option value="ROM">🇷🇴 Romanian</option>
      <option value="GRE">🇬🇷 Greek</option>
      <option value="POL">🇵🇱 Polish</option>
      <option value="CZE">🇨🇿 Czech</option>
      <option value="DEN">🇩🇰 Danish</option>
      <option value="DUT">🇳🇱 Dutch</option>
      <option value="SWE">🇸🇪 Swedish</option>
      <option value="FIN">🇫🇮 Finnish</option>
      <option value="NOR">🇳🇴 Norwegian</option>
      <option value="HUN">🇭🇺 Hungarian</option>
      <option value="BUL">🇧🇬 Bulgarian</option>
      <option value="SLO">🇸🇰 Slovak</option>
      <option value="CRO">🇭🇷 Croatian</option>
      <option value="LIT">🇱🇹 Lithuanian</option>
      <option value="LAT">🇱🇻 Latvian</option>
    </select>
  );
}

export default LanguageChooser;
