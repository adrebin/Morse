import { useRef, useState } from 'react';
import './App.css';
import MorseButton from './components/MorseButton';
import ResetButton from './components/ResetButton';
import { Tabs, Tab } from './components/Tabs';
import TextConverter from './components/TextConverter';


function App() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Tabs>
          <Tab label="Morse -> Text">
            <div className="text-header">
              <p>Tap out morse code to convert to text</p>
              <p className="helper-text">(Can use keyboard instead of button on desktop, press lightly for dashes on mobile)</p>
            </div>
            <div className="reset-button">
              <ResetButton onClick={() => {
                setResetKey((cur) => !cur);
              }} />
            </div>
            <MorseButton key={resetKey} />
          </Tab>
          <Tab label="Text -> Morse">
            <p>Enter text to convert to morse code</p>
            <TextConverter />
          </Tab>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
