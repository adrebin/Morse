import { useState } from 'react';
import './MorseButton.css';
import { convertTextToMorse } from './morseUtils.js'


function TextConverter() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        {convertTextToMorse(value)}
      </div>
    </div>
  );
}


export default TextConverter;
