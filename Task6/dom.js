var secondChild = document.querySelector('.list-group-item:nth-child(2)');
secondChild.style.backgroundColor='green';
var thirdChild = document.querySelector('.list-group-item:nth-child(3)');
thirdChild.style.display='none';

var items = document.querySelectorAll('.list-group-item');
items[1].style.color ='green';
var odds = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odds.length;i++){
    odds[i].style.backgroundColor='green'
}


