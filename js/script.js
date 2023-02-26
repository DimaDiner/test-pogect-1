'use strict';
/* eslint-disable no-unused-vars */


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let movies1 = prompt('Один из последних просмотренных фильмов?');
let rating1 = prompt('Насколько вы его оцениет?');
personalMovieDB.movies[movies1] = rating1;

let movies2 = prompt('Один из последних просмотренных фильмов?');
let rating2 = prompt('Насколько вы его оцениет?');
personalMovieDB.movies[movies2]= rating2;
 

console.log(personalMovieDB.movies);

