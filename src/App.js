import React, { useState } from "react";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="App">
      {showSignUp ? (
        <SignUp toggleSignIn={toggleSignUp} />
      ) : (
        <SignIn toggleSignUp={toggleSignUp} />
      )}
    </div>
  );
}

export default App;
