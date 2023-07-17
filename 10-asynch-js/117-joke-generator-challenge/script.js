const btn = document.querySelector('.btn');
const jokeContainer = document.getElementById('joke');
const xhr = new XMLHttpRequest();

const generateJoke = () => {
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            const joke = JSON.parse(this.responseText);
            jokeContainer.innerHTML = joke.value;
        }
    }

    xhr.send();
}







btn.addEventListener('click', generateJoke);