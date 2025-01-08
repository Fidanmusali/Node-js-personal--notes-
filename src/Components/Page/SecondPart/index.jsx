import React, { useContext, useState } from 'react';
import './style.css';
import ThirdPart from '../ThirdPart';
import LanguageContext from '../../../assets/Lang';

const SecondPart = () => {
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const { language } = useContext(LanguageContext);

  const lessons = {
    en: [
      { id: 2, title: 'JavaScript basics', date: '' },
      { id: 3, title: 'Introduction to Node.js', date: '' },
      { id: 4, title: 'File System (fs)', date: '' },
      { id: 5, title: 'Process', date: '' },
      { id: 6, title: 'Events and Event Emitter', date: '' },
      { id: 7, title: 'Path Module', date: '' },
      { id: 8, title: 'Asynchronous', date: '' },
      { id: 9, title: 'HTTP', date: '' },
      { id: 10, title: 'Streams və Buffers', date: '' },
      { id: 11, title: 'Express Basics', date: '' },
      { id: 12, title: 'Routing', date: '' },
      { id: 13, title: 'Request and Response objects', date: '' },
      { id: 14, title: 'Middlewares', date: '' },
      { id: 15, title: 'MongoDB basics', date: '' },
      { id: 16, title: 'Mongoose ORM', date: '' },
    ],
    az: [
      { id: 2, title: 'JavaScript əsasları', date: '' },
      { id: 3, title: 'Node.js -ə giriş', date: '' },
      { id: 4, title: 'File System (fs)', date: '' },
      { id: 5, title: 'Process', date: '' },
      { id: 6, title: 'Events və Event Emitter', date: '' },
      { id: 7, title: 'Path Modulu', date: '' },
      { id: 8, title: 'Asinxron', date: '' },
      { id: 9, title: 'HTTP', date: '' },
      { id: 10, title: 'Streams və Buffers', date: '' },
      { id: 11, title: 'Express əsasları', date: '' },
      { id: 12, title: 'Routing', date: '' },
      { id: 13, title: 'Request və Response obyektləri', date: '' },
      { id: 14, title: 'Middleware-lər', date: '' },
      { id: 15, title: 'MongoDB əsasları', date: '' },
      { id: 16, title: 'Mongoose ORM', date: '' },
    ],
  };

  const currentLessons = lessons[language] || lessons.en;

  return (
    <div className="lesson-container">
      <div className="lesson-grid">
        {currentLessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`lesson-card ${selectedLessonId === lesson.id ? 'active' : ''}`}
            onClick={() => setSelectedLessonId(lesson.id === selectedLessonId ? null : lesson.id)}
          >
            <div className="lesson-title">{lesson.title}</div>
            <div className="lesson-date">{lesson.date}</div>
          </div>
        ))}
      </div>
      <div className="th">
        <ThirdPart selectedLessonId={selectedLessonId} />
      </div>
    </div>
  );
};

export default SecondPart;
