var form = document.getElementById('addForm');
var items = document.getElementById('items');

form.addEventListener('submit',addItem);

items.addEventListener('click',removeItem);

//items.addEventListener('click',editItem);

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem));

    var delButton = document.createElement('button');

    delButton.className = 'btn btn-danger btn-sm float-right delete';

    delButton.appendChild(document.createTextNode('X'));
    li.appendChild(delButton);
     
    var editBtn = document.createElement('button');

    editBtn.className = "btn  btn-primary btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    items.appendChild(li);


}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}
