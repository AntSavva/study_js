let num = 20;

showFirstMessage("Hello world");

function showFirstMessage(text){    //1
    console.log(text);
    let num = 10;
}

let func = function(){
    console.log("Привет Катя");     //2
    return ("Петя");
};

console.log(func());


const calc = (a,b) => {
    return (a + b);                   //3
};

console.log(calc(5, 12));


const str = "test";
const arr =  [1, 2, 4];

console.log(arr.includes(1));

document.write(str.toUpperCase());

let num_random = Math.random();

console.log(Math.round(num_random));