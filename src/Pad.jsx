import { useRef } from "react";

function Pad(props) {
  const { children, onClick, clip, id, off, displayName, volume } = props;
  const ref = useRef(null);

  return (
    <div
      className={off ? "drum-pad" : "drum-pad off"}
      onClick={onClick}
      id={id}
    >
      {children}
      <audio
        id={children}
        className='clip'
        src={clip}
        name={displayName}
      ></audio>
    </div>
  );
}

export default Pad;
