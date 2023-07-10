const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filterItem = document.getElementById('filter');

// Display Existing Items from Local Storage
const displayItems = () => {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemtoDOM(item));
    resetUI();
}

// Add Item
const onAddItemSubmit = (e) => {
    e.preventDefault();

    const newItem = itemInput.value;
    // Validate Input
    if(newItem === ''){
        alert('Please add an item');
        return;
    }

    // Create item DOM Element
    addItemtoDOM(newItem);

    // Add Item to Local Storage
    addItemtoStorage(newItem);


    resetUI();
    itemInput.value = '';

};


// Add Item to DOM
const addItemtoDOM = (item) => {
     // Create List Item
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(item));
 
     const button = createButton('remove-item btn-link text-red');
     li.appendChild(button);
 
     // Add li to the DOM
     itemList.appendChild(li);
};


// Create Button
const createButton = (classes) => {
    const button = document.createElement('button')
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
};


// Create Icon
const createIcon = (classes) => {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


// Add Item to Local Storage
const addItemtoStorage = (item) => {
    const itemsFromStorage = getItemsFromStorage();

    // Add new Item to Array
    itemsFromStorage.push(item);

    // Convert to JSON string and set to Local Storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage)); 
}


// Getting Items from Local Storage
const getItemsFromStorage = () => {
    let itemsFromStorage;

    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    }

    else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
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


// Initialize App

const initializeApp = () => {
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', removeItem);
    clearBtn.addEventListener('click', clearItems);
    filterItem.addEventListener('input', filterItems)
    document.addEventListener('DOMContentLoaded', displayItems);

    resetUI();
};

initializeApp();


