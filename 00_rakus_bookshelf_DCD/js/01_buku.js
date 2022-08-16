let bukuS = [];
const unCOMPLETED_BOOK = 'drafSedangDibaca';
const COMPLETED_BOOK = 'drafSudahTerbaca';
const BOOK_ITEM = 'itemID';

// ******* mengolah input user menjadi identitas buku *******
const tambahBuku = () => {
    const uncompletedBOOK = document.getElementById(unCOMPLETED_BOOK);

    // value inputan pertama kali
    const inputJudul = document.getElementById('judul').value;
    const inputPenulis = document.getElementById('penulis').value;
    const inputTahun = document.getElementById('tahun').value;

    // const id = generateId() ----------- tidak dipakai
    const buku = buatBuku( inputJudul, inputPenulis, inputTahun, false)
    const bukuOBJECT = composeBookOBJECT( inputJudul, inputPenulis, inputTahun, false)

    // menggabungkan identitas buku dgn id unik
    buku[BOOK_ITEM] = bukuOBJECT.id;
    bukuS.push(bukuOBJECT);

    uncompletedBOOK.append(buku);
    updateDataBuku();
}

// ******* membuat id unik setiap buku *******
// function generateId() { return +new Date(); } ----------- tidak dipakai


// ******* membuat identitas buku *******
const composeBookOBJECT = (judul, penulis, tahun, isCompleted) => {
    return {
        id: +new Date(),
        judul,
        penulis,
        tahun,
        isCompleted,
    }
}

// ******* mencari id untuk setiap buku *******
const cariBuku = (bookID) => {
    for (buku of bukuS) {
        if (buku.id === bookID)
            return buku;
    }
    return null;
}

// ******* mencari posisi buku ke-? *******
const cariBukuINDEX = (bookID) => {
    let index = 0
    for (buku of bukuS) {
        if (buku.id === bookID)
            return index;

        index++;    
    } 
    return -1;
}
