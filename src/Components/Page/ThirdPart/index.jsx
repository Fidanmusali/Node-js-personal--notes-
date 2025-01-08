import React, { useContext } from 'react';
import './style.css';
import LanguageContext from '../../../assets/Lang';
import img1 from '../../../../public/img/1.png';
import img2 from '../../../../public/img/2.png';
import img3 from '../../../../public/img/3.png';
import img4 from '../../../../public/img/4.png';
import img5 from '../../../../public/img/5.png';
import img6 from '../../../../public/img/6.png';
import img7 from '../../../../public/img/7.png';
import img8 from '../../../../public/img/8.png';
import img9 from '../../../../public/img/9.png';
import img10 from '../../../../public/img/10.png';
import img11 from '../../../../public/img/11.png';
import img12 from '../../../../public/img/12.png';
import img13 from '../../../../public/img/13.png';
import img14 from '../../../../public/img/14.png';
import img15 from '../../../../public/img/15.png';
import img16 from '../../../../public/img/16.png';







const ThirdPart = ({ selectedLessonId }) => {
  const { language } = useContext(LanguageContext);

  const lessonDetails = {
    2: {
      title: {
        en: 'What is JavaScript?',
        az: 'JavaScript Nədir?',
      },
      content: {
        en: 'JavaScript is a high-level, interpreted programming language that allows you to create dynamic content on web pages. It can be used for various tasks like interacting with HTML elements, validating forms, and building complex web applications.',
        az: 'JavaScript yüksək səviyyəli, təfsir olunan proqramlaşdırma dilidir və veb səhifələrində dinamik məzmun yaratmağa imkan verir. HTML elementləri ilə əlaqə yaratmaq, formaları yoxlamaq və mürəkkəb veb tətbiqləri yaratmaq üçün istifadə edilə bilər.',
      },
      topic1: {
        en: 'Setting Up JavaScript',
        az: "JavaScript-ə Başlamaq"
      },
      about1: {
        en: "You can add JavaScript directly into HTML using the <script> tag.",
        az: "JavaScript-i birbaşa HTML daxilində <script> etiketi ilə əlavə edə bilərsiniz."
      },
      topic2: {
        en: 'Variables',
        az: "Dəyişənlər"
      },
      about2: {
        en: "In JavaScript, we use variables to store data values. There are three main ways to declare variables: var, const, let",
        az: "JavaScript-də verilənləri saxlamaq üçün dəyişənlərdən istifadə olunur. Dəyişənləri üç fərqli üsulla elan edə bilərsiniz: var, const, let "
      },
      topic3: {
        en: 'Data Types',
        az: "Data Tipləri"
      },
      about3: {
        en: "JavaScript supports different types of data: Primitive Types: string, number, boolean, null, undefined, symbol. Complex Types: object, array, function",
        az: "JavaScript müxtəlif məlumat növlərini dəstəkləyir:Primitiv növlər: string, number, boolean, null, undefined, symbol. Kompleks növlər: object, array, function"
      },
      topic4: {
        en: 'Operators',
        az: "Operatorlar"
      },
      about4: {
        en: "JavaScript uses operators to perform operations on variables and values:Arithmetic Operators: +, -, *, /, % (modulo)Assignment Operators: =, +=, -=, etc.Comparison Operators: ==, ===, !=, >, <, >=, <= Logical Operators: && (and), || (or), ! (not)",
        az: "JavaScript-də operatorlar dəyişənlər və dəyərlər üzərində əməliyyat aparmaq üçün istifadə olunur:Riyazi operatorlar: +, -, *, /, % (modulo)Təyin etmə operatorları: =, +=, -=, və s.Müqayisə operatorları: ==, ===, !=, >, <, >=, <= Lojiq operatorlar: && (və), || (ya), ! (deyil)"
      },
      topic5: {
        en: 'Functions',
        az: "Funksiyalar"
      },
      about5: {
        en: "A function is a block of code designed to perform a specific task. You can pass data (arguments) to a function and receive a result (return value). Function declaration:",
        az: "Funksiya, müəyyən bir tapşırığı yerinə yetirmək üçün kod bloku yaradılmasına imkan verir. Funksiya daxilində verilənlər (argumentlər) ötürülə bilər və nəticə (return dəyəri) alına bilər. Funksiya elan edilməsi:"
      },
      topic6: {
        en: 'Conditional Statementst',
        az: "Şərtli Cümlələr"
      },
      about6: {
        en: "Conditional statements are used to perform different actions based on different conditions.",
        az: "Şərtli cümlələr fərqli şərtlərə əsaslanaraq fərqli əməliyyatlar yerinə yetirmək üçün istifadə olunur."
      },
      topic7: {
        en: 'Loops',
        az: "Dəyişkənlər"
      },
      about7: {
        en: "Loops allow you to repeat a block of code multiple times.",
        az: "Dəyişkənlər kodu bir neçə dəfə təkrarlamağa imkan verir."
      },
      topic8: {
        en: 'Arrays',
        az: "Massivlər"
      },
      about8: {
        en: "Arrays are used to store multiple values in a single variable.",
        az: "Massivlər bir dəyişəndə çoxlu dəyərləri saxlamağa imkan verir."
      },
      topic9: {
        en: 'Objects',
        az: "Obyektlər"
      },
      about9: {
        en: "Objects are used to store collections of data in key-value pairs.",
        az: "Obyektlər, açar-dəyər cütlərində məlumat toplamağa imkan verir."
      },
      topic10: {
        en: 'Error Handling',
        az: "Xəta ilə işləmə"
      },
      about10: {
        en: "JavaScript provides a way to catch and handle errors using try, catch, and finally",
        az: "JavaScript-də try, catch və finally vasitəsilə xətalarla işləmək mümkündür"
      },
      topic11: {
        en: 'DOM Manipulation',
        az: "DOM İdarəetməs"
      },
      about11: {
        en: "JavaScript allows you to interact with the HTML structure of a web page.",
        az: "JavaScript veb səhifəsinin HTML strukturu ilə əlaqə yaratmağa imkan verir."
      },
      topic12: {
        en: 'Events',
        az: "Events(Hadisələr)"
      },
      about12: {
        en: "JavaScript can be used to respond to user actions like clicks, typing, etc.",
        az: "JavaScript istifadəçi hərəkətlərinə, məsələn, klikləmə və yazmağa reaksiya verməyə imkan verir."
      },
      topic13: {
        en: 'ES6+ Features',
        az: "ES6+ Xüsusiyyətləri"
      },
      about13: {
        en: "JavaScript has evolved with new features like arrow functions, template literals, destructuring, and more.",
        az: "JavaScript yeni xüsusiyyətlərə sahibdir, məsələn, oxu funksiyaları, template literal-lar, destructuring və s."
      },
      image: img1,
      image1: img2,
      image2: img3,
      image3: img4,
      image4: img5,
      image5: img6,
      image6: img7,
      image7: img8,
      image8: img9,
      image9: img10,
      image10: img11,
      image11: img12,
      image12: img13,
    },
    4: {
      title: {
        en: 'A Detailed Guide to FS (File System)',
        az: 'FS (File System) haqqında ətraflı məlumat',
      },
      content: {
        en: 'FS (File System) is the system used to store, organize, and retrieve files and folders on computers and other electronic devices. File systems determine how data is stored and how it can be accessed. Each file system is associated with a specific structure for data, storage methods, file naming conventions, and other attributes.',
        az: 'FS (File System), kompüterlərdə və digər elektron cihazlarda fayl və qovluqların saxlanılması, təşkili və əldə edilməsi üçün istifadə olunan sistemdir. Fayl sistemləri, məlumatların necə saxlanacağını və onlara necə erişəcəyini müəyyən edir. Hər bir fayl sistemi məlumatın strukturu, saxlama metodları, fayl adlandırma qaydaları və digər xüsusiyyətləri ilə əlaqəlidir.',
      },
      topic1: {
        en: 'What is a File System?',
        az: "Fayl Sistemi Nədir?"
      },
      about1: {
        en: "A file system is the software that defines how an operating system handles, stores, and organizes files. Every operating system supports its own file system, such as Windows NTFS, macOS HFS+, and Linux ext4.",
        az: "Fayl sistemi, əməliyyat sisteminin fayllara necə baxacağını, onları necə saxlayacağını və təşkil edəcəyini təyin edən proqram təminatıdır. Hər bir əməliyyat sistemi öz fayl sistemini dəstəkləyir, məsələn, Windows NTFS, macOS HFS+ və Linux ext4 kimi."
      },
      topic2: {
        en: 'Functions of a File System',
        az: 'Fayl Sisteminin Funksiyaları'
      },
      about2: {
        en: "1.File Organization: The file system allows files to be stored in a structured manner, with metadata such as file names and sizes. 2.Memory Management: The file system allocates data across different sections of the disk, ensuring efficient use of memory. 3.Access Control: File systems manage operations like reading, writing, and deleting files. 4.Error Detection and Recovery: File systems provide mechanisms for detecting and recovering from errors to ensure data safety. 5.File Merging: File systems offer various methods to combine and link multiple files.",
        az: "1.Fayl Təşkilatı: Fayl sistemi faylları strukturlu şəkildə saxlamağa imkan verir. Faylların adları, ölçüləri və digər metadataları saxlanır. 2.Yaddaş İdarəetməsi: Fayl sistemi diskin müxtəlif bölmələrinə məlumatları yerləşdirir və yaddaşın səmərəli istifadəsini təmin edir. 3.Fayllara Giriş İdarəetməsi: Fayl sistemləri fayllara oxuma, yazma və silmə əməliyyatlarını idarə edir. 4.Xətaların Təşhisi və Bərpası: Fayl sistemləri, məlumatların təhlükəsizliyini təmin edərək xətaları tapmaq və bərpa etmək üçün mexanizmlər təqdim edir. 5.Fayl Birləşməsi: Fayl sistemləri, bir neçə faylın birləşdirilməsi və əlaqələndirilməsi üçün müxtəlif üsullar təklif edir."
      },
      topic3: {
        en: 'Popular File Systemsr',
        az: "Ən Populyar Fayl Sistemləri"
      },
      about3: {
        en: "1.NTFS (New Technology File System): Used in Windows operating systems. It offers enhanced security and advanced features.  2.FAT32 (File Allocation Table): Used in older operating systems but is not suitable for large volumes. 3.ext4: The most popular file system for Linux operating systems, providing strong performance and scalability.",
        az: "1.NTFS (New Technology File System): Windows əməliyyat sistemləri üçün istifadə olunur. Daha çox təhlükəsizlik və geniş xüsusiyyətlər təklif edir. 2.FAT32 (File Allocation Table): Əvvəlki əməliyyat sistemlərində istifadə edilmişdir, amma artıq geniş həcmlər üçün uyğun deyil.3.ext4: Linux əməliyyat sistemləri üçün ən populyar fayl sistemidir. Güclü performans və genişləndirilə bilənlik təmin edir."
      },
      topic4: {
        az: 'Fayl Sisteminin Əhəmiyyəti',
        en: "The Importance of File Systems"
      },
      about4: {
        en: "File systems ensure the organization and security of data. Proper storage and easy retrieval of data are crucial for the efficient operation of modern software and devices. Understanding file systems is also important for interoperability between different operating systems and ensuring compatibility in data exchange.",
        az: "Fayl sistemləri məlumatların təşkilini və təhlükəsizliyini təmin edir. Məlumatların düzgün saxlanması və asan əldə olunması üçün müasir proqramların və cihazların düzgün işləməsi üçün bu sistemlər vacibdir. Həmçinin, müxtəlif əməliyyat sistemləri arasında məlumat mübadiləsi və uyğunluq təmin etmək üçün fayl sistemlərinin anlayışına sahib olmaq önəmlidir."
      },
      topic5: {
        en: '',
        az: ""
      },
      about5: {
        en: "",
        az: ""
      },
      topic6: {
        en: '',
        az: ""
      },
      about6: {
        en: "",
        az: ""
      },
      topic7: {
        en: '',
        az: ""
      },
      about7: {
        en: "",
        az: ""
      },
      topic8: {
        en: '',
        az: ""
      },
      about8: {
        en: "",
        az: ""
      },
      topic9: {
        en: '',
        az: ""
      },
      about9: {
        en: "",
        az: ""
      },
      topic10: {
        en: '',
        az: ""
      },
      about10: {
        en: "",
        az: ""
      },
      topic11: {
        en: '',
        az: ""
      },
      about11: {
        en: "",
        az: ""
      },
      topic12: {
        en: '',
        az: ""
      },
      about12: {
        en: "",
        az: ""
      },
      topic13: {
        en: '',
        az: ""
      },
      about13: {
        en: "",
        az: ""
      },
      image: img14,
      image1: img15,
      image2: img16,
      image3: '',
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      image8: "",
      image9: "",
      image10: "",
      image11: "",
      image12: "",
    },
  };

  const lesson = lessonDetails[selectedLessonId];

  if (!lesson) {
    return <div className="default-message"></div>;
  }

  return (
    <div className="lesson-details">
      <h2>{lesson.title[language]}</h2>
      <p>{lesson.content[language]}</p>
      <h3>{lesson.topic1[language]}</h3>
      <p>{lesson.about1[language]}</p>
      {lesson.image && <img src={lesson.image} alt={lesson.title[language]} />}
      <h3>{lesson.topic2[language]}</h3>
      <p>{lesson.about2[language]}</p>
      {lesson.image && <img src={lesson.image1} alt={lesson.title[language]} />}
      <h3>{lesson.topic3[language]}</h3>
      <p>{lesson.about3[language]}</p>
      {lesson.image && <img src={lesson.image2} alt={lesson.title[language]} />}
      <h3>{lesson.topic4[language]}</h3>
      <p>{lesson.about4[language]}</p>
      {lesson.image && <img src={lesson.image12} alt={lesson.title[language]} />}
      <h3>{lesson.topic5[language]}</h3>
      <p>{lesson.about5[language]}</p>
      {lesson.image && <img src={lesson.image3} alt={lesson.title[language]} />}
      <h3>{lesson.topic6[language]}</h3>
      <p>{lesson.about6[language]}</p>
      {lesson.image && <img src={lesson.image4} alt={lesson.title[language]} />}
      <h3>{lesson.topic7[language]}</h3>
      <p>{lesson.about7[language]}</p>
      {lesson.image && <img src={lesson.image5} alt={lesson.title[language]} />}
      <h3>{lesson.topic8[language]}</h3>
      <p>{lesson.about8[language]}</p>
      {lesson.image && <img src={lesson.image6} alt={lesson.title[language]} />}
      <h3>{lesson.topic9[language]}</h3>
      <p>{lesson.about9[language]}</p>
      {lesson.image && <img src={lesson.image7} alt={lesson.title[language]} />}
      <h3>{lesson.topic10[language]}</h3>
      <p>{lesson.about10[language]}</p>
      {lesson.image && <img src={lesson.image8} alt={lesson.title[language]} />}
      <h3>{lesson.topic11[language]}</h3>
      <p>{lesson.about11[language]}</p>
      {lesson.image && <img src={lesson.image9} alt={lesson.title[language]} />}
      <h3>{lesson.topic12[language]}</h3>
      <p>{lesson.about12[language]}</p>
      {lesson.image && <img src={lesson.image10} alt={lesson.title[language]} />}
      <h3>{lesson.topic13[language]}</h3>
      <p>{lesson.about13[language]}</p>
      {lesson.image && <img src={lesson.image11} alt={lesson.title[language]} />}
    </div>
  );
};

export default ThirdPart;
