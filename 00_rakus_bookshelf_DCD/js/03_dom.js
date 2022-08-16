const keySTORAGE = 'BUKU_TERSIMPAN';

// ******* Update Data Buku Terbaru Setiap Terjadi Perubahan *******
const updateDataBuku = () => {
    if(checkStorage())
        saveData();
}

// ******* mengecek storage browser *******
const checkStorage = () => {
    if(typeof(Storage) == undefined){
        alert('Browser kamu tidak support web storage');
        return false;
    } 
    return true;
}

// ******* memasukan data array ke local storage ==> setItem *******
const saveData = () => {
    const parseData = JSON.stringify(bukuS);
    localStorage.setItem(keySTORAGE, parseData);  //setItem(key, value)
    document.dispatchEvent(new Event('ondatasaved'));
}

// ******* mengubah ke JSON *******
const loadDatafromStorage = () => {
    const serialData = localStorage.getItem(keySTORAGE);
    const data = JSON.parse(serialData);

    if (data !== null)
        bukuS = data;
    
    document.dispatchEvent(new Event('ondataloaded'));
}

