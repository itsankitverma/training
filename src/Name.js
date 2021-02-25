import React, { useState } from "react";
import img from "./logo192.png";

function Name() {
  const [state, setstate] = useState("");
  const [visible, setfgh] = useState(false);

  const HandleName = (e) => {
    setstate(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={HandleName} />
      <button
        onClick={() => {
          setfgh(!visible);
        }}
      >
        Click To know
      </button>
      {visible === true ? state : ""}

      <img src={img} alt="" />
    </div>
  );
}

export default Name;
