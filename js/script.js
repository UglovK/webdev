"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?');

let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов ?');
let lastFilmScore = +prompt('На сколько оцените его ?');

// personalMovieDB.movies = {
//     lastFilm: lastFilmScore
// };

personalMovieDB['movies'] = {
    lastFilm: lastFilmScore
};

console.log(personalMovieDB);