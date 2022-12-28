import { useState, useRef } from "react";

function Controls(props) {
  const { toggle, current, handleBank, state, handleVolume, volume, bank } =
    props;
  const ref = useRef(null);
  const currentAudio = current;
  const currentVolume = volume;
  const off = state ? "" : "off";

  return (
    <div className='controls'>
      <button onClick={toggle}>{state ? "Off" : "On"}</button>
      <div id='display' defaultValue={""}>
        {currentAudio}
      </div>
      <label htmlFor='slider'>
        <input
          className={off}
          ref={ref}
          type='range'
          id='slider'
          min={0}
          max={1}
          step={0.01}
          defaultValue={0.5}
          onChange={handleVolume}
        />
      </label>
      <button className={off} id='preset' onClick={handleBank}>
        Preset
      </button>
    </div>
  );
}

export default Controls;
