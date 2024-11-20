/**
 * Makes a GET request to the OMDB API to retrieve the information of the movies.
 * @returns {Array} An array of movie objects.
 */
async function getMovies() {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=c6ec74f5&s=paris`);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.Search;
  } catch (error) {
    alert("Une erreur s'est produite");
  }
}
/**
 * Displays a movie next to each day of the week and movie times in the "movieList" ul element.
 */
async function displayMovies() {
  try {
    const movies = await getMovies();
    const movieList = document.getElementById("movieList");
    const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const movieTimesSalle1 = ['11:00','13:00', '14:00','18:00','19:00','20:00','22:00','00:00'];
    const movieTimesSalle2 = ['12:00','14:00', '15:00','17:00','20:00','21:00','23:00','01:00'];
    const weekendMovieTimesSalle1 = ['20:00', '22:00', '00:00'];
    const weekendMovieTimesSalle2 = ['21:00', '23:00', '01:00'];

    for (let i = 0; i < 7; i++) {
      const movie = movies[i];
      const movieItem = document.createElement("li");
      let movieTimeSalle1, movieTimeSalle2;

      if (i >= 5) {
        // It's a weekend, display 5 starting times for movies
        movieTimeSalle1 = weekendMovieTimesSalle1[0];
        movieTimeSalle2 = weekendMovieTimesSalle2[0];
        movieItem.innerHTML = `
          <div class="movie-item">
            <p><strong>${daysOfWeek[i]}: <a href="movie.html?imdbID=${movie.imdbID}">${movie.Title}</a></strong></p>
            <p>Salle Jeanne de Balzac (${movieTimeSalle2}, ${weekendMovieTimesSalle1[1]} et ${weekendMovieTimesSalle1[2]})</p>
            <p>Salle Auguste Lumière (${movieTimeSalle1}, ${weekendMovieTimesSalle2[1]} et ${weekendMovieTimesSalle2[2]})</p>
          </div>
        `;
      } else {
        // It's a week day, use the regular movie times
        movieTimeSalle1 = movieTimesSalle1[i % movieTimesSalle1.length];
        movieTimeSalle2 = movieTimesSalle2[i % movieTimesSalle2.length];
        movieItem.innerHTML = `
          <div class="movie-item">
            <p><strong>${daysOfWeek[i]}: <a href="movie.html?imdbID=${movie.imdbID}">${movie.Title}</a></strong></p>
            <p>Salle Jeanne de Balzac (${movieTimeSalle1} et ${movieTimesSalle1[(i+1) % movieTimesSalle1.length]})</p>
            <p>Salle Auguste Lumière (${movieTimeSalle2} et ${movieTimesSalle2[(i+1) % movieTimesSalle2.length]})</p>
          </div>
        `;
      }
      movieList.appendChild(movieItem);
    }
  } catch (error) {
    alert("Une erreur s'est produite");
  }
}
displayMovies();

/**
 * Displays the details of the selected movie on the movie.html page.
 */
document.addEventListener("DOMContentLoaded", () => {
  async function displayMovie() {
    try {
      const params = new URLSearchParams(window.location.search);
      const imdbID = params.get("imdbID");
      const response = await fetch(`http://www.omdbapi.com/?apikey=c6ec74f5&i=${imdbID}`);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const data = await response.json();

      const main = document.querySelector("#main");

      const poster = document.createElement("img");
      poster.src = data.Poster;
      poster.alt = "Movie Poster";
      main.querySelector(".movie-details").appendChild(poster);

      const title = document.createElement("h2");
      title.textContent = data.Title;
      main.querySelector(".movie-details").appendChild(title);

      const createInfoElement = (label, content) => {
        const p = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = `${label}: `;
        p.appendChild(strong);
        p.appendChild(document.createTextNode(content));
        return p;
      };

     
      main.querySelector(".movie-details").appendChild(createInfoElement("Année", data.Year));
      main.querySelector(".movie-details").appendChild(createInfoElement("Rated", data.Rated));
      main.querySelector(".movie-details").appendChild(createInfoElement("Genre", data.Genre));
      main.querySelector(".movie-details").appendChild(createInfoElement("Acteurs", data.Actors));
      main.querySelector(".movie-details").appendChild(createInfoElement("Synopsis", data.Plot));
    } catch (error) {
      alert("Une erreur s'est produite: " + error.message);
    }
  }

  // Only display the movie if the imdbID is present in the URL
  const params = new URLSearchParams(window.location.search);
  if (params.has("imdbID")) {
    displayMovie();
  }
});