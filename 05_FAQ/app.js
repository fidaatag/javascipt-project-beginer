 // using selector inside the element
 const PERquestion = document.querySelectorAll('.PERquestion');

 //loping
 PERquestion.forEach(function(questionColom){
    // console.log(questionColom); 
    const btn = questionColom.querySelector('.allBtn');
    // console.log(btn);

    btn.addEventListener('click', function(){
        PERquestion.forEach(function(e){
            if (e !== questionColom){
            e.classList.remove('show-text');
            }
        });
        questionColom.classList.toggle('show-text')
    }); 
 });
 
 
 // traversng the dom - 
 // masih bisa tapi tidak otomatik terbuka jika yg lain dibuka
//  allBtn = document.querySelectorAll('.allBtn');
 
//  allBtn.forEach(btnKlik => {
//     btnKlik.addEventListener('click', e => {
//         console.log(e.currentTarget.parentElement.parentElement);
//         const PERquestion = e.currentTarget.parentElement.parentElement;
//         PERquestion.classList.toggle('show-text');
//     });
//  });

