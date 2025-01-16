import img39 from '/public/img/39.png';


const lesson12 = {
    title: {
        en: "About Request and Response Objects",
        az: "Request və Response Obyektləri Haqqında",
    },
    content: {
        en: "In Node.js and Express.js, the Request and Response objects are used to handle HTTP requests and responses between the server and the client.",
        az: "Node.js və Express.js-də HTTP sorğularını (request) və cavablarını (response) idarə etmək üçün Request və Response obyektləri istifadə olunur. Bu obyektlər server və müştəri (client) arasında əlaqəni təmin edir."
    },
    topic1: {
        en: "",
        az: ""
    },
    about1: {
        en: ". Request (req): Contains information about the incoming request from the client, such as the URL, headers, HTTP method, body, and more.",
        az: "1. request (req): Müştəridən serverə göndərilən məlumatları ehtiva edir. Bu məlumatlara URL, başlıqlar (headers), sorğu metodu (GET, POST, və s.), bədən (body) və s. daxildir."
    },
    topic2: {
        en: "",
        az: ""
    },
    about2: {
        en: "2. Response (res): Used to send responses back to the client, including status codes, headers, and response bodies.",
        az: "2. Response (res): Serverin müştəriyə qaytardığı cavabı idarə edir. Bu cavab status kodlarını, başlıqları və cavab bədənini ehtiva edə bilər."
    },
    topic3: {
        en: "Request Object",
        az: "Request Obyekti"
    },
    about3: {
        en: "The key properties of the Request object include:",
        az: "Request obyekti ilə işləyə biləcəyiniz əsas xüsusiyyətlər bunlardır:"
    },
    topic4: {
        az: '',
        en: ""
    },
    about4: {
        en: "1. req.method - Returns the HTTP method (e.g., GET, POST).",
        az: "1. req.method - HTTP metodunu qaytarır (məsələn, GET, POST)"
    },
    topic5: {
        en: '',
        az: ""
    },
    about5: {
        en: "2. req.url - Returns the URL of the request.",
        az: "2. req.url - Sorğunun URL-ni qaytarır."
    },
    topic6: {
        en: '',
        az: ""
    },
    about6: {
        en: "3. req.params - Accesses dynamic parameters in the URL.",
        az: "3. req.params - Dinamik URL parametrlərinə daxil olmaq üçün istifadə olunur."
    },
    topic7: {
        en: '',
        az: ""
    },
    about7: {
        en: "4. req.query - Handles query string parameters.",
        az: "4. req.query - Sorğunun query string parametrlərini idarə edir."
    },
    topic8: {
        en: '',
        az: ""
    },
    about8: {
        en: "5. req.body - Contains the body of POST and PUT requests (requires middleware such as express.json()).",
        az: "5. req.body - POST və PUT sorğuları üçün məlumatları ehtiva edir (middleware tələb edir, məsələn express.json())."
    },
    topic9: {
        en: 'Response Object',
        az: "Response Obyekti"
    },
    about9: {
        en: "The key methods of the Response object include:",
        az: "Response obyekti ilə işləyə biləcəyiniz əsas xüsusiyyətlər bunlardır:"
    },
    topic10: {
        en: '',
        az: ""
    },
    about10: {
        en: "1. res.status(code) - Sets the status code of the response.",
        az: "1. res.status(code) - Cavab üçün status kodunu təyin edir."
    },
    topic11: {
        en: '',
        az: ""
    },
    about11: {
        en: "2. res.send(data) - Sends a response to the client (string, object, or HTML).",
        az: "2. res.send(data) - Müştəriyə cavab göndərir (string, object və ya HTML ola bilər)."
    },
    topic12: {
        en: '',
        az: ""
    },
    about12: {
        en: "3. res.json(data) - Sends a response in JSON format. 4. res.redirect(url) - Redirects the client to another URL. 5. res.set(header, value) - Adds a header to the response.",
        az: "3. res.json(data) - JSON formatında cavab göndərir. 4. res.redirect(url) - Müştərini başqa bir URL-ə yönləndirir. 5. res.set(header, value) - Cavab üçün başlıq əlavə edir. "
    },
    topic13: {
        en: 'Examples in Express.js',
        az: "Express.js-də Request və Response Nümunələri"
    },
    about13: {
        en: "",
        az: ""
    },
    images: {
        image13: img39
    }
}

export default lesson12