import { useContext } from 'react';
import './App.css'
import LanguageContext from './assets/Lang'
import FirstPart from './Components/Page/FirstPart';
import SecondPart from './Components/Page/SecondPart';
import ThirdPart from './Components/Page/ThirdPart';

function App() {
  const { language } = useContext(LanguageContext);

  const lang1 = {
    en: 'JavaScript Basics',
    az: 'JavaScript Əsasları'
  };

  return (
    <div className='mern'>
      <FirstPart />
      <SecondPart />
      <ThirdPart />

    </div>
  )
}

export default App
