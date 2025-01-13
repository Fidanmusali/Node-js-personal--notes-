import React, { useContext } from 'react';
import lesson1 from './LessonData/lesson1'; 
import lesson2 from './LessonData/lesson2'; 
import LanguageContext from '../../../assets/Lang';
import "./style.css"

const ThirdPart = ({ selectedLessonId }) => {
  const { language } = useContext(LanguageContext);

  const LessonData = {
    1: lesson1,
    2: lesson2,
  };

  const lesson = LessonData[selectedLessonId];

  if (!selectedLessonId) {
    return <div className="third-part"></div>;
  }

  return (
    <div className="third-part1">
      <h2>{lesson.title[language]}</h2>
      <p>{lesson.content[language]}</p>

      {/* Topic 1 */}
      <h3>{lesson.topic1[language]}</h3>
      <p>{lesson.about1[language]}</p>
      {lesson.images.image1 &&  <img src={lesson.images.image1} alt="Image 1" />} 

      {/* Topic 2 */}
      <h3>{lesson.topic2[language]}</h3>
      <p>{lesson.about2[language]}</p>
      {lesson.images.image2 &&  <img src={lesson.images.image2} alt="Image 2" />}

      {/* Topic 3 */}
      <h3>{lesson.topic3[language]}</h3>
      <p>{lesson.about3[language]}</p>
      {lesson.images.image3 &&  <img src={lesson.images.image3} alt="Image 3" />}

      {/* Topic 4 */}
      <h3>{lesson.topic4[language]}</h3>
      <p>{lesson.about4[language]}</p>
      {lesson.images.image4 &&  <img src={lesson.images.image4} alt="Image 4" />}

      {/* Topic 5 */}
      <h3>{lesson.topic5[language]}</h3>
      <p>{lesson.about5[language]}</p>
      {lesson.images.image5 &&  <img src={lesson.images.image5} alt="Image 5" />}

      {/* Topic 6 */}
      <h3>{lesson.topic6[language]}</h3>
      <p>{lesson.about6[language]}</p>
      {lesson.images.image6 &&  <img src={lesson.images.image6} alt="Image 6" />}

      {/* Topic 7 */}
      <h3>{lesson.topic7[language]}</h3>
      <p>{lesson.about7[language]}</p>
      {lesson.images.image7 &&  <img src={lesson.images.image7} alt="Image 7" />}

      {/* Topic 8 */}
      <h3>{lesson.topic8[language]}</h3>
      <p>{lesson.about8[language]}</p>
      {lesson.images.image8 &&  <img src={lesson.images.image8} alt="Image 8" />}

      {/* Topic 9 */}
      <h3>{lesson.topic9[language]}</h3>
      <p>{lesson.about9[language]}</p>
      {lesson.images.image9 &&  <img src={lesson.images.image9} alt="Image 9" />}

      {/* Topic 10 */}
      <h3>{lesson.topic10[language]}</h3>
      <p>{lesson.about10[language]}</p>
      {lesson.images.image10 &&  <img src={lesson.images.image10} alt="Image 10" />}

      {/* Topic 11 */}
      <h3>{lesson.topic11[language]}</h3>
      <p>{lesson.about11[language]}</p>
      {lesson.images.image11 &&  <img src={lesson.images.image11} alt="Image 11" />}

      {/* Topic 12 */}
      <h3>{lesson.topic12[language]}</h3>
      <p>{lesson.about12[language]}</p>
      {lesson.images.image12 &&  <img src={lesson.images.image12} alt="Image 12" />}

      {/* Topic 13 */}
      <h3>{lesson.topic13[language]}</h3>
      <p>{lesson.about13[language]}</p>
      {lesson.images.image13 &&  <img src={lesson.images.image13} alt="Image 13" />}
    </div>
  );
};

export default ThirdPart;
