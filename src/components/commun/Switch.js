import React, { useState } from 'react';
import '../../css/Switch.css';

const Switchbtn = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button className={`switch-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
      <span className="switch-button-text">{isOn ? 'ON' : 'OFF'}</span>
    </button>
  );
};

export default Switchbtn;