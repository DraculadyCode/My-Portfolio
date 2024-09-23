import React, { useState, useEffect } from "react";

function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Window width: {windowWidth}px</h2>
    </div>
  );
}
export default WindowSize;

// ~ https://www.dhiwise.com/post/react-get-screen-width-everything-you-need-to-know
