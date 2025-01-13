// App.jsx
import React, { useState } from 'react';
import './App.css';
import SecondPart from './Components/Page/SecondPart'; 
import ThirdPart from './Components/Page/ThirdPart'; 
import FirstPart from './Components/Page/FirstPart';

function App() {
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [language, setLanguage] = useState('en'); 

  return (
    <div className='mern'>
      <FirstPart/>
      <SecondPart setSelectedLessonId={setSelectedLessonId} setLanguage={setLanguage} />
      <ThirdPart selectedLessonId={selectedLessonId} language={language} />
    </div>
  );
}

export default App;
