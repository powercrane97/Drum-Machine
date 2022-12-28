import Pad from "./Pad";
import Controls from "./Controls";
import { useRef, useState, useEffect } from "react";
import { preset } from "./preset";

function Drumpad(props) {
  const [state, setState] = useState(true);
  const [display, setDisplay] = useState("");
  const [bank, setBank] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  function handlePlay(e) {
    const clip = e.target.querySelector("audio");
    const clipname = e.target.querySelector("audio").getAttribute("name");
    setDisplay(display => clipname);
    clip.currentTime = 0;
    clip.volume = volume;
    clip.play();
  }

  function handleState() {
    setState(state => !state);
    setDisplay(display => "");
  }

  function changeBank() {
    setBank(bank => {
      setDisplay(display => (!bank ? "Chords" : "Heaters"));
      return !bank;
    });
  }

  function handleKeyDown(e) {
    if (state && /Key[QWEASDZXC]/.test(e.code)) {
      document.getElementById(e.code).click();
      document.getElementById(e.code).classList.add("active");
    }
    // console.log(e.code);
    setTimeout(() => {
      document.getElementById(e.code).classList.remove("active");
    }, 250);
  }

  function handleVolume(e) {
    console.log(e.target.value);
    setVolume(volume => {
      setDisplay(display => "Volume: " + Math.round(e.target.value * 100));
      return e.target.value;
    });
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [state]);

  return (
    <div className='' id='drum-machine'>
      <div className='pads-wrap'>
        {keys.map((value, index) => (
          <Pad
            key={value}
            id={"Key" + value}
            onClick={handlePlay}
            clip={preset[Number(bank)][index].url}
            displayName={preset[Number(bank)][index].name}
            off={state}
          >
            {value}
          </Pad>
        ))}
      </div>
      <Controls
        toggle={handleState}
        current={display}
        handleBank={changeBank}
        state={state}
        handleVolume={handleVolume}
        volume={volume}
        bank={bank}
      />
    </div>
  );
}

export default Drumpad;
