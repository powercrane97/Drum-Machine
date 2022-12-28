import { useState } from "react";
import "./App.css";
import Drumpad from "./Drumpad";
import { useEffect } from "react";

function App() {
  return (
    <div className='app-wrapper'>
      <Drumpad />
      <p style={{ display: "block" }}>
        Made by <a href='https://github.com/powercrane97'>Lesha</a>
      </p>
    </div>
  );
}

export default App;
