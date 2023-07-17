const btn = document.querySelector('.btn');
const jokeContainer = document.getElementById('joke');
const xhr = new XMLHttpRequest();

const generateJoke = () => {
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if(this.readyState === 4) {
            if(this.status === 200){
                const joke = JSON.parse(this.responseText);
                jokeContainer.innerHTML = joke.value;
            }

            else{
                jokeContainer.innerHTML = 'Something went wrong. Try again!';
            }
            
        }
    }

    xhr.send();
}







btn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);