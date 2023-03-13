import "./App.css";
import Drumpad from "./Drumpad";

function App() {
  return (
    <div className='app-wrapper'>
      <Drumpad />
      <p style={{ display: "block" }}>
        Made by{" "}
        <a href='https://github.com/powercrane97' target='_blank'>
          Lesha
        </a>
      </p>
    </div>
  );
}

export default App;
