"use strict";

const numberOfFilms = +prompt("Hove many movies have u seen", 10);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let index = 0; index < 2; index++) {
    const lastMovieYouSeen = prompt("Last movie you have seen", "mm...Harry Potter?");
    if (lastMovieYouSeen == null || lastMovieYouSeen.length <= 0 || lastMovieYouSeen.length > 50) {
        console.log("lastMovieYouSeen must be not empty and no more than 50 chars");
        index--;
        break;
    }
    const lastMovieRate = prompt(`Please rate ${lastMovieYouSeen}`, "100");
    personalMovieDB.movies[lastMovieYouSeen] = lastMovieRate;
}

if (personalMovieDB.count < 10) {
    console.log("personalMovieDB < 10");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("personalMovieDB >= 10 && personalMovieDB < 30");
} else if (personalMovieDB.count >= 30) {
    console.log("personalMovieDB >= 30");
} else {
    console.log("Oops!");
}

console.log(personalMovieDB);