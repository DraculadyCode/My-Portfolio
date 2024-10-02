// import React from "react";
import WelcomeMessage from "./WelcomeMessage";

function Content({ language }) {
  return (
    <main>
      <WelcomeMessage language={language} />
    </main>
  );
}

export default Content;
