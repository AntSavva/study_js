const btn = document.querySelector('.circle');

// btn.onclick = function () {
//     alert("Привет мир");
// };

const deleteElement = (e) => {
    e.target.style.backgroundColor = 'black';
}

btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});

const changeColor = (el) =>{
    el.target.style.backgroundColor = 'blue';
};

const btns = document.querySelectorAll('button');

btns.forEach((el) => {
    el.addEventListener('click',changeColor);
});