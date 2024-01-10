import { fetchMovieAvailability, fetchMovieList } from "./api.js";

const movieHolder = document.getElementById("movie-holder");

fetchMovieList().then((data) => {
  data.forEach((movie) => {
    const template = document.createElement("template");
    template.innerHTML = `

    <a class="movie-link" href="/${movie.name}">

    <div class="movie" data-id="${movie.name}">

    <div class="movie-img-wrapper" style="background-image:url('${movie.imgUrl}');background-size:cover;">

    </div>

    <h4>${movie.name}</h4>

    </div>

    </a>

    `;
    movieHolder.appendChild(template.content.firstChild);
  });

  console.log(movieHolder);
  //   console.log(data);
});

// fetchMovieList().then((data) => {
//   data.forEach((movie) => {
//     const movieLink = document.createElement("a");
//     movieLink.href = `/movie/${movie.name}`;
//     movieLink.setAttribute("class", "movie-link");
//     // console.log(movieLink);

//     const movieDiv = document.createElement("div");
//     movieDiv.setAttribute("class", "movie");
//     movieDiv.dataset.d = movie.name;
//     // console.log(movieDiv);

//     const imgDiv = document.createElement("div");
//     imgDiv.setAttribute("class", "movie-img-wrapper");
//     imgDiv.style.backgroundImage = "url('banner.png')";
//     imgDiv.style.backgroundSize = "cover";
//     // console.log(imgDiv);

//     const h4 = document.createElement("h4");
//     h4.textContent = `${movie.name}`;
//     // console.log(h4);

//     movieDiv.appendChild(imgDiv);
//     movieDiv.appendChild(h4);
//     movieLink.appendChild(movieDiv);
//     movieHolder.appendChild(movieLink);
//   });
//   console.log(movieHolder);
//   //   console.log(data);
// });

// `

// <a class="movie-link" href="/${movieObj.name}">

// <div class="movie" data-id="${movieObj.name}">

// <div class="movie-img-wrapper" style="background-image:url('${movieObj.imgUrl}');background-size:cover;">

// </div>

// <h4>${movieObj.name}</h4>

// </div>

// </a>

// `;
