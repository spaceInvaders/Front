"use strict";

const foo = {
    a: 8,
    b: 10,
    c: func1
};

function func1(params) {
    console.log(params);
}

foo.c('func1 - lala');

// const fee = Object.assign({}, foo);
// foo.a = 'dfghj';
// console.log(foo);
// console.log(fee);

// let fee = foo.pop();
// console.log(fee);
// console.log(foo);

// const a = ['a', 'b', 'c'];

// a.forEach((item, index, arr) => {
//     console.log(`${index} - value: ${item} - inside ${arr}`);
// });

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     person: {
//         name: 'Sviat',
//         age: 19
//     }
// };

// for (const key in personalMovieDB) {
//     console.log(personalMovieDB[key]);
// }

// console.log(Object.keys(personalMovieDB.person).length);
//  delete personalMovieDB.person;
//  console.log(personalMovieDB);