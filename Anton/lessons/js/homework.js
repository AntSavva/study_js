let numberOfFilms = +prompt("Сколько фильмов вы уже посмоттрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


while (numberOfFilms > 0){
    let lastFilm = prompt("Введите название фильма");
    let lastFilmScore = +prompt("Оценка фильма от 0 до 10");

    if (lastFilm && lastFilmScore != "" && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = lastFilmScore;
        numberOfFilms--;
    }
    else{
        alert("Ошибка, введите данные меньше");
    }
}


if (numberOfFilms<10){
    alert("Вы ещё не спец по фильмам");
}
else if (numberOfFilms<50) {
    alert("Вы прогрессируете");
}
else{
    alert("Вы спец по кино");
}



console.log(personalMovieDB);