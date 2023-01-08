

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    showMyDB: function(){
        if (this.privat == false){
            console.log(personalMovieDB);
        }
    },

    top_genres: function(){
        this.count = +prompt("Сколько фильмов вы уже посмоттрели?");
        for (let i = 0; i < this.count; i ++){
            let x = '';
            do {
                x = prompt(`Ваш любимый жанр под номером${i}`);
            }
            while (x ==='' || x===null);
            this.genres[i] = x;
            this.toggleVisibleMyDB();
            
        }
        this.showResult();
    },

    showResult: function(){
        for (let i = 0; i < this.count; i++){
            console.log(`Ваш любимые жанры${i+1}) ${this.genres[i]}`);
            console.log(this.privat);
        }
    },

    toggleVisibleMyDB: function(){
        if (this.privat){
            this.privat = false;
        }
        else{
            this.privat = true;
        }
      
    },

    

};


// while (numberOfFilms > 0){
//     let lastFilm = prompt("Введите название фильма");
//     let lastFilmScore = +prompt("Оценка фильма от 0 до 10");

//     if (lastFilm && lastFilmScore != "" && lastFilm.length < 50){
//         personalMovieDB.movies[lastFilm] = lastFilmScore;
//         numberOfFilms--;
//     }
//     else{
//         alert("Ошибка, введите данные меньше");
//     }
// }


// if (numberOfFilms<10){
//     alert("Вы ещё не спец по фильмам");
// }
// else if (numberOfFilms<50) {
//     alert("Вы прогрессируете");
// }
// else{
//     alert("Вы спец по кино");
// }

// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.top_genres();









