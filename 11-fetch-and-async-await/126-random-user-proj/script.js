const generateBtn = document.getElementById('generate');
const container = document.querySelector('.space-y-3');
const userImg = document.querySelector('img');


// const generateUser = () => {
//     fetch('https://randomuser.me/api/')
//     .then((res) => res.json())
//     .then((data) => {
//         userImg.src = data.results[0].picture.large;
//         container.innerHTML = `
//         <p class="text-xl">
//                 <span class="font-bold">Name: </span>${data.results[0].name.first} ${data.results[0].name.last}
//               </p>
//               <p class="text-xl">
//                 <span class="font-bold">Email: </span> ${data.results[0].email}
//               </p>
//               <p class="text-xl">
//                 <span class="font-bold">Phone: </span> ${data.results[0].phone}
//               </p>
//               <p class="text-xl">
//                 <span class="font-bold">Location: </span> ${data.results[0].location.state}, ${data.results[0].location.country}
//               </p>
//               <p class="text-xl"><span class="font-bold">Age: </span> ${data.results[0].dob.age}</p>`;
        
        
//     if(data.results[0].gender === 'male'){
//         document.body.style.backgroundColor = '#3D77AD';
//     } else {
//         document.body.style.backgroundColor = '#6B20A8';
//     }
//     });

// }

// generateBtn.addEventListener('click', generateUser);


const fetchUser = () => {
    showSpinner();
    fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => {
            hideSpinner();
            const user = data.results[0];
            displayUser(user);
        });
};

const displayUser = (user) => {
    userImg.src = user.picture.large;
            container.innerHTML = `
            <p class="text-xl">
                    <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
                  </p>
                  <p class="text-xl">
                    <span class="font-bold">Email: </span> ${user.email}
                  </p>
                  <p class="text-xl">
                    <span class="font-bold">Phone: </span> ${user.phone}
                  </p>
                  <p class="text-xl">
                    <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.country}
                  </p>
                  <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>`;
            
            
        if(user.gender === 'male'){
            document.body.style.backgroundColor = 'steelblue';
        } else {
            document.body.style.backgroundColor = 'rebeccapurple';
        }
};

const showSpinner = () => {
    document.querySelector('.spinner').style.display = 'block';
};

const hideSpinner = () => {
    document.querySelector('.spinner').style.display = 'none';
};

generateBtn.addEventListener('click', fetchUser);