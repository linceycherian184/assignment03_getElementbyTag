var items = document.querySelector('#items');
console.log(items.parentNode);

items.parentNode.style.backgroundColor='yellow';

items.parentElement.parentElement.style.backgroundColor='green';

console.log(items.childNodes); //This will take the line breaks.

console.log(items.children);

items.children[1].style.backgroundColor ='grey';

console.log(items.firstChild); //This will also include the line breaks.

console.log(items.firstElementChild);

items.firstElementChild.textContent ='Hello there!!!'; 

console.log(items.lastChild);

items.lastElementChild.textContent='Thank you!!!';

console.log(items.nextSibling);//This will include line breaks

console.log(items.nextElementSibling);

items.previousElementSibling.textContent= 'Hi';


var newDiv = document.createElement('div');

newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
console.log(newDiv);
var divText = document.createTextNode('Hello ');
newDiv.appendChild(divText);

var headerContainer = document.querySelector('header .container');
var h1 = document.querySelector('header h1'); 

headerContainer.insertBefore(newDiv,h1 );

var newText = document.createElement('div');

newText.className='hello123';
newText.id='hello2';
newText.setAttribute('title','Hello There');

var text = document.createTextNode('Hello ');
newText.appendChild(text);


 var item = document.querySelector('#items');
 var item1 = document.querySelectorAll('.list-group-item');
item.insertBefore(newText,item1[0]);







