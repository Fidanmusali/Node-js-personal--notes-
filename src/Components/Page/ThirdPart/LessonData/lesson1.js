import img1 from '/public/img/1.png';
import img2 from '/public/img/2.png';
import img3 from '/public/img/3.png';
import img4 from '/public/img/13.png';
import img5 from '/public/img/4.png';
import img6 from '/public/img/5.png';
import img7 from '/public/img/6.png';
import img8 from '/public/img/7.png';
import img9 from '/public/img/8.png';
import img10 from '/public/img/9.png';
import img11 from '/public/img/10.png';
import img12 from '/public/img/11.png';
import img13 from '/public/img/12.png';



const lesson1 = {
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

  images: {
    image1: img1,
    image2: img2,
    image3: img3,
    image4: img4,
    image5: img5,
    image6: img6,
    image7: img7,
    image8: img8,
    image9: img9,
    image10: img10,
    image11: img11,
    image12: img12,
    image13: img13,
  },
};

export default lesson1;
