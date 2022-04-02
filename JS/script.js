"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();

function start() {
    let numberOfFilms;
    console.log(`numberOfFilms - ${numberOfFilms}`);

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Hove many movies have u seen", "");
    }

    personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms() {
    for (let index = 0; index < 2; index++) {
        const lastMovieYouSeen = prompt("Last movie you have seen", "mm...Harry Potter?");
        if (isValidMovieOrGenre(lastMovieYouSeen)) {
            personalMovieDB.movies[lastMovieYouSeen] = prompt(`Please rate ${lastMovieYouSeen}`, "100");

            continue;
        }
        console.log("lastMovieYouSeen must be not empty and no more than 50 chars");
        index--;
    }
}

function isValidMovieOrGenre(input) {
    if (input != null && input.length > 0 && input.length < 50) {
        console.log("***true");
        return true;
    }
}

function detectPersonalLevel() {

    console.log("detectPersonalLevel");

    if (personalMovieDB.count < 10) {
        console.log("personalMovieDB < 10");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("personalMovieDB >= 10 && personalMovieDB < 30");
    } else if (personalMovieDB.count >= 30) {
        console.log("personalMovieDB >= 30");
    } else {
        console.log("Oops!");
    }
}

function writeYourGenres() {
    for (let index = 0; index < 3; index++) {
        const favouriteGenre = prompt(`Your favourite genre No ${index + 1}`, '');
        if (isValidMovieOrGenre(favouriteGenre)) {
            personalMovieDB.genres[index] = favouriteGenre;

            continue;
        } 
        console.log("favouriteGenre must be not empty and no more than 50 chars");
        index--;
    }
}

function showMyDB() {
    personalMovieDB.privat == false ? console.log(personalMovieDB) : console.log("personalMovieDB is privat");
}