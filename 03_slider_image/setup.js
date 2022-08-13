const boxSlider = document.getElementById('boxSlider')
const imgSlider = document.querySelectorAll('.boxSlider img');

// button
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

// hitung img
let counter = 1;
const size = imgSlider[0].clientWidth;

boxSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button list
nextBtn.addEventListener('click', function(){
    if (counter >= imgSlider.length -1) return; // gambar akan tetap jalan saat di klik dgn cepat
    boxSlider.style.transition = 'transform 0.4s ease-in-out';
    counter ++;
    console.log(counter)
    boxSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}); 

prevBtn.addEventListener('click', function(){
    if (counter <= 0) return; // gambar akan tetap jalan saat di klik dgn cepat
    boxSlider.style.transition = 'transform 0.4s ease-in-out';
    counter --;
    console.log(counter)
    boxSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}); 

// loping - mutar 
boxSlider.addEventListener('transitionend', function(){
    // console.log('Fired')
    console.log(imgSlider[counter])
    if (imgSlider[counter].id === 'lastClone'){
        boxSlider.style.transition = 'none';
        counter = imgSlider.length -2;
        boxSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (imgSlider[counter].id === 'firstClone'){
        boxSlider.style.transition = 'none';
        counter = imgSlider.length - counter;
        boxSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
