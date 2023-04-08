'use strict';


let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let movies1 = prompt('Один из последних просмотренных фильмов?');
            let rating1 = prompt('Насколько вы его оцениет?');
    
            if (movies1 != null && rating1 != null && movies1 != '' && rating1 != '' && movies1.length < 50 && rating1.length < 50){
               personalMovieDB.movies[movies1] = rating1
            } else {
                i--; 
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов')
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <=20){
            alert('Вы классический зритель')
        } else if (personalMovieDB.count > 20){
            alert('Вы киноман')
        } else {    
            alert('Произошла ошибка')
        }
    },

    showMyBD: function() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 4; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`)
            if (genre === '' || genre === null) {
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre
            }
        }

        personalMovieDB.genres.forEach(function(item, i){
            console.log(`Любимый жанр #${i+1} - это ${item}`)
        })
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    }

};


// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyBD();

console.log(personalMovieDB)
