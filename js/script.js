'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

// start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movies1 = prompt('Один из последних просмотренных фильмов?');
        let rating1 = prompt('Насколько вы его оцениет?');
    
        if (movies1 != null && rating1 != null && movies1 != '' && rating1 != '' && movies1.length < 50 && rating1.length < 50){
           personalMovieDB.movies[movies1] = rating1
        } else {
            i--; 
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов')
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <=20){
        alert('Вы классический зритель')
    } else if (personalMovieDB.count > 20){
        alert('Вы киноман')
    } else {    
        alert('Произошла ошибка')
    }
}

// detectPersonalLevel();

function showMyDB() {
    if (privat === false) {
        console.log(personalMovieDB);
    }
}

// showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`)
    }
}

// writeYourGenres();

console.log(personalMovieDB);
