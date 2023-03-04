/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

start: for (let i = 0; i < 2; i++){
    let movies1 = prompt('Один из последних просмотренных фильмов?');
    let rating1 = prompt('Насколько вы его оцениет?');

    if (movies1 != null && rating1 != null && movies1 != '' && rating1 != '' && movies1.length < 50 && rating1.length < 50){
       personalMovieDB.movies[movies1] = rating1
    } else {
        i--;
    }

}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов')
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count <=20){
    alert('Вы классический зритель')
} else if (personalMovieDB.count > 20){
    alert('Вы киноман')
} else {    
    alert('Произошла ошибка')
}

console.log(personalMovieDB.movies);