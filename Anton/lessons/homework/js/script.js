/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Аватар",
            'ацуацуауцауцауцацуацуацуацуауцауцуцауцацуауцацувцйвцйвцй'
        ]
    };
    
    
    const adv = document.querySelector('.promo__adv');
    
    adv.remove();
    
    const genre = document.querySelector('.promo__genre');
    genre.textContent = "Драма";
    
    
    
    
    console.log(movieDB.movies);
    
    const filmList = document.getElementById('promo__interactive-list');
    
    let htmlList = '';
    movieDB.movies.sort();
    
    const poster = document.querySelector('.promo__bg');
    poster.style.backgroundImage = 'url(img/bg.jpg)';
    
    
    
    const form = document.querySelector("form.add");
    const addInput = form.querySelector('.adding__input');
    const cheackBox = document.querySelector('.checkbox');
    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = cheackBox.checked;

        if (newFilm){
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
    
            createMovieList(movieDB.movies, filmList);
    
            event.target.reset();
            console.log('Тест');
        }

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

            });
        });
    });
    
    
    
    const filmsList = document.querySelector('.promo__interactive-list');
    

    
 
   
    
    
    cheackBox.addEventListener('click', checkFunction);
    
    
    function checkFunction(){
        if (cheackBox.checked){
            alert("Что то работает");
        }
        else{
            alert("Что то не работает");
        }
    }
    
    
    
    
    
    
    


    function createMovieList(films, parent){
        parent.innerHTML = "";
        
        films.forEach((film, i) => {
            if (film.length > 20){
                let newFilmTitle = film.slice(0, 20);
                parent.innerHTML +=`<li class="promo__interactive-item">${i + 1} ${newFilmTitle}...<div class="delete"></div></li>`;
            }
            else{
                parent.innerHTML +=`<li class="promo__interactive-item">${i + 1} ${film}<div class="delete"></div></li>`;
            }
            
        });
    }

    createMovieList(movieDB.movies, filmList);

});










