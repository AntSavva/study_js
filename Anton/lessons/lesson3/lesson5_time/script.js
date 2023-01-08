const btn = document.querySelector('.btn');
let timerId,
    i = 0;


function myAnimation (){
    const elem = document.querySelector('.box');
    let pos = 0;
    let id = setInterval(frame, 100);
    function frame(){
        if (pos == 300){
            pos = 0;
            elem.style.top = 0;
            elem.style.left = 0;
        }
        else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });

// let x ='ПРивет';

// const timerId = setTimeout(logger, 2000);

// function logger() {
//     console.log('text');
//     i++;
//     if (i==3){
//         clearInterval(timerId);
//     }
// }


// let id = setTimeout(function log(){
//     console.log('Hellp');
//     id = setTimeout(log, 500);
// }, 500);
