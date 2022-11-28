let lastFilm;
let filmGrade;
let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies : {[lastFilm] : [filmGrade]},
  actors :{},
  genres: [],
  privat: false
};

do{
numberOfFilms = prompt("сколько фильмов вы посмотрели за последнее время?");
}
while(numberOfFilms == null || numberOfFilms == 0);

for (let i = 0; i < numberOfFilms; i++){
  lastFilm = prompt("назовите эти фильмы");
  filmGrade = prompt("На сколько оцените этот фильм?");
  if(filmGrade == null|| lastFilm == null){
    alert("не нажимайте отмена");
    console.log(i);
    i = --i;
    console.log(i);

  }
  else if (lastFilm.length == 0 || filmGrade.length == 0 || lastFilm.length>50){
    alert("не оставляйте значение пустым");
    console.log(i);
    i = --i;
    console.log(i);
  }

}
personalMovieDB.count = numberOfFilms;

personalMovieDB.movies[lastFilm] = lastFilm;
personalMovieDB.movies[filmGrade] = filmGrade;

console.log(personalMovieDB);
switch(true){
case (personalMovieDB.count <= 10): 
  alert("просмотренно мало фильмов");
  break;
case (personalMovieDB.count > 10 && personalMovieDB.count< 30):
  alert("вы классический зритель");
  break;
default: alert("вы киноман");


}

