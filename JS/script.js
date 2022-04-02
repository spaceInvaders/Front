"use strict";

const numberOfFilms = +prompt("Hove many movies have u seen", 10);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovieYouSeen1 = prompt("Last movie you have seen", "mm...Harry Potter?");
const lastMovieRate1 = prompt(`Please rate ${lastMovieYouSeen1}`, "100");

const lastMovieYouSeen2 = prompt("Last movie you have seen", "mm...Harry Potter?");
const lastMovieRate2 = prompt(`Please rate ${lastMovieYouSeen2}`, "100");

personalMovieDB.movies[lastMovieYouSeen1] = lastMovieRate1;
personalMovieDB.movies[lastMovieYouSeen2] = lastMovieRate2;

console.log(personalMovieDB);