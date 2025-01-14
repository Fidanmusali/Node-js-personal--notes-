import img18 from '/public/img/18.png';
import img19 from '/public/img/19.png';

const lesson5 = {
  title: {
    en: 'What is Event and EventEmitter?',
    az: 'Event və EventEmitter nədir?',
  },
  content: {
    en: "In Node.js, Event and EventEmitter are fundamental concepts used for handling events and creating custom event-driven applications. The EventEmitter class is provided by the events module in Node.js. It allows objects to emit events and listen for them, facilitating asynchronous communication between different parts of an application.",
    az: 'Node.js-də Event və EventEmitter anlayışları hadisələrə nəzarət etmək üçün çox faydalıdır. Bu, tətbiqdə baş verən müxtəlif fəaliyyətləri idarə etməyə və istifadəçiyə və ya sistemə uyğun şəkildə reaksiya verməyə imkan verir. Node.js-də EventEmitter obyektləri hadisələri təmsil edir və bu hadisələrə qulaq asmaq və ya onları "emit" (yaymaq) etmək üçün istifadə olunur. Bu, Node.js-in çoxsaylı funksiyaları üçün istifadə edilən əsas anlayışdır, məsələn, faylların oxunması, HTTP serverləri, verilənlər bazası əlaqələri və s.',
  },
  topic1: {
    en: 'Basic Concept:',
    az: "Əsas Konsept:"
  },
  about1: {
    en: "1. on(): Used to listen for an event. 2. emit(): Used to emit or trigger an event.",
    az: "1.Blok etməyən I/O modeli: Birdən çox sorğun eyni anda idarə edilməsini təmin edir. 2.Tək axın: Təkləmlik tədbir dövrəsi vasitəsilə sorğuları idarə edir. 3.Çoxplatformalı Uyğunluq: Windows, macOS və Linux kimi əsas əməliyyat sistemlərində işləyir. 4.NPM (Node Paket Meneceri): Minlərlə açıq mənbə kitabxanalarına çıxış təmin edir."
  },
  topic2: {
    en: 'Using EventEmitter in Node.js:',
    az: 'Node.js-də EventEmitter İstifadəsi:'
  },
  about2: {
    en: "In this example, we define an event called 'greet'. Then, we emit this event using myEmitter.emit('greet'), and we listen for the event using the on method. When the code runs, 'Hello, you greeted me!' will be printed to the console.",
    az: "Bu nümunədə, 'greet' adlı hadisə təyin edirik. Sonra myEmitter.emit('greet') ilə bu hadisəni yayırıq və on metodunda bu hadisəyə qulaq asmışıq. Bu kod çalışdıqda ekranda 'Salam, mənə salam dedin! mesajı' göstəriləcək."
  },
  topic3: {
    az: 'EventEmitter ilə Parametrlər (Parameters in EventEmitter):',
    en: "EventEmitter with Parameters (Parameters in EventEmitter):"
  },
  about3: {
    en: "In this example, we emit the 'message' event with a parameter. When the event is emitted, the parameter is passed to the on method and displayed in the console.",
    az: "Bu nümunədə, 'message' adlı hadisəyə bir parametr göndəririk. Hadisə yayıldıqda (emit) bu parametr on metodunun içində qəbul edilir və ekranda mesaj göstərilir."
  },
  topic4: {
    az: '',
    en: ""
  },
  about4: {
    en: "",
    az: ""
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
  images: {
    image2: img18,
    image3: img19
  }
}

export default lesson5