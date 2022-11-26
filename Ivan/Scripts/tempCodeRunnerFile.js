numberOfFilms = prompt("сколько фильмов вы уже посмотрели ?","");
alert(numberOfFilms)
for (let i = 0; i < numberOfFilms; i++){
  lastFilm = prompt("один из последних просмотренных фильмов?","");
  alert(lastFilm);
  filmGrade = prompt("На сколько оцените его?","");
  alert(filmGrade);
  alert(i);

  if (lastFilm.length == 0 || filmGrade.length == 0 || lastFilm.length>50 || isNaN(lastFilm) || isNaN(filmGrade)){
    alert(i);
    i = --i;
    alert(i);
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies : {
        [lastFilm] : filmGrade     
  },
  actors :{},
  genres: [],
  privat: false
};
console.log(personalMovieDB);

