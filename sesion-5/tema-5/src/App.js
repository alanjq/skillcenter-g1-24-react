import './App.css';
import Greeting from './components/Greeting';
import { useState } from 'react'
import  TimesContext, {TIMES} from './context/TimesContext'
import TimeSwitcher from './components/TimeSwitcher';

function App() {
  const [time, setTime] = useState(0)

  return (
    <TimesContext.Provider value={{ setTime, time, TIMES }}>
      <div>
        <TimeSwitcher />
        <Greeting name="Alan" />
        <Greeting name="Santiago" />
        <Greeting name="Paola" />
        <Greeting name="Enedelia" />
      </div>
    </TimesContext.Provider>
  );
}

export default App;
