// const box = document.getElementById('box');

// console.log(box);



// console.log(btns[1]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });


//квоари селектор выбирает 1 объект
// const heartOne = document.querySelector('.heart');
// console.log(heartOne);

const box = document.getElementById('box');
box.style.backgroundColor = "black";
box.style.width = '500px';

const btns = document.getElementsByTagName('button');

btns[1].style.backgroundColor = "blue";
btns[1].style.borderRadius = '100%';

box.style.cssText = `background-color: blue; width: 500px`;

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item) => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('blue');
// document.body.append(div);


const wrapper = document.querySelector('.wrapper');
wrapper.prepend(div);

hearts[1].before(div);

div.innerHTML = "<h1>Hello world</h1>";
// div.innerText = "Привет мир";

div.insertAdjacentHTML('beforeend', '<h2>Hello world</h2>');

