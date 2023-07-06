const showKeyInfo = (e) =>{
    const insert = document.getElementById('insert');
    insert.innerHTML = '';


    const keyInfo = {
        'e.key' : e.key === ' ' ? 'Space' : e.key,
        'e.keyCode' : e.keyCode,
        'e.code' : e.code
    };

    for(let key in keyInfo){
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');
        const outputLabel = document.createTextNode(key);
        const keyOutput = document.createTextNode(keyInfo[key]);

        small.appendChild(outputLabel);
        div.appendChild(keyOutput);
        div.appendChild(small);

        insert.appendChild(div);
    }

};


document.addEventListener("keypress", showKeyInfo);