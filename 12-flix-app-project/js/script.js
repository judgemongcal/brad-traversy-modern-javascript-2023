const global = {
    currentPage: window.location.pathname,
    search: {
      term: '',
      type: '',
      page: 1,
      totalPages: 1,
      totalResults : 0
    },
    api: {
      apiKey : 'a7456beaa24436c8503cde5af39f3fa0',
      apiURL: 'https://api.themoviedb.org/3/'
    }
};


// Displaying Popular Movies
const DisplayPopularMovies = async () => {
    const { results } = await fetchAPIData('movie/popular');
    results.forEach((movie) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
            ${
                movie.poster_path ? `<img
                          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                          class="card-img-top"
                          alt="${movie.title}"
                        />` :
                        `<img
                        src="../images/no-image.jpg"
                        class="card-img-top"
                        alt="${movie.title}"
                      />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;
        document.querySelector('#popular-movies').appendChild(div);
    })

}


// Displaying Popular TV Series

const DisplayPopularShows = async () => {
    const { results } = await fetchAPIData('tv/popular');
    results.forEach((show) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <div class="card" id="${show.id}">
            <a href="tv-details.html?id=${show.id}">
            ${
                show.poster_path? `
                <img
                src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                class="card-img-top"
                alt="${show.name}"
                />
                ` : 

                `
                <img
                src="images/no-image.jpg"
                class="card-img-top"
                alt=${show.name}
                />`
            }
            </a>
            <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
                <small class="text-muted">Aired: ${show.first_air_date}</small>
            </p>
            </div>
        </div> 
        `;
        document.querySelector('#popular-shows').appendChild(div);
    });
};


// Displaying Movie Details

const displayMovieDetails = async () => {
    const movieId = (window.location.search).split('=')[1];
    console.log(movieId);

    const movieDetails = await fetchAPIData(`movie/${movieId}`);

    console.log(movieDetails);
    
    // Overlay for BG Image
    displayBackgroundImage('movie', movieDetails.backdrop_path);

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="details-top">
      <div>
        ${
            movieDetails.poster_path? 

            `<img
            src="https://image.tmdb.org/t/p/w500${movieDetails.poster_path}"
            class="card-img-top"
            alt="${movieDetails.original_title}"
          /> ` :

          `
          <img
          src="images/no-image.jpg"
          class="card-img-top"
          alt="${movieDetails.original_title}"
        />
          `
        }
      </div>
      <div>
        <h2>${movieDetails.original_title}</h2>
        <p>
          <i class="fas fa-star text-primary"></i>
          ${movieDetails.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Release Date: ${movieDetails.release_date}</p>
        <p>
          ${movieDetails.overview}
        </p>
        <h5>Genres</h5>
        <ul class="list-group">
          ${movieDetails.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
        <a href="${movieDetails.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
      </div>
    </div>
    <div class="details-bottom">
      <h2>Movie Info</h2>
      <ul>
        <li><span class="text-secondary">Budget:</span> $${movieDetails.budget.toLocaleString()}</li>
        <li><span class="text-secondary">Revenue:</span> $${movieDetails.revenue.toLocaleString()}</li>
        <li><span class="text-secondary">Runtime:</span> ${movieDetails.runtime} Minutes</li>
        <li><span class="text-secondary">Status:</span> ${movieDetails.status}</li>
      </ul>
      <h4>Production Companies</h4>
      <div class="list-group">${movieDetails.production_companies.map((company) => 
            `<span>${company.name}</span>`
        ).join(', ')}</div>
    </div>
  </div>
    `;
    
    document.querySelector('#movie-details').appendChild(div);

};


// Display TV Show Details

const displayShowDetails = async () => {
    const showID = (window.location.search).split('=')[1];
    const show = await fetchAPIData(`tv/${showID}`);

    displayBackgroundImage('tv-show', show.backdrop_path);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="details-top">
    <div>
        ${ show.poster_path?
          `<img
          show.poster_path? 
          src="https://image.tmdb.org/t/p/w500${show.poster_path}"
          class="card-img-top"
          alt="${show.name}" />`
          :
          `<img
          src="images/no-image.jpg"
          class="card-img-top"
          alt="S${show.name}" />`

        }
    </div>
    <div>
      <h2>${show.name}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${show.vote_average.toFixed()} / 10
      </p>
      <p class="text-muted">Release Date: ${show.first_air_date}</p>
      <p>
        ${show.overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
        ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
      </ul>
      <a href="${show.homepage}" target="_blank" class="btn">Visit Show Homepage</a>
    </div>
  </div>
  <div class="details-bottom">
    <h2>Show Info</h2>
    <ul>
      <li><span class="text-secondary">Number Of Episodes:</span> ${show.number_of_episodes}</li>
      <li>
        <span class="text-secondary">Last Episode To Air:</span> Episode ${show.last_episode_to_air.episode_number} - ${show.last_episode_to_air.name}
      </li>
      <li><span class="text-secondary">Status:</span> ${show.status}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">${show.production_companies.map((company) => `<span>${company.name}</span>`).join(', ')}</div>
  </div>
    `;

  document.querySelector('#show-details').appendChild(div);
};


// Display Backdrop on Details Pages

const displayBackgroundImage = (type, backgroundPath) => {
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('hello');
    overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backgroundPath})`;
    overlayDiv.style.backgroundSize = 'cover';
    overlayDiv.style.backgroundPosition = 'center';
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.height = '100vh';
    overlayDiv.style.width = '100vw';
    overlayDiv.style.position = 'absolute';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.zIndex = '-1';
    overlayDiv.style.opacity = '0.1';


    if(type === 'movie') {
        document.querySelector('#movie-details').appendChild(overlayDiv);
    } else {
        document.querySelector('#show-details').appendChild(overlayDiv);
    }

};


// Search Movies/Shows

  const search = async () => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    global.search.type = urlParams.get('type');
    global.search.term = urlParams.get('search-term');

    if(global.search.term !== '' && global.search.term !== null) {
      // Make request and Display results
      const { results, total_pages, page, total_results } = await searchAPIData();

      global.search.page = page;
      global.search.totalPages = total_pages;
      global.search.totalResults = total_results;

      if(results.length === 0){
        showAlert('No results found');
        return;
      }

      displaySearchResults(results);
      document.querySelector('#search-term').value = '';
      console.log(results);
    } else {
      showAlert('Please enter a search term');
    }
  }


// Display Search Results

const displaySearchResults = (results) => {

  // Clear Previous Results
  document.querySelector('#search-results').innerHTML = '';
  document.querySelector('#pagination').innerHTML = '';
  document.querySelector('#search-results-heading').innerHTML = '';

  results.forEach((result) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <a href="${global.search.type}-details.html?id=${result.id}">
      ${result.poster_path? `
      <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" class="card-img-top" 
      alt="${global.search.type === 'movie'? result.original_title : result.original_name}"/>
      `: 
      `
      <img src="images/no-image.jpg" class="card-img-top"
       alt="${global.search.type === 'movie'? result.original_title : result.original_name}"/>
      `}
    </a>
    <div class="card-body">
      <h5 class="card-title">${global.search.type === 'movie'? result.original_title : result.original_name}</h5>
      <p class="card-text">
        <small class="text-muted">${global.search.type === 'movie'? `Released` : `First Air Date`}: ${global.search.type === 'movie'? result.release_date : result.first_air_date}</small>
      </p>
    </div>
    `;

    document.querySelector('#search-results-heading').innerHTML = `
      <h2>${results.length} of ${global.search.totalResults} Results for ${global.search.term}</h2>
    `;

    document.querySelector('#search-results').appendChild(div);
  });

  displayPagination();
};


// Create and Display Pagination for Search

const displayPagination = () => {
  const div = document.createElement('div');
  div.classList.add('pagination');
  div.innerHTML = `
    <button class="btn btn-primary" id="prev">Prev</button>
    <button class="btn btn-primary" id="next">Next</button>
    <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
  `;

  document.querySelector('#pagination').appendChild(div);

  // Disable prev button if in first page
  if(global.search.page === 1) {
    document.querySelector('#prev').disabled = true;
  }

  // Disable next button if on the last page
  if(global.search.page === global.search.totalPages) {
    document.querySelector('#next').disabled = true;
  }

  // Next Page

  document.querySelector('#next').addEventListener('click', async () => {
    global.search.page++;
    const { results } = await searchAPIData();
    displaySearchResults(results);
  });

  // Previous Page

  document.querySelector('#prev').addEventListener('click', async () => {
    global.search.page--;
    const { results } = await searchAPIData();
    displaySearchResults(results);
  });
}


// Display Slider Movies

const displaySlider = async () => {
  const { results } = await fetchAPIData('movie/now_playing');

  console.log(results);

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <a href="movie-details.html?id=${movie.id}">
    ${movie.poster_path? `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    alt="${movie.original_title}" />` : 
    ` <img src="./images/no-image.jpg" alt="${movie.original_title}" />`}
  </a>
  <h4 class="swiper-rating">
    <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
  </h4>
    `;

    document.querySelector('.swiper-wrapper').appendChild(div);

    initSwiper();
  });

  
};

// Initialize Swiper

const initSwiper = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    breakpoints: {
      500: {
        slidesPerView: 2
      },
      700: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
};




// Fetch Data from TMDB API

const fetchAPIData = async (endpoint) => {
    const API_KEY = global.api.apiKey;
    const API_URL = global.api.apiURL;

    showSpinner(); 

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);

    const data = await response.json();

    hideSpinner();
    return data;
};


// Make Request to Search API Data

const searchAPIData = async () => {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiURL;

  showSpinner(); 

  const response = await fetch(`${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page}`);

  const data = await response.json();

  hideSpinner();
  return data;
};



// Spinner

const showSpinner = () => {
    document.querySelector('.spinner').classList.add('show');
};

const hideSpinner = () => {
    document.querySelector('.spinner').classList.remove('show');
};

// Highlight Active Link

const highlightLink = () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if(link.pathname === global.currentPage) {
            link.classList.add('active');
        };
    });
};

// Show Alert

const showAlert = (message, className = 'error') => {
  const alertElement = document.createElement('div');
  alertElement.classList.add('alert', className);
  alertElement.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertElement);

  setTimeout(() => alertElement.remove(), 3000);
};


// Init App
// console.log(global.currentPage);
const init = () => {
    switch(global.currentPage) {
        case '/12-flix-app-project/index.html':
        case '//12-flix-app-project/':
            // console.log('movies/home');
            displaySlider();
            DisplayPopularMovies();
            break;
        
        case '/12-flix-app-project/shows.html':
            // console.log('shows');
            DisplayPopularShows();
            break;

        case '/12-flix-app-project/movie-details.html':
            // console.log('movie details');
            displayMovieDetails();
            break;

        case '/12-flix-app-project/tv-details.html':
            // console.log('tv details');
            displayShowDetails();
            break;

        case '/12-flix-app-project/search.html':
            // console.log('search');
            search();
            break;

    }

    highlightLink();
}

document.addEventListener('DOMContentLoaded', init);

