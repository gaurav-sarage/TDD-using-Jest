import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Logged out");

  const onClick = () => {
    setHeading("Logged in");
  };

  return (
    <>
      <button 
        type="button"
        onClick={onClick}
      >
        Log In
      </button>
      <h1>
        {heading}
      </h1>
    </>
  );
};

export const Title = () => {
  return (
    <h1>
      Hello
    </h1>
  )
}

export default App;