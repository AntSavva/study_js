//touchstart
// touchmove
//touchend
//touchenter
//touchleave
//touchcancel

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault();

    //     console.log('Start');
    // });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Start');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('Start');
    });

    box.addEventListener('touchenter', (e) => {
        e.preventDefault();

        console.log('Start');
    });
});