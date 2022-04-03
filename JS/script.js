"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        console.log(`numberOfFilms - ${this.count}`);

        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Hove many movies have u seen", "");
        }
    },
    rememberMyFilms: function () {
        for (let index = 0; index < 2; index++) {
            const lastMovieYouSeen = prompt("Last movie you have seen", "mm...Harry Potter?");
            if (this.isValidMovieOrGenre(lastMovieYouSeen)) {
                personalMovieDB.movies[lastMovieYouSeen] = prompt(`Please rate ${lastMovieYouSeen}`, "100");

                continue;
            }
            console.log("lastMovieYouSeen must be not empty and no more than 50 chars");
            index--;
        }
    },
    isValidMovieOrGenre: function (input) {
        if (input != null && input.length > 0 && input.length < 50) {
            console.log("***true");
            return true;
        }
    },
    detectPersonalLevel: function () {
        console.log(`detectPersonalLevel - ${this.count}`);
        if (this.count < 10) {
            console.log("personalMovieDB < 10");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("personalMovieDB >= 10 && personalMovieDB < 30");
        } else if (this.count >= 30) {
            console.log("personalMovieDB >= 30");
        } else {
            console.log("Oops!");
        }
    },
    writeYourGenres: function () {
        for (let index = 0; index < 1; index++) {
            const genres = prompt(`Please enter our favourite genres (comma separeted)`).toLowerCase();
            if (this.isValidMovieOrGenre(genres)) {
                this.genres = genres.split(', ');
                this.genres.sort();

                continue;
            }
            console.log("favouriteGenre must be not empty and no more than 50 chars");
            index--;
        }
        this.genres.forEach((item, index, arr) => alert(`Favourite genre #${index + 1} - ${item}`));
    },
    showMyDB: function () {
        this.privat ? console.log(`this.privat is ${this.privat}`) : console.log(this);
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();