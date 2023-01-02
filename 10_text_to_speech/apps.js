const textarea = document.querySelector('#text');
let voicelist = document.querySelector('#voice');
let speechbtn = document.querySelector('.submit');

let synth = speechSynthesis;
let isSpeaking = true;


/*
secara default :
var speechSynthesis = SpeechSynthesis;

SpeechSynthesis 
@ speech API yg dapat digunakan untuk mengambil informasi tentang suara sintesis 
yang tersedia di perangkat, memulai dan menjeda ucapan, dan perintah lain selain itu. 

 speechSynthesis adalah property dari window (global) untuk membaca objet yang di return SpeechSynthesis
    maka dari itu secara default : var speechSynthesis = SpeechSynthesis
    contohnya :
        speechSynthesis.speak(new SpeechSynthesisUtterance(
        'Currently it is 3 o\'clock in the afternoon.'));
    hasilnya :
        browser akan mengeluarkan suara dari tulisan 
        'Currently it is 3 o\'clock in the afternoon.'
*/

speechbtn.addEventListener('click', (e) => {
    e.preventDefault();

    // cek apakah textarea sudah terisi ?
    if (textarea.value != '') {

        console.log(!synth.speaking); // true

        // 1. olah text dengan function texttospeech => true
        // why !synth.speaking ? karena speaking adalah properti dari SpeechSynthesis 
        // yang fungsinya untuk mengucapkan kata yang akan diproses, tetapi...
        // speking akan tetap berjalan meski sudah di pause
        // maka dari itu, menggunakna argumen !synth.speaking untuk control pemprosesannya
        // namun, saat argumen diubah menjadi synth.speaking suara tidak akan muncul
        if (!synth.speaking) { 
            texttospeech(textarea.value)
        } 

        console.log(!synth.speaking); // false
        
        // 2. jika panjang text >80 tambahkan fungsi resume dan pause
        if (textarea.value.length > 80) {
            if (isSpeaking) {
                synth.resume();
                isSpeaking = false;
                speechbtn.innerHTML = 'Pause Speech';
            } else {
                synth.pause()
                isSpeaking = true;
                speechbtn.innerHTML = 'Resume Speech';
            }

            // mengembalikan button bertulisan convert setelah text selesai dibaca
            setInterval(()=> {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true;
                    speechbtn.innerHTML = 'Convert To Speech';
                }
            })
        } 
        // else {   ---tidak terlalu berguna - jadi dihapus saja    
        //     speechbtn.innerHTML = 'Convert To Speech';   
        // }

    } else {
        let timerInterval
        Swal.fire({
        title: 'Please Enter Text!',
        html: 'It is will close in',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })
    }
})

synth.addEventListener('voiceschanged', voicespeech);




// ****** mengaktifkan select voice

function voicespeech() {
    for ( let voice of synth.getVoices()) {
        let option = document.createElement('option');
        option.text = voice.name;
        voicelist.add(option);
        console.log(option); // <option>Microsoft Anna - English (United States)</option>
        console.log(voice.name); // Microsoft Anna - English (United States)
    }
}

// ****** mengaktifkan textarea yang akan dibaca

function texttospeech(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    // pengaturan 
    utternance.volume = 1;  // 0.1 sampai 1
    utternance.rate = 8;    // 0.1 sampai 10 - kecepatan
    utternance.pitch = 2;   // 0 sampai 2 - nada berat / cempreng

    for (let voice of synth.getVoices()) {
        if (voice.name === voicelist.value) {
            utternance.voice = voice; // mengatur siapa pengisi suaranya
        }
    }
    speechSynthesis.speak(utternance);
}

// SpeechSynthesisUtterance berfungsi untuk merepresentasikan permintaan text yang akan diucapakan
// termasuk juga dengan pengaturan (kecepatan, volume, bahasa, nada)

// speechSynthesis.getVoices() digunakan untuk mengambil daftar list voice library apa saja di OS kita.

