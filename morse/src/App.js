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
            <p>Tap out morse code to convert to text</p>
            <p>(Only letters and numbers supported, can use keyboard instead of button)</p>
            <ResetButton onClick={() => {
              console.log('updating key', resetKey);
              setResetKey((cur) => !cur);
            }} />
            <p>.</p>
            <MorseButton key={resetKey} />
          </Tab>
          <Tab label="Text -> Morse">
            <p>Enter text to convert to morse code</p>
            <p>(Only letters and numbers supported)</p>
            <TextConverter />
          </Tab>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
