// Step 1
const library = [
    {
        title: 'Essentialism',
        author: 'Greg McKeown',
        status: {
            own : true,
            reading : false,
            read : false,
        }
    },

    {
        title: 'Psycho-Cybernetics',
        author: 'Maxwell Maltz',
        status: {
            own : true,
            reading : false,
            read : false,
        }
    },

    {
        title: 'Deep Work',
        author: 'Cal Newport',
        status: {
            own : true,
            reading : false,
            read : false,
        }
    }
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;


// Step 3
const { title: firstBook } = library[0];


// Step 4

const jsonLibrary = JSON.stringify(library);
console.log(jsonLibrary);