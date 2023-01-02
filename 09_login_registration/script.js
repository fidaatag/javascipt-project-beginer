// now for the Animation, we need to ...
// add a class to the container Element when we clik on the sign up button in the panel, 
// remove it when we click on the sign in button on the another panel

// on this class, we will define the style that we will add to our sign in & sign up form Element
// when we want to switch the sign up form such as 
// move the blue background to the right & form to the left

const signIn_btn = document.querySelector('#signIn-btn');
const signUp_btn = document.querySelector('#signUp-btn');
const container = document.querySelector('.container');

signUp_btn.addEventListener('click', function(){
    container.classList.add('signUp-mode');
});
signIn_btn.addEventListener('click', function(){
    container.classList.remove('signUp-mode');
});