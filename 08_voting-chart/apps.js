// key storage
KEYvoteA = 'HASIL-VOTE-A';
KEYvoteB = 'HASIL-VOTE-B';

// variabel click
const btnVoteA = document.querySelector('#btn-voteA');
const btnVoteB = document.getElementById('btn-voteB');

// variabel count display
const hasilVoteA = document.getElementById('hasil-votingA');
const hasilVoteB = document.getElementById('hasil-votingB');

// window.onload=cekStorage;
// window.onload = cekStorage(); ---- tidak bisa
btnVoteA.addEventListener('click', votingA());
btnVoteB.addEventListener('click', votingB());


// funtion
function votingA() {
    // cekStorage();
    let hitungA = localStorage.getItem(KEYvoteA);
    hitungA++;
    localStorage.setItem(KEYvoteA, hitungA);
    hasilVoteA.innerText = localStorage.getItem(KEYvoteA);
}


function votingB() {
    // cekStorage();
    let hitungB = localStorage.getItem(KEYvoteB);
    hitungB++;
    localStorage.setItem(KEYvoteB, hitungB);
    hasilVoteB.innerText = localStorage.getItem(KEYvoteB);
}

function cekStorage() {
    if (typeof(Storage) !== 'undefined'){

        if (localStorage.getItem(KEYvoteA) === null){
        localStorage.setItem(KEYvoteA, 0)
        }
        if (localStorage.getItem(KEYvoteB) === null){
            localStorage.setItem(KEYvoteB, 0)
        }

        // show zero on the first load
        hasilVoteA.innerText = localStorage.getItem(KEYvoteA);
        hasilVoteB.innerText = localStorage.getItem(KEYvoteB);

    } else {
        alert('Browser yang Anda gunakan tidak mendukung Web Storage'); 
    }
}

















/* 
btnVoteA.addEventListener('click', function(){

    if (typeof (Storage) !== 'undefined') {
        console.log(sessionStorage.getItem(KEYvoteA) === 'null')
        if (sessionStorage.getItem(KEYvoteA) === 'null') {
            sessionStorage.setItem(KEYvoteA, 0);
        }

        hasilVoteA.innerText = sessionStorage.getItem(KEYvoteA);


        let hitungA = sessionStorage.getItem(KEYvoteA);
        hitungA++;
        sessionStorage.setItem(KEYvoteA, hitungA);
        hasilVoteA.innerText = JSON.parse.getItem(KEYvoteA);
    } else {
        alert('Browser tidak mendukung Web Storage');
    }
    
});*/



