const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
      "Аватар",
    ],
  };
  
  const form = document.querySelector(".add");
  
  let input = document.querySelector(".adding__input");
  
  form.addEventListener("submit", formHandler);
  function formHandler(event) {
    event.preventDefault();
    addFilm();
  }
  
  function removeList() {
    console.log(filmsList.firstChild);
    for (let film = 0; film < movieDB.movies.length; film++) {
      filmsList.removeChild(filmsList.firstChild);
    }
  }
  //let viewerId = setInterval(viewFilms, 100)
  function viewAllFilms() {
    let htmlFilms = '';
    for (let film = 0; film < movieDB.movies.length; film++) {
        htmlFilms += `<li class="promo__interactive-item">${film}<div class="delete"></div>`;
        filmsList.append(htmlFilms);
    }
  }
  //clearInterval(viewerId);
  
  const filmsList = document.querySelector(".promo__interactive-list");
  let x = '';
  function addFilm() {
    console.log(movieDB.movies);
    movieDB.movies.push(input.value);
    const newFilm = document.createElement("li");
    newFilm.innerText = input.value;

  }
  viewAllFilms();