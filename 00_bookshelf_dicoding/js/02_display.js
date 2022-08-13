//let bukuS = [];
//const unCOMPLETED_BOOK = 'drafSedangDibaca';
//const COMPLETED_BOOK = 'drafSudahTerbaca';
//const BOOK_ITEM = 'itemID';
const popUpContainer = document.querySelector('.popUpContainer'); // popup
const popUp_Editbuku = document.querySelector('.popUp_EditBuku');
const BtnTambahBuku = document.querySelector('.tambahBuku'); //icon + / button tambah + lalu pop Up
const popUpkeluar = document.querySelector('.btn-keluar'); //popup keluar




// menampilkan pop up
BtnTambahBuku.addEventListener('click', () => {
    popUpContainer.classList.add('active');
});
popUpkeluar.addEventListener('click', () => {
popUpContainer.classList.remove("active")
});

// membuat div box buku baru
const buatBuku = (judul, penulis, tahun, isCompleted) => {
    // bisa ditambah img / tidak- sesuai kebutuhan
    const image = document.createElement('img');
    if (isCompleted) {
        image.setAttribute('src', 'img/rakbuku.png')
    } else {
        image.setAttribute('src', 'img/buku.png')
    }
    const imageBUKU = document.createElement('div');
    imageBUKU.classList.add('imageBUKU')
    imageBUKU.append(image)

    // mulai dari sini, wajib ada yaa

    const judulBuku = document.createElement('h3');
    judulBuku.innerText = judul;

    const namaPenulis = document.createElement('p');
    namaPenulis.innerText = penulis;

    const tahunTerbit = document.createElement('small');
    tahunTerbit.innerText = tahun;

    // membuatkan ortu dari ke-3nya
    const detailBuku = document.createElement('div');
    detailBuku.classList.add('detailBuku')
    detailBuku.append(judulBuku, namaPenulis, tahunTerbit)

    // membuat ortunya dari detail buku
    const boxTampilanBuku = document.createElement('div');
    boxTampilanBuku.classList.add('boxTampilanBuku');
    boxTampilanBuku.append(imageBUKU, detailBuku);
    boxTampilanBuku.setAttribute('id', '${bukuOBJECT.id}');


    if (isCompleted) {
        boxTampilanBuku.append(
            createUnreadButton(),
            createTrashButton(),
            createEditButton()
        );
    } else {
        boxTampilanBuku.append(
            createReadButton(),
            createTrashButton(),
            createEditButton()
        );
    }
    return boxTampilanBuku;
}

// sekarang, menafsirkan perintah if(isCompleted)
// ini @ konstanta yang sekaligus addEventListener
const createButton = (buttonTypeClass, buttonName, EventListener) => {

    const button = document.createElement('button');
    button.classList.add(buttonTypeClass);
    button.innerText = buttonName;

    button.addEventListener('click', function (event) {
        EventListener(event);
    });
    return button;
}

// button Selesai Baca
const createReadButton = () => {
    return createButton('readButton', 'Selesai', function (event) {
        addBookToCompleted(event.target.parentElement);
    });
}
const addBookToCompleted = (bookElement) => {
    const bookCompleted = document.getElementById(COMPLETED_BOOK);

    const judulBuku = bookElement.querySelector('.detailBuku > h3').innerText;
    const namaPenulis = bookElement.querySelector('.detailBuku > p').innerText;
    const tahunTerbit = bookElement.querySelector('.detailBuku > small').innerText;

    const bukuBaru = buatBuku(judulBuku, namaPenulis, tahunTerbit, true);
    const buku = cariBuku(bookElement[BOOK_ITEM]);
    buku.isCompleted = true;
    bukuBaru[BOOK_ITEM] = buku.id

    bookCompleted.append(bukuBaru);
    bookElement.remove();

    updateDataBuku();
}

// button Hapus buku 
const createTrashButton = () => {
    return createButton('trashBOOK', 'Hapus',function (event) {
        if (confirm('Yakin hapus koleksi Buku ini?')){
            removeBookFromCompleted(event.target.parentElement);
        } else {
            return;
        }
        
    });
}
const removeBookFromCompleted = (bookElement) => {
    const posisiBuku = cariBukuINDEX(bookElement[BOOK_ITEM]);
    bukuS.splice(posisiBuku, 1); //.splice(indexawal, mauDIhapusberapa, tambahapa1, tambahapa1, ...)
    bookElement.remove();

    updateDataBuku();
}

// button baca lagi
const createUnreadButton = () => {
    return createButton('unreadButton', 'Baca', function (event) {
        undoBookFromCompleted(event.target.parentElement);
    });
}
const undoBookFromCompleted = (bookElement) => {
    const listUnCompleted = document.getElementById(unCOMPLETED_BOOK);

    const judulBuku = bookElement.querySelector('.detailBuku > h3').innerText;
    const namaPenulis = bookElement.querySelector('.detailBuku > p').innerText;
    const tahunTerbit = bookElement.querySelector('.detailBuku > small').innerText;

    const bukuBaru = buatBuku(judulBuku, namaPenulis, tahunTerbit, false);
    const buku = cariBuku(bookElement[BOOK_ITEM]);
    buku.isCompleted = false;
    bukuBaru[BOOK_ITEM] = buku.id;

    listUnCompleted.append(bukuBaru);
    bookElement.remove();
    updateDataBuku();
}

// button edit buku - masih perlu revisi

const createEditButton = () => {
    return createButton('editBOOK', 'Edit',function (event) {
        editBook(event.target.parentElement);
    });
}

const editBook = () => {
    const popUp_Editbuku = document.querySelector('.popUp_EditBuku');
    popUp_Editbuku.classList.add('active');
    //detailEditBuku();

    const btnKeluar_Edit = document.querySelector('.btnKeluar_Edit');
    btnKeluar_Edit.addEventListener('click', function(){
        popUp_Editbuku.classList.remove('active');
    });
}
/*
const detailEditBuku = () =>{
    const IDbuku = document.getElementById('.boxTampilanBuku').id;
    //bukuS.filter((item) => item.id);
    console.log(IDbuku);

    const formEdit = document.getElementById('formEdit');
    const itemBuku = cariBuku(Number(IDbuku));

    const showJudulEdit = document.getElementById('judulEdit');
    const showPenulisEdit = document.getElementById('penulisEdit');
    const showTahunEdit = document.getElementById('tahunEdit');

    showJudulEdit.value = itemBuku.judul;
    showPenulisEdit.value = itemBuku.penulis;
    showTahunEdit = itemBuku.tahun;

    formEdit.addEventListener('submit', (event) => {
        event.preventDefault();
        updateEditBuku();
    });
}

const updateEditBuku = () => {
    const bukuTarget = cariBuku(Number(bukuID))
    if (bukuTarget == null) return;

    const updateJudulEdit = document.getElementById('judulEdit');
    const updatePenulisEdit = document.getElementById('penulisEdit');
    const updateTahunEdit = document.getElementById('tahunEdit');

    bukuTarget.judul = updateJudulEdit;
    bukuTarget.penulis = updatePenulisEdit;
    bukuTarget.tahun = updateTahunEdit;

    document.dispatchEvent(new Event('ondatasaved'));
    updateDataBuku();
}
*/

// menyimpan data saat direfresh
const refreshDatafromBooks = () => {
    const bookUNCompleted = document.getElementById(unCOMPLETED_BOOK);
    const bookCompleted = document.getElementById(COMPLETED_BOOK);

    for (buku of bukuS) {
        const bukuBaru = buatBuku(buku.judul, buku.penulis, buku.tahun, buku.isCompleted);
        bukuBaru[BOOK_ITEM] = buku.id;

        if (buku.isCompleted) {
            bookCompleted.append(bukuBaru);
        } else {
            bookUNCompleted.append(bukuBaru);
        }
    }
}

// menghitung jumlah panjang array buku
const getJumlahBukuDibaca = () => {
    const jumlahBukuDibaca = document.getElementById('angkajumlahDibaca');
    jumlahBukuDibaca.innerText = bukuS.filter((item) => item.isCompleted == false).length;
    return jumlahBukuDibaca;
}
const getJumlahBukuSudahTerbaca = () => {
    const JumlahBukuSudahTerbaca = document.getElementById('angkajumlahTerbaca');
    JumlahBukuSudahTerbaca.innerText = bukuS.filter((item) => item.isCompleted == true).length;
    return JumlahBukuSudahTerbaca;
}

document.addEventListener('ondatasaved', () => {
    console.log('Data berhasil disimpan.');
    console.log(bukuS);
    getJumlahBukuDibaca();
    getJumlahBukuSudahTerbaca();
});

document.addEventListener('ondataloaded', () => {
    refreshDatafromBooks();
    getJumlahBukuDibaca();
    getJumlahBukuSudahTerbaca();
});

// DOMLOADED
document.addEventListener('DOMContentLoaded', () => {

    const formTambah = document.getElementById('formTambah');
    formTambah.addEventListener('submit', function (event) {
        event.preventDefault();
        popUpContainer.classList.remove('active');
        tambahBuku();
    });
    
        if (checkStorage()){
            loadDatafromStorage();
        }
});