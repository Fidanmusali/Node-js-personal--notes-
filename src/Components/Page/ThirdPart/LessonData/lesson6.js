import img20 from '/public/img/20.png';
import img21 from '/public/img/21.png';
import img22 from '/public/img/22.png';
import img23 from '/public/img/23.png';
import img24 from '/public/img/24.png';



const lesson6 ={
 title: {
        en: 'What is Path Module?',
        az: 'Path Modulu nədir??',
    },
    content: {
        en: "The Path module in Node.js is a built-in module used for working with file and directory paths. This module allows you to analyze, join, normalize, and perform various operations on file and directory paths. The path module is especially useful when performing file system-related operations.",
        az: 'Node.js-də Path modulu, fayl və qovluq yolları ilə işləmək üçün istifadə olunan daxili bir moduldur. Bu modul, fayl və qovluq yollarını təhlil etməyə, birləşdirməyə, normal hala salmağa və müxtəlif əməliyyatlar aparmağa imkan verir. path modulu, xüsusilə fayl sisteminə aid əməliyyatları həyata keçirərkən çox faydalıdır.',
    },
    topic1: {
        en: 'Path Module',
        az: "Path Modulu"
    },
    about1: {
        en: "Node.js's path module provides many useful methods for analyzing and working with file paths. It can be used to manipulate paths, navigate through directories, and join files together.",
        az: "Node.js-in path modulu, fayl yollarını (file paths) təhlil etmək və işləmək üçün bir çox faydalı metodlar təqdim edir. Yolu manipulyasiya etmək, keçid etmək və faylları birləşdirmək üçün istifadə edilə bilər."
    },
    topic2: {
        en: 'Main Functions:',
        az: 'Əsas Funksiyalar:'
    },
    about2: {
        en: "",
        az: ""
    },
    topic3: {
        en: '1. path.join() - Joining Paths:',
        az: "1. path.join() - Yolları birləşdirmək:"
    },
    about3: {
        en: "This function helps to join multiple path segments into a single, valid path. In this example, path.join() combines the /home/user, documents, and file.txt into a valid path.",
        az: "Bu funksiya, bir neçə yol hissəsini birləşdirərək düzgün bir yol qurmağa kömək edir. Bu kodda path.join() ilə /home/user, documents, və file.txt yollarını birləşdiririk. Nəticə olaraq tam yol (absolute path) alırıq."
    },
    topic4: {
        az: '2. path.resolve() - Tam yolu müəyyən etmək:',
        en: "2. path.resolve() - Resolving Absolute Path:"
    },
    about4: {
        en: "This function resolves the given paths and returns the absolute path. Here, path.resolve() combines documents and file.txt into an absolute path based on the current working directory",
        az: "Bu funksiya, verilmiş yolları birləşdirərək tam yol qaytarır. Bu kodda, path.resolve() funksiyası documents və file.txt yollarını birləşdirərək, cari işçi qovluğundan (current working directory) tam yol yaradır."
    },
    topic5: {
        en: '3. path.basename() - Fayl adını əldə etmək:',
        az: "3. path.basename() - Extracting Filename:"
    },
    about5: {
        en: "This method extracts only the filename from a given path. In this example, path.basename() extracts the filename file.txt from the path.",
        az: "Bu metod, fayl yolundan yalnız fayl adını çıxarır. Bu kodda path.basename() fayl yolundan yalnız fayl adını file.txt çıxarır."
    },
    topic6: {
        en: '4. path.extname() - Extracting File Extension:',
        az: "4. path.extname() - Faylın uzantısını əldə etmək:"
    },
    about6: {
        en: "This method extracts the file extension. Here, path.extname() extracts the extension .txt from the given path.",
        az: "Bu metod, faylın uzantısını qaytarır. Bu kodda, path.extname() faylın uzantısını .txt kimi qaytarır."
    },
    topic7: {
        en: '5. path.dirname() - Extracting Directory Name:',
        az: "5. path.dirname() - Qovluq yolunu əldə etmək:"
    },
    about7: {
        en: "This method extracts the directory path where the file is located. In this example, path.dirname() returns the directory path /home/user/documents where the file is located.",
        az: "Bu metod, faylın yerləşdiyi qovluğun yolunu qaytarır. Bu kodda path.dirname() faylın yerləşdiyi qovluğun yolunu qaytarır."
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
        image3:img20,
        image4:img21,
        image5:img22,
        image6:img23,
        image7:img24
    }
}

export default lesson6