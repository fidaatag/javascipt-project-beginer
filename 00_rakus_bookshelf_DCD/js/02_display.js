//let bukuS = [];
//const unCOMPLETED_BOOK = 'drafSedangDibaca';
//const COMPLETED_BOOK = 'drafSudahTerbaca';
//const BOOK_ITEM = 'itemID';
const popUpContainer = document.querySelector('.popUpContainer'); // popup
const popUp_Editbuku = document.querySelector('.popUp_EditBuku');
const BtnTambahBuku = document.querySelector('.tambahBuku'); //icon + / button tambah + lalu pop Up
const popUpkeluar = document.querySelector('.btn-keluar'); //popup keluar


// ******* menampilkan pop up *******
BtnTambahBuku.addEventListener('click', () => {
    popUpContainer.classList.add('active');
});
popUpkeluar.addEventListener('click', () => {
    popUpContainer.classList.remove("active")
});


// ******* membuat div box buku baru *******
const buatBuku = ( judul, penulis, tahun, isCompleted) => {
    // -----  bisa ditambah img / tidak- sesuai kebutuhan ----- 
    const image = document.createElement('img');
    if (isCompleted) {
        image.setAttribute('src', 'img/rakbuku.png')
    } else {
        image.setAttribute('src', 'img/buku.png')
    }
    const imageBUKU = document.createElement('div');
    imageBUKU.classList.add('imageBUKU')
    imageBUKU.append(image)

    // ----- mulai dari sini, wajib ada yaa ----- 
    const judulBuku = document.createElement('h3');
    judulBuku.innerText = judul;

    const namaPenulis = document.createElement('p');
    namaPenulis.innerText = penulis;

    const tahunTerbit = document.createElement('small');
    tahunTerbit.innerText = tahun;

    // ----- membuatkan parent dari judul, penulis, tahun ----- 
    const detailBuku = document.createElement('div');
    detailBuku.classList.add('detailBuku')
    detailBuku.append(judulBuku, namaPenulis, tahunTerbit)

    // ----- membuatkan parent dari button ----- 
    const bTNCompleted = document.createElement('div');
    bTNCompleted.classList.add('btnSudahterbaca')
    bTNCompleted.append(createUnreadButton(), createTrashButton(), createEditButton())

    const bTN_unCompleted = document.createElement('div');
    bTN_unCompleted.classList.add('btnSedangdibaca')
    bTN_unCompleted.append(createReadButton(), createTrashButton(), createEditButton())

    // ----- membuatkan parent dari detailbuku, imgbuku, buttonbuku ----- 
    const boxTampilanBuku = document.createElement('div');
    boxTampilanBuku.classList.add('boxTampilanBuku');
    boxTampilanBuku.append(imageBUKU, detailBuku);
    // boxTampilanBuku.setAttribute('id', id ); ----- tidak digunakan

    // -----  membuat button setiap buku ----- 
    if (isCompleted) {
        boxTampilanBuku.append( bTNCompleted
            // createUnreadButton(),
            // createTrashButton(),
            // createEditButton()
        );
    } else {
        boxTampilanBuku.append( bTN_unCompleted
            // createReadButton(),
            // createTrashButton(),
            // createEditButton()
        );
    }
    return boxTampilanBuku;
}

// sekarang, menafsirkan perintah if(isCompleted)

// ******* ini @ konstanta untuk membuat button yang sekaligus addEventListener *******
const createButton = (buttonTypeClass, buttonName, iconButton, EventListener) => {

    const button = document.createElement('button');
    button.classList.add(buttonTypeClass);

    const iconBtn = document.createElement('i');
    iconBtn.classList.add('fas', iconButton);

    button.innerHTML = iconBtn.outerHTML+' '+buttonName;

    button.addEventListener('click', function (event) {
        EventListener(event);
    });
    return button;
}

// ******* button Selesai Baca *******
const createReadButton = () => {
    return createButton('readButton', 'Selesai', 'fa-check-circle',function (event) {
        addBookToCompleted(event.target.parentElement.parentElement);
    });
}
const addBookToCompleted = (bookElement) => {
    const bookCompleted = document.getElementById(COMPLETED_BOOK);

    const judulBuku = bookElement.querySelector('.detailBuku > h3').innerText;
    console.log(judulBuku)
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

// ******* button Hapus buku *******
const createTrashButton = () => {
    return createButton('trashBOOK', 'Hapus', 'fa-trash',function (event) {
        Swal.fire({
            title: 'Yakin ingin menghapus buku ini?',
            text: "Buku tidak bisa kembali lagi setelah dihapus",
            icon: 'Peringatan',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Tidak',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Terhapus!',
                'Berhasil menghapus buku',
                'success'
              )
              removeBookFromCompleted(event.target.parentElement.parentElement)
            }});
    });
}
const removeBookFromCompleted = (bookElement) => {
    const posisiBuku = cariBukuINDEX(bookElement[BOOK_ITEM]);
    bukuS.splice(posisiBuku, 1); //.splice(indexawal, mauDIhapusberapa, tambahapa1, tambahapa1, ...)
    bookElement.remove();

    updateDataBuku();
}

// ******* button baca lagi *******
const createUnreadButton = () => {
    return createButton('unreadButton', 'Baca', 'fa-sync-alt', function (event) {
        undoBookFromCompleted(event.target.parentElement.parentElement);
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

// ******* button edit buku *******
const createEditButton = () => {
    return createButton('editBOOK', 'Edit', 'fa-edit', function (event) {
        showeditBook(event.target.parentElement.parentElement);
    });
}
const showeditBook = (bookElement) => { 
    const book = cariBuku(bookElement[BOOK_ITEM]);
    // ----- mencari buku yg tepat yg akan diedit dan menampilkannya-----

    document.getElementById('edit-id').value =  bookElement[BOOK_ITEM];
    document.getElementById('judulEdit').value = book.judul;
    document.getElementById('penulisEdit').value = book.penulis;
    document.getElementById('tahunEdit').value = book.tahun;

    // ----- mengaktifkan button pada popUp edit -----
    const popUp_Editbuku = document.querySelector('.popUp_EditBuku');
    popUp_Editbuku.classList.add('active');

    const btnKeluar_Edit = document.querySelector('.btnKeluar_Edit');
    btnKeluar_Edit.addEventListener('click', function(){
        popUp_Editbuku.classList.remove('active');
    });

    // ----- evenlistener saat disubmit buku yg diedit -----
    const formEdit = document.getElementById('formEdit');
    formEdit.addEventListener('submit', (event) => {
        popUp_Editbuku.classList.remove('active');
        bookElement.remove()
       // event.preventDefault(); ---- tidak dipakai, membuat double input
        updateEditBuku() 
    });
}
const updateEditBuku = () => {
    // ----- setelah mendapatkan data editan dimasukan ke dalam variabel edit
    const idEdit = document.getElementById('edit-id').value;
    const judulEdit = document.getElementById('judulEdit').value;
    const penulisEdit =document.getElementById('penulisEdit').value;
    const tahunEdit = document.getElementById('tahunEdit').value;

    const bookposition = cariBukuINDEX(parseInt(idEdit));
    // ----- memasukan data variabel edit ke array dgn posisi yg sudah ditentukan
    bukuS[bookposition].judul = judulEdit;
    bukuS[bookposition].penulis = penulisEdit;
    bukuS[bookposition].tahun = tahunEdit;

    updateDataBuku();
    refreshDatafromBooks()
}


// ******* menyimpan data saat direfresh *******
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

// ******* menghitung jumlah panjang array buku *******
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


// ******* DOMLOADED *******
document.addEventListener('DOMContentLoaded', () => {

    const formTambah = document.getElementById('formTambah');
    formTambah.addEventListener('submit', function (event) {
        console.log(formTambah)
        event.preventDefault();
        popUpContainer.classList.remove('active');
        tambahBuku();
    });
    
        if (checkStorage()){
            loadDatafromStorage();
        }
});
