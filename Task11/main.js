const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
var itemList = document.getElementById('items');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {

        let userDetails ={
            name:nameInput.value,
            email:emailInput.value
        }

        let userSerailized = JSON.stringify(userDetails);
        
        localStorage.setItem(localStorage.length,userSerailized);
        let userDeserial = JSON.parse(localStorage.getItem(localStorage.length-1));
        console.log(userDeserial);
        nameInput.value = '';
        emailInput.value = '';
       
    }}