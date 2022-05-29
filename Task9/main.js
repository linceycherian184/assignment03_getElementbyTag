var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);


function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    var des = document.createElement('div');
    des.className= "list-group-description";
    des.appendChild(document.createTextNode(description));
    li.appendChild(des);

    itemList.appendChild(li);
}


filter.addEventListener('keyup',filterItems);

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.lastChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
    });
}