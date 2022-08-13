const bgColorBody = ['green', 'red', 'rgb(128, 139, 225)', '#F1F557']
const btn = document.getElementById('btn')
// const nameColor = document.getElementById('nameColor')
const nameColor = document.querySelector('.nameColor')

btn.addEventListener('click', function(){
    const random = randomNumber(); // acak nomer lalu dimasukan kedalam [ ]  
    console.log(random);

    // mengubah style bgc sesuai random
    // console.log(document.body); ==> <body> .... </body>
    document.body.style.backgroundColor = bgColorBody[random]; 

    // membuat nama mengikuti perubahan warna
    nameColor.textContent = bgColorBody[random];
})

function randomNumber() {
    return Math.floor(Math.random() * bgColorBody.length);
    // Math.random(); ==> hasilnya 0 - 1 ==> 0.99999
    // biar bisa sesuai dengan jumlah array bgColorBody, maka dikalikan (*) 
    // namun hasilnya tidak bulat malah justru desimal => 0.9999 - 1.7966 - 4.645645
    // Math.floor(....) => bungkus dgn syntac itu agar bisa dibulatkan
}