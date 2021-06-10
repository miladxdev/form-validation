let signupBtn = document.getElementById('signup');
let signupElement = document.getElementById('signup-container');
let backBtn = document.getElementById('back-btn');

signupBtn.addEventListener('click', () => {
    signupElement.style.left = '0';
    // signupElement.style.opacity = '1';
});

backBtn.addEventListener('click', () => {  
    signupElement.style.left = '100%';
    // signupElement.style.opacity = '0';
});