const menusamping = document.querySelector('.menuSamping')

menusamping.addEventListener('click', ()=> {
    let timerInterval
    Swal.fire({
    title: 'Selamat Datang di RAKUS',
    html: 'Aplikasi RAKUS membantu kamu menyimpan koleksi buku. Buku yang sedang dibaca ataupun yang sudah selesai dibaca dapat disimpan dengan rapi. Sistem Rakus menggunakan local storage yang tersedia di setiap browser. Jadikan Rakus tempat terbaik mengelola buku-bukumu. ',
    timer: 5000,
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
    })
})



