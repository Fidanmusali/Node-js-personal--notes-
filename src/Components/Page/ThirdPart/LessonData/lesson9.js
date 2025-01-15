import img31 from '/public/img/31.png';
import img32 from '/public/img/32.png';

const lesson9 = {
    title: {
        en: 'About Streams and Buffers',
        az: 'Streams və Buffers haqqında',
    },
    content: {
        en: "Streams and Buffers are essential concepts in JavaScript that help optimize data handling, especially when working with large files or data flows. Let's take a closer look at what they are and how they're used in JavaScript.",
        az: 'Streams və Buffers JavaScript-də məlumatların işlənməsini effektivləşdirmək üçün vacib konseptlərdir. Bu anlayışlar xüsusilə böyük faylların və məlumat axınlarının işlənməsində performansı artırır. Əvvəlcə, hər iki anlayışın nə olduğunu və onların JavaScript-də necə istifadə edildiyini daha yaxından araşdıraq.',
    },
    topic1: {
        en: 'What is a Stream?',
        az: "Streams nədir?"
    },
    about1: {
        en: "A stream is a flow of data that can be read from or written to in chunks, rather than all at once. For instance, you can use a stream to read a file or send data over the network. Streams allow you to process data as it's being received or sent, rather than waiting for the entire dataset to be loaded into memory, making them more efficient for large amounts of data.",
        az: "Bir stream, məlumatların bir vaxtda bir hissəsini oxumaq və ya yazmaq üçün istifadə olunan bir axındır. Məsələn, bir fayl oxumaq və ya şəbəkə üzərindən məlumat göndərmək üçün bir stream istifadə edə bilərsiniz. Streams, məlumatların tam olaraq yüklənmədən işlənməsini təmin edir, beləliklə yaddaş istifadəsini optimallaşdırır."
    },
    topic2: {
        en: 'Streams are divided into 4 types:',
        az: 'Streams 4 növə ayrılır:'
    },
    about2: {
        az: "1. Readable Streams: Məlumatı oxumağa imkan verir. Məsələn, bir fayl və ya HTTP sorğusunun cavabı.",
        en: "1. Readable Streams: Allows reading data. For example, reading a file or an HTTP response."
    },
    topic3: {
        en: '',
        az: ""
    },
    about3: {
        az: '2. Writable Streams: Məlumat yazmağa imkan verir. Məsələn, bir fayla məlumat yazmaq.',
        en: "2. Writable Streams: Allows writing data. For example, writing to a file."
    },
    topic4: {
        az: '',
        en: ""
    },
    about4: {
        az: '3. Duplex Streams: Eyni anda həm oxumağa, həm də yazmağa imkan verir.',
        en: "3. Duplex Streams: Allows both reading and writing at the same time."
    },
    topic5: {
        en: '',
        az: ""
    },
    about5: {
        en: '4. Transform Streams: Streams that allow both reading and modifying the data.',
        az: "4. Transform Streams: Məlumatı həm oxuyub, həm də dəyişdirə bilən stream-lərdir."
    },
    topic6: {
        en: 'What is a Buffer?',
        az: "Buffers nədir?"
    },
    about6: {
        en: 'A Buffer is a temporary storage area for binary data. In JavaScript, buffers are used to handle raw binary data, such as images or files. Buffers are a fixed size and are used to store data that needs to be processed in chunks.',
        az: "Buffer isə JavaScript-də müəyyən ölçüdəki məlumatları müvəqqəti saxlayan bir qurğudur. Buffers, xüsusilə binary məlumatları (məsələn, şəkillər və ya fayllar) işləməkdə çox faydalıdır. Buffer-lər bir dəfə müəyyən edilən ölçüdə məlumat saxlayır və ardıcıl əməliyyatlar üçün istifadə olunur."
    },
    topic7: {
        en: 'Code Example (for Streams)',
        az: "Kod Nümunəsi (Code Example)"
    },
    about7: {
        en: 'Here’s an example of using a readable stream to read from a file: In this example, fs.createReadStream is used to read data from a file. The data event is triggered every time a chunk of data is read, and the end event indicates the completion of the read operation.',
        az: "Aşağıda bir fayldan məlumat oxumaq üçün bir stream istifadə edən nümunə təqdim olunur:  Bu nümunədə, fs.createReadStream ilə bir fayldan məlumat oxuyuruq. data hadisəsi hər bir parça məlumat oxunduqda tetiklenir, end hadisəsi isə oxuma prosesinin bitdiyini bildirir."
    },
    topic8: {
        en: 'Working with Buffers:',
        az: "Buffer ilə işləmək:"
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
        image7: img31,
        image8: img32,

    },
}

export default lesson9