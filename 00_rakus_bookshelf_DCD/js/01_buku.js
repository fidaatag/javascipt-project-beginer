let bukuS = [];
const unCOMPLETED_BOOK = 'drafSedangDibaca';
const COMPLETED_BOOK = 'drafSudahTerbaca';
const BOOK_ITEM = 'itemID';

// mengolah input user menjadi identitas buku
const tambahBuku = () => {
    const uncompletedBOOK = document.getElementById(unCOMPLETED_BOOK);

    const inputJudul = document.getElementById('judul').value;
    const inputPenulis = document.getElementById('penulis').value;
    const inputTahun = document.getElementById('tahun').value;

    const buku = buatBuku(inputJudul, inputPenulis, inputTahun, false)
    const bukuOBJECT = composeBookOBJECT(inputJudul, inputPenulis, inputTahun, false)

    buku[BOOK_ITEM] = bukuOBJECT.id;
    bukuS.push(bukuOBJECT);

    uncompletedBOOK.append(buku);
    updateDataBuku();
}

// membuat identitas buku
const composeBookOBJECT = (judul, penulis, tahun, isCompleted) => {
    return {
        id: +new Date(),
        judul,
        penulis,
        tahun,
        isCompleted,
    }
}

const cariBuku = (bookID) => {
    for (buku of bukuS) {
        if (buku.id === bookID)
            return buku;
    }
    return null;
}

const cariBukuINDEX = (bookID) => {
    let index = 0
    for (buku of bukuS) {
        if (buku.id === bookID)
            return index;

        index++;    
    } 
    return -1;
}