// key
const KEYvoteA = 'HASIL-VOTE-A';

// pengecekan localstorage apakah tersedia?
if (typeof(Storage) !== 'undefined') {

    // 1 
    if(localStorage.getItem(KEYvoteA) === null){
        localStorage.setItem(KEYvoteA, 0);
    }
    // console.log(KEYvoteA)

    // 2
    const btnVoteA = document.querySelector('#btn-voteA');
    const hasilVoteA = document.querySelector('#hasil-votingA');
    console.log(typeof(btnVoteA))

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
