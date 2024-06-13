const omdbapiUrl = "https://www.omdbapi.com/";
const apiKey = "48727053";

// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a
// http://www.omdbapi.com/?s=Harry Potter&apikey=adf1f2d7
// Your turn to code!
const movieNameBox = document.getElementById('movie-name');
const searchButton = document.getElementById('search-button');
const movieCards = document.getElementById('movie-cards');
let movieName = "";

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  movieName = movieNameBox.value;

  fetch(`${omdbapiUrl}?s=${movieName}&apikey=${apiKey}`)
    .then(response => response.json())
    .then((data) => {
      movieCards.innerHTML = "";
      if (data.Search) {
        console.log("inside of statement");
        data.Search.forEach((datum) => {
          const cardHtml = `
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
              <div class="card mb-2 bg-dark bg-gradient" style="display: flex; flex-direction: column; height: 100%;">
                <img src="${datum.Poster}" class="card-img-top" alt="${datum.Title} poster" style="flex-shrink: 0; width: 100%; height: 22rem;">
                <div class="card-body">
                  <span class="badge bg-danger mb-2">${datum.Year}</span>
                  <h5 class="card-title text-white" style="margin-top: auto;">${datum.Title}</h5>
                </div>
              </div>
            </div>`;
          movieCards.insertAdjacentHTML('beforeend', cardHtml);
        });
      } else {
        movieCards.insertAdjacentHTML('beforeend', "<p>No movies found.</p>");
      }
    });
});
