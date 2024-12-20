import { useCallback, useEffect, useState } from 'react';
import './MorseButton.css';
import { convertMorseToText } from './morseUtils.js'

// Time in ms for a dot press. If greater, assume dash
const DOT_LENGTH_MS = 250;
// Space between letters
const LETTER_LENGTH_MS = 3 * 250 + 100;
// Space between words
const WORD_LENGTH_MS = 7 * 250;


function MorseButton() {
  const [startPress, setStartPress] = useState(new Date());
  const [lastPress, setLastPress] = useState(new Date());
  const [currentText, setCurrentText] = useState("");

  const onPressStart = () => {
    setStartPress(() => new Date());
  }

  const onPressEnd = useCallback(() => {
    const now = new Date();

    const timeSinceStart = (now - startPress);
    const timeSinceLast = (now - lastPress);

    let appendText = "";
    if (timeSinceLast > WORD_LENGTH_MS) {
      if (currentText !== "") {
        appendText += " / "
      }
    } else if (timeSinceLast > LETTER_LENGTH_MS) {
      appendText += " "
    }
    // else assume part of current letter

    if (timeSinceStart < DOT_LENGTH_MS) {
      appendText += "."
    } else {
      appendText += "-"
    }

    setCurrentText((cur) => cur += appendText);
    setLastPress(now);
  }, [currentText, lastPress, startPress]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.stopPropagation();
      console.log('key down');
      onPressStart();
    };
    const handleKeyUp = (event) => {
      event.stopPropagation();
      console.log('key up');
      onPressEnd();
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [onPressEnd]);

  return (
    <div className="MorseButton">
      <button className="MorseButton-pushable" onMouseDown={onPressStart} onMouseUp={onPressEnd} onTouchStart={(e) => {
        e.preventDefault();
        onPressStart();
      }} onTouchEnd={(e) => {
        e.preventDefault();
        onPressEnd();
      }}>
        <span className="MorseButton-front" ></span>
      </button>
      <div className='display-text'>
        <div>Morse text: {currentText}</div>
        <input value={currentText} onKeyDown={(e) => e.stopPropagation()} onKeyUp={(e) => e.stopPropagation()} onChange={(event) => {
          event.stopPropagation();
          setCurrentText(event.target.value)
        }}></input>
        <div className='converted-text'>Converted text: {convertMorseToText(currentText)}</div>
      </div>
    </div>
  );
}


export default MorseButton;
