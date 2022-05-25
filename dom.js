var items = document.getElementsByClassName('list-choices-item');

items[2].style.fontWeight='bolder';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='grey';
}


var choices = document.getElementsByTagName('li')
console.log(choices);

choices[4].style.border='1px solid #000 ';
choices[6].style.fontFamily='Brush Script MT';
choices[5].style.fontSize='xx-large';