const global = {
    currentPage: window.location.pathname
};

// Highlight Active Link

const highlightLink = () => {
    const links = document.querySelectorAll ('.nav-link');
    links.forEach((link) => {
        console.log(link.pathname, global.currentPage);
        if(link.pathname === global.currentPage) {
            link.classList.add('active');
            
        }
    })
}

// Init App
console.log(global.currentPage);
const init = () => {
    switch(global.currentPage) {
        case '/12-flix-app-project/index.html':
        case '//12-flix-app-project/':
            console.log('movies/home');
            break;
        
        case '/12-flix-app-project/shows.html':
            console.log('shows');
            break;

        case '/12-flix-app-project/movie-details.html':
            console.log('movie details');
            break;

        case '/12-flix-app-project/tv-details.html':
            console.log('tv details');
            break;

        case '/12-flix-app-project/search.html':
            console.log('search');
            break;

    }

    highlightLink();
}

document.addEventListener('DOMContentLoaded', init);