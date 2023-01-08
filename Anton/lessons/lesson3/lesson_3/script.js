const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const timerId = setTimeout(logger, 2000);
});



clearInterval();

function logger () {
    console.log('text');
}