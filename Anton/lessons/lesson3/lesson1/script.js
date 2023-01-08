const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red'));

// if (btns[0].classList.contains('red')){
//     console.log('red');
// }




// btns.forEach((el) =>{
//     el.addEventListener('click', testFunction);
//     function testFunction(){
//         if (!el.classList.contains('red')){
//             el.classList.add('red');
//         }
//         else{
//             el.classList.remove('red');
//         }
//     }    

// });

wrapper.addEventListener('click', (event) =>{
    if (event.target && event.target.tagName == "BUTTON"){
        if (!event.target.classList.contains('red')){
            event.target.classList.add('red');
        }
        else{
            event.target.classList.remove('red');
        }
    };
});


const btn = document.createElement('button');
wrapper.append(btn);


// wrapper.addEventListener('click', (event) =>{
//     if (event.target && event.target.classTitle == "blue"){
//         console.log("hello");
//     };
// });