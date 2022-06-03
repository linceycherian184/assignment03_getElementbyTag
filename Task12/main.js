const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const itemList = document.getElementById('users-items');

var keys = Object.keys(localStorage); 
var  i = keys.length; //6

let stringifiedDetailsOfPeople, userDeserial;

if (document.readyState !== "loading") {
    Object.keys(localStorage).forEach((key) => {
        
        if (key.match(/userDetails/g)) {
            stringifiedDetailsOfPeople = localStorage.getItem(key);
            userDeserial = JSON.parse(stringifiedDetailsOfPeople);
            addNewLineElement(userDeserial);
        }
    });
}

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
        
        localStorage.setItem("userDetails" +userDetails.email,userSerailized);
       
        nameInput.value = '';
        emailInput.value = '';
        addNewLineElement(userDetails);
       
    }}


    function addNewLineElement(object) {
        const li = document.createElement("li");
        li.className='item';
        li.appendChild(
          document.createTextNode(object.name + " " + object.email + " ")
        );
       console.log(li);
        itemList.appendChild(li);
    }