window.addEventListener('DOMContentLoaded', () => {
        const btns = document.querySelector('.header_menu'),
        main = document.querySelector('.main'),
        listImg = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        tabs = document.querySelectorAll('.header_menu_item');

    function changeImg(i){
        listImg.forEach((img) => {
            main.style.background = `url(img/${listImg[i]}) no-repeat center`;
        })
    }


    btns.addEventListener('click', (event) => {
        
        if (event.target && event.target.classList.contains('header_menu_item')){
            tabs.forEach((item, i) =>{
                if (item == event.target){
                    console.log(i);
                    changeImg(i);
                }
            });
        }
    });

    function timer(endtimer){
        let nowTime = new Date();
        let endTime = new Date(endtimer);
        let finalTime = endTime - nowTime;
        let day = Math.floor((finalTime / 60 / 60 / 24 / 1000)),
            hours = Math.floor(((finalTime / 1000 / 60 / 60) % 24)),
            minutes = Math.floor(((finalTime / 1000 / 60) % 60)),
            seconds = Math.floor(((finalTime / 1000) % 60));

        let objTimer = {
            'day': day,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds 
        };

        if (endTime < nowTime){
            clearInterval(t);
        }


        return objTimer;
    }
    
    const selection = document.querySelector('.timer__time');
        
    function timerShow(){
        let objTimer = timer('2023-01-09');

        const daysDiv = selection.querySelector('#days');
        const hoursDiv = selection.querySelector('#hours');
        const minutesDiv = selection.querySelector('#minutes');
        const secondsDiv = selection.querySelector('#seconds');

        daysDiv.innerHTML = `${setZero(objTimer.day)}`;
        hoursDiv.innerHTML = `${setZero(objTimer.hours)}`;
        minutesDiv.innerHTML = `${setZero(objTimer.minutes)}`;
        secondsDiv.innerHTML = `${setZero(objTimer.seconds)}`;

        let t = setInterval(timerShow, 1000);

        
        
        function setZero(element){
            if (element >= 0 && element < 10){
                return `0${element}`;
            }
            else{
                return `${element}`;
            }
        }
    }

    
    timerShow();


    // Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    
    
    

});

