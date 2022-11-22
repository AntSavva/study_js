let numberOfFilms = prompt("сколько фильмов вы уже посмотрели ?");
let lastFilm = prompt("один из последних просмотренных фильмов?");
let filmGrade = prompt("На сколько оцените его?");

const personalMovieDB = {
  count: numberOfFilms,
  movies : {
        lastFilmAndGrade : lastFilm,filmGrade
        
  },
  actors :{

  },
  genres: [],
  privat: false,
}
console.log("personalMovieDB.movies")