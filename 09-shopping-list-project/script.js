const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filterItem = document.getElementById('filter');



// Add Item
const addItem = (e) => {
    e.preventDefault();

    const newItem = itemInput.value;
    // Validate Input
    if(newItem === ''){
        alert('Please add an item');
        return;
    }

    // Create List Item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to the DOM
    itemList.appendChild(li);

    resetUI();
    itemInput.value = '';

};

const createButton = (classes) => {
    const button = document.createElement('button')
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
};

const createIcon = (classes) => {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


// Remove Item
const removeItem = (e) => {
    if (e.target.parentElement.classList.contains('remove-item')){
       
       if (confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();
       } 
    }
    resetUI();
}


// Clear Items
const clearItems = (e) => {
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    resetUI();
}


// Filter Items
const filterItems = (e) => {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        }

        else{
            item.style.display = 'none';
        }
    });
}




// Hide Filter and Clear when the List has no content
const resetUI = () => {
    const items = itemList.querySelectorAll('li');
    if(items.length === 0) {
        clearBtn.style.display = 'none';
        filterItem.style.display = 'none';
    }
    else{
        clearBtn.style.display = 'block';
        filterItem.style.display = 'block';
    }
}


// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
filterItem.addEventListener('input', filterItems)

resetUI();