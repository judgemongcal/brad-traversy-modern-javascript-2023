async function getUser () {
    const response = await fetch ('https://api.github.com/users/judgemongcal');
    const data = await response.json();
    console.log(data);
}

getUser();