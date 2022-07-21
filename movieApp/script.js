const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=297823d7e3154b558d647b53fe79eeb8&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=297823d7e3154b558d647b53fe79eeb8&query="';

const form = document.getElementById('form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');

//GET inital movies
getMovies(API_URL);

// fetch data
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

// perform search 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});

//create movie card
function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const {
      original_title,
      poster_path,
      vote_average,
      overview,
      backdrop_path,
    } = movie;
    const movieEle = document.createElement('div');
    movieEle.classList.add('movie');
    movieEle.innerHTML = `<img
        src="${poster_path ? IMG_URL + poster_path : IMG_URL + backdrop_path}"
        alt="${original_title}"
      />
      <div class="movie-info">
        <h3>${original_title}</h3>
        <span class="${getColorByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3> 
        ${overview}
      </div>`;
    main.appendChild(movieEle);
  });
}

// get the color for each rating
const getColorByRate = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
};
