const BTNpencarian = document.getElementById('btnSearch');

BTNpencarian.addEventListener('click', (e) => {
        const searchBox = document.getElementById('mencariBuku').value.toLowerCase();
        const title = document.querySelectorAll('.detailBuku');

        for (buku of title) {
            const judul = buku.firstElementChild.textContent.toLowerCase();

            console.log(judul);

            if (judul.includes(searchBox)) {
                buku.parentElement.style.visibility = 'visible';
            } else {
                buku.parentElement.style.display = 'none';
            }
        }
        e.preventDefault();
});