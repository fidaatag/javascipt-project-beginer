const nameColorHEX = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
// #A44EDD
const btn = document.getElementById('btn')
const nameColor = document.querySelector('.nameColor')

btn.addEventListener('click', function(){
    // mendapatkan keyword hex seperti #D344F37F, 
    // ==> HEXbgColor[] akan dirandom lalu setiap nilai randomnya disusun/ berbari 6 item
    
    let hexColor = '#';
    for (let x =0; x <6; x++){
        hexColor += nameColorHEX[randomNumber()]
                    // nameColorHEX[10] => #BBBBBB
                    // nameColorHEX[5] => #666666
    }
    console.log(hexColor);


    // mengubah style bgc sesuai random
    // console.log(document.body); ==> <body> .... </body>
    document.body.style.backgroundColor = hexColor; 

    // membuat nama mengikuti perubahan warna
    nameColor.textContent = hexColor;
})

function randomNumber() {
    return Math.floor(Math.random() * nameColorHEX.length);
    // Math.random(); ==> hasilnya 0 - 1 ==> 0.99999
    // biar bisa sesuai dengan jumlah array nameColorHEX, maka dikalikan (*) 
    // namun hasilnya tidak bulat malah justru desimal => 0.9999 - 1.7966 - 4.645645
    // Math.floor(....) => bungkus dgn syntac itu agar bisa dibulatkan
}