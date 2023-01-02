const KEYvoteA = 'HASIL-VOTE-A';
const KEYvoteB = 'HASIL-VOTE-B';

// vote A
if (typeof(Storage) !== 'undefined') {
    voteA()
    voteB()
    /*
    // 1 
    if(localStorage.getItem(KEYvoteA) === null){
        localStorage.setItem(KEYvoteA, 0);
    }

    // 2
    const btnVoteA = document.querySelector('#btn-voteA');
    const hasilVoteA = document.querySelector('#hasil-votingA');

    // 3
    hasilVoteA.innerText= localStorage.getItem(KEYvoteA);
    console.log(hasilVoteA.textContent)

    // 4
    btnVoteA.addEventListener('click', function(){
        let hitungA = localStorage.getItem(KEYvoteA);
        hitungA++;
        localStorage.setItem(KEYvoteA, hitungA);
        hasilVoteA.innerText = localStorage.getItem(KEYvoteA);
    });
    */
} else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage');
}

/*
// vote B
if (typeof(Storage) !== 'undefined') {

    // 1 
    if(localStorage.getItem(KEYvoteB) === null){
        localStorage.setItem(KEYvoteB, 0);
    }

    // 2
    const btnVoteB = document.querySelector('#btn-voteB');
    const hasilVoteB = document.querySelector('#hasil-votingB');

    // 3
    hasilVoteB.innerText= localStorage.getItem(KEYvoteB);

    // 4
    btnVoteB.addEventListener('click', function(){
        let hitungB = localStorage.getItem(KEYvoteB);
        hitungB++;
        localStorage.setItem(KEYvoteB, hitungB);
        hasilVoteB.innerText = localStorage.getItem(KEYvoteB);
    });
} else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage');
}
*/

function voteA(){

    if(localStorage.getItem(KEYvoteA) === null){
        localStorage.setItem(KEYvoteA, 0);
    }

    // 2
    const btnVoteA = document.querySelector('#btn-voteA');
    const hasilVoteA = document.querySelector('#hasil-votingA');

    // 3
    hasilVoteA.innerText= localStorage.getItem(KEYvoteA);
    console.log(hasilVoteA.textContent)

    // 4
    btnVoteA.addEventListener('click', function(){
        let hitungA = localStorage.getItem(KEYvoteA);
        hitungA++;
        localStorage.setItem(KEYvoteA, hitungA);
        hasilVoteA.innerText = localStorage.getItem(KEYvoteA);
    });
}

function voteB() {

    // 1 
    if(localStorage.getItem(KEYvoteB) === null){
        localStorage.setItem(KEYvoteB, 0);
    }

    // 2
    const btnVoteB = document.querySelector('#btn-voteB');
    const hasilVoteB = document.querySelector('#hasil-votingB');

    // 3
    hasilVoteB.innerText= localStorage.getItem(KEYvoteB);

    // 4
    btnVoteB.addEventListener('click', function(){
        let hitungB = localStorage.getItem(KEYvoteB);
        hitungB++;
        localStorage.setItem(KEYvoteB, hitungB);
        hasilVoteB.innerText = localStorage.getItem(KEYvoteB);
    });

}