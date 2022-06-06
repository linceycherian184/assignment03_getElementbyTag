const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const itemList = document.getElementById('users-items');

var keys = Object.keys(localStorage); 
var  i = keys.length; 

let stringifiedDetailsOfPeople, userDeserial;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading.....");
    
    Object.keys(localStorage).forEach((key) => {
        
        if (key.match(/userDetails/g)) {
            stringifiedDetailsOfPeople = localStorage.getItem(key);
            userDeserial = JSON.parse(stringifiedDetailsOfPeople);
            addNewLineElement(userDeserial);
        }
    });
  });

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
        if(localStorage.getItem("userDetails" +userDetails.email)!==null){
            
            removeUser(userDetails.email);
        }

        let userSerailized = JSON.stringify(userDetails);
        
        localStorage.setItem("userDetails" +userDetails.email,userSerailized);
       
        nameInput.value = '';
        emailInput.value = '';
        addNewLineElement(userDetails);
       
    }}
    function removeUser(email){
        const childNode =document.getElementById(email);
       // console.log(childNode)
        if(childNode){
           
            itemList.removeChild(childNode);
        }
    }


    function addNewLineElement(object) {
        const li = document.createElement("li");
        li.className='item';
        li.id=object.email;
        li.appendChild(
          document.createTextNode(object.name + " " + object.email + " ")
        );
       //console.log(li);
       const a = document.createElement("input");
        a.id = 'input';
        a.type = "button";
        a.value = "Edit";

        a.addEventListener("click", () => {
            console.log(object);
            document.getElementById("name").value = object.name;
            document.getElementById("email").value = object.email;
            //li.remove();
        });
        a.style.border = "3px solid green";
        a.style.float="right"
        a.className = "edit"
        a.style.margin ='3px'

        li.appendChild(a);

        const b = document.createElement("input");
        b.id = 'del';
        b.type = "button";
        b.style.float="right"
        b.style.margin ='3px'
        b.value = "Delete";
        b.addEventListener("click", () => {
            localStorage.removeItem("userDetails" + object.email);
            li.remove();
          });
          b.style.border = "3px solid red";

          b.className = "delete";
        li.appendChild(b);


        itemList.appendChild(li);
    }