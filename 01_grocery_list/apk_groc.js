// **********  SELECT ITEM  **********
// variabel input form
const formGrocery = document.getElementById('formGrocery');
const keterangan = document.getElementById('keterangan');
const inputList = document.getElementById('inputList');
const submitList = document.getElementById('submitList');
// variabel daftar list 
const boxList = document.getElementById('boxList')
const groceryList = document.getElementById('groceryList'); // hidden
const clearListBtn = document.getElementById('clearListBTN');
// variabel edit ???
let editElement;        // variabel tanpa deklarasi ==> udefined
let editFlag = false;    // untuk menentukan apakah ini list edit / tambah
let editID = '';        // nilainya kosong tipenya string ==> (  ) tidak NaN, tidak Null, tidak Undefined


// ********** EVENTLISTENER **********

// membuat action!
formGrocery.addEventListener('submit', tambahList); // tambah List
clearListBtn.addEventListener('click', hapusSemua); // hapus semua list
window.addEventListener('DOMContentLoaded', loadRefresh); // data ttp muncul saat di refresh


// ********** FUNCTION  **********

// tambah list
function tambahList(e){
    e.preventDefault();
    const valueInput = inputList.value;
     // console.log(valueInput); ==> apa yang diinput masuk ke console
    const id = new Date().getTime().toString();
    /* console.log(id); ==> membuat id unik setiap item yg ditambah dlm bentuk string

        dalam kolom input terdapat 3 option :
        1. menambah list, artinya editFlag = false ==> krn tidak melakukan editing
        2. mengedit list, artinya editFlag = true  ==> krn melakukan editing
        3. tidak melakukan apa2 dan tidak ada input, maka muncul keterangan 'Tolong Isi Dulu'

           1 ==> if (valueInput !== '' && editFlag === False){}
                    ... saat nilai input tidak kosong (Not empty) dan tidak melakukan edit

           2 ==> else if (valueInput !== '' && editFlag === True){}
                    ... saat nilai input tidak kosong (Not empty) dan melakukan edit

           3 ==> else {}
                    ... saat tidak ada nilai yang diinput (empty)
     */

    if (valueInput !== '' &&  editFlag === false){ // false + false = false
        // console.log('add your list')
        createListItem(id, valueInput);
        /*
        // code dibawah ini adalah createListItem yang dijadikan function dibwah
        const newElement = document.createElement('div');
        newElement.classList.add('listItem') // add id seperti class
        
        const attr = document.createAttribute('data-id');
        attr.value = id;

        newElement.setAttributeNode(attr);
        newElement.innerHTML = 
        `<p> ${valueInput} </p> 
        <div class="allBTN">
            <button class="editBTN">edit</button> 
            <button class="hapusBTN">hapus</button>
        </div>`;

        const editBTN = newElement.querySelector('.editBTN');
        const hapusBTN = newElement.querySelector('.hapusBTN');
        editBTN.addEventListener('click', editList);
        hapusBTN.addEventListener('click', hapusList);

        // apendChild ==> (sekolah, pulang, makan, ngaji) ==> sekolah.apenChild(pulang, makan, ngaji)
        groceryList.appendChild(newElement); // setelah groceryList adalah newElement
        */
        displayKeterangan('List Belanja Berhasil Ditambahkan', 'hijau');

        // memunculkan list yang terhidden
        boxList.style.visibility = 'visible';
        // add local storage
        addLocalStorage(id, valueInput);
        // set back to default
        setBackToDefault(); // untuk membuat input menjadi kosong/ seperti awal


    }
    else if (valueInput !== '' &&  editFlag === true){ // false + true = true
        // console.log('edit your choice list')
        editElement.innerHTML = valueInput; // menampilkan hasil edit 
        displayKeterangan('value change', 'hijau');      
        // edit local storage
        editLocalStorage(editID, valueInput);
        setBackToDefault();
    }
    else {
        displayKeterangan('Tolong Isi Dulu', 'merah')
        /*
        // keterangan.textContent = 'Tolong Isi Dulu';
        // keterangan.classList.add('tolongIsi');
        // console.log('empty Value')
        */
    }
}
// function edit list
function editList(e){
    // console.log('edit item ini');
    const elementA= e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set from value
    inputList.value = editElement.innerHTML;
    editFlag = true;
    editID = elementA.dataset.id;
    submitList.textContent = 'edit';
}
// function hapus list
function hapusList(e){
    // console.log('hapus item ini');
    // mencari element yg tepat dan spesifik dgn currentTarget 
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    groceryList.removeChild(element);
    if (groceryList.children.length === 0){
        boxList.style.visibility = 'hidden';
    }
    displayKeterangan('list chois its remove!', 'merah');
    setBackToDefault();

    // remove from local storage
    removeFromLocalStorage(id);
}

// function hapus
function hapusSemua(){
    // console.log('hapus');
    // menentukan element yg akan dihapus
    const clearitem = document.querySelectorAll('.groceryList');

    // hapus semua elemeny yg ber id listitem
    if (clearitem.length > 0) {
        clearitem.forEach(function (item){ // sema seperti fo in
            boxList.removeChild(item);
        });
    }
    boxList.style.visibility = 'hidden';
    displayKeterangan('semua list sudah terhapus', 'merah')
    localStorage.removeItem('boxList');
    setBackToDefault();
}

// function display keterangan 
function displayKeterangan(text, action){
    keterangan.textContent = text;
    keterangan.classList.add(`keterangan-${action}`);

    // remove keterangan  ==> setTimeout(function, milliseconds) 1 second = 1000
    setTimeout(function(){
        keterangan.textContent = "";
        keterangan.classList.remove(`keterangan-${action}`);
    }, 1000)
}

// function set back to default
function setBackToDefault(){
    // console.log('set back to default');
    inputList.value = '';
    editFlag = false;
    editID = '';
    submitList.textContent = 'submit';
}



// ********** LOCAL STORAGE **********
function addLocalStorage(id, valueInput){
    const grocery = { id, valueInput};
    let items = getLocalStorage();
    // localStorage.getItem('boxList') ? JSON.parse(localStorage.getItem('boxList')) :[] ; 
    // let items = localStorage.getItem('boxList') ? :[] ;
    // ............ jika menggunakan getItem harus menggunakan JSON.parse
    // .... let item = ... mengecek ==> apakah let item memiliki value?
    // jika iya gunakan JSON.parse untuk akses getItem
    // jika tidak let item is empty - kosong - bukan null
    // harusnya saat digunakan pertama kali valuenya empty
    // [] ==> ini dimaksudkan saat pertama kali input data maka hasilnya empty,
    // lalu jadi [{..}] saat data kedua dimasukan 

    items.push(grocery); // value dari grocery dimasukan ke item
    localStorage.setItem('boxList', JSON.stringify(items)) 
    // setelah items memiliki value, saatnya mengubah boxlist (item value) dg string 
    // local storage / server web hanya mampu membaca dlm bentuk string
    // console.log(typeof(items)); // => object, maka untuk menyimpan data di local storage gunakan JSON.stringify()
    // JSON.parse() - untuk terima data - kita lebih mudah olah dg type objec
    // JSON.stringify() - untuk kirim data atau simpan data di localStorage  - server minta typenya string

    // console.log(items) => null artinya tidak ada list
    //console.log('add your list to local storage, succes!')
}
function removeFromLocalStorage(id){
    let items = getLocalStorage(); // cek locak storage, lihat keterangan sebelumnya

    items = items.filter(function (item){ // filter id item yg akan dihapus
        if (item.id !== id){
            return item;
        }
    })

    localStorage.setItem('boxList', JSON.stringify(items)) // simpan di local strorage
}
function editLocalStorage(id, valueInput){
    let items = getLocalStorage();
    
    items = items.map(function(item){
        if(item.id === id){
            item.valueInput = valueInput;
        }
        return item;
    });
    console.log(items);
    localStorage.setItem('boxList', JSON.stringify(items))
}
function getLocalStorage(){ // untuk cek local storage apakah ada isinya atau tidak.
    return localStorage.getItem('boxList') ? JSON.parse(localStorage.getItem('boxList')) :[] ; 
}

// localStorage API 
// setItem
// getItem
// remocveItem
// save as strings
/*
localStorage.setItem('orange', JSON.stringify(['ayam', 'telur']));
const oranges = JSON.parse(localStorage.getItem('orange'));
console.log(oranges)
localStorage.removeItem('orange');
*/


// ********** LOAD REFRESH **********
function loadRefresh(){
    let items = getLocalStorage(); // cek dulu isi storagenya

    if (items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.valueInput)
        });
        boxList.style.visibility = 'visible';
    }
}

function createListItem(id, valueInput){
    const newElement = document.createElement('div');
        newElement.classList.add('listItem') // add id seperti class
        
        const attr = document.createAttribute('data-id');
        attr.value = id;

        newElement.setAttributeNode(attr);
        newElement.innerHTML = 
        `<p> ${valueInput} </p> 
        <div class="allBTN">
            <button class="editBTN">edit</button> 
            <button class="hapusBTN">hapus</button>
        </div>`;

        const editBTN = newElement.querySelector('.editBTN');
        const hapusBTN = newElement.querySelector('.hapusBTN');
        editBTN.addEventListener('click', editList);
        hapusBTN.addEventListener('click', hapusList);

        // apendChild ==> (sekolah, pulang, makan, ngaji) ==> sekolah.apenChild(pulang, makan, ngaji)
        groceryList.appendChild(newElement); // setelah groceryList adalah newElement
}
     
