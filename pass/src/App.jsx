import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
    const [caps, setcaps] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
  

    if (numberAllowed) {
      str += "0123456789";
    }

 if(caps)
  {   str +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";}

    if (charAllowed) {
      str += "!@#$%^&*(){}[]";
    }

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);

      pass += str.charAt(randomIndex);
         
    }

    setPassword(pass);
  }, [length, numberAllowed, caps,charAllowed]);
  

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>

      <div className="passwordBox">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
        />

        <button onClick={copyPassword}>
          Copy
        </button>
      </div>

      <div className="controls">
        <div>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <label> Length: {length}</label>
        </div>

        <div>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() =>
              setNumberAllowed((prev) => !prev)
            }
          />

          <label> Numbers</label>
        </div>


<div>
          <input
            type="checkbox"
            checked={caps}
            onChange={() =>
              setcaps((prev) => !prev)
            }
          />

          <label> caps</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() =>
              setCharAllowed((prev) => !prev)
            }
          />

          <label> Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;