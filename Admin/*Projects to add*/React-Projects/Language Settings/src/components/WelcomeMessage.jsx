// import React from "react";

function WelcomeMessage({ language }) {
  const messages = {
    ENG: "Hello World!",
    GER: "Hallo Welt!",
    ESP: "¡Hola Mundo!",
    FRA: "Bonjour le monde!",
    ITA: "Ciao Mondo!",
    POR: "Olá Mundo!",
    HEB: "שלום עולם!",
    ROM: "Salut Lume!",
    GRE: "Γειά σου Κόσμε!",
    POL: "Witaj świecie!",
    CZE: "Ahoj světe!",
    DEN: "Hej Verden!",
    DUT: "Hallo Wereld!",
    SWE: "Hej Världen!",
    FIN: "Hei Maailma!",
    NOR: "Hei Verden!",
    HUN: "Helló Világ!",
    BUL: "Здравей свят!",
    SLO: "Ahoj svet!",
    CRO: "Pozdrav svijete!",
    LIT: "Labas pasauli!",
    LAT: "Sveika, pasaule!"
  };

  return <h2>{messages[language]}</h2>;
}

export default WelcomeMessage;
