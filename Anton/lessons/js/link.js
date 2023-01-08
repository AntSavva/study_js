const obj = {
    a: 2,
    b: 2,
};

// const copy = obj;
// obj.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
// }



// Работа с копиями

// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;


// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// console.log(clone);


//Копии массива
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = "Привет мир";
// console.log(oldArray);
// console.log(newArray);

const video = ["youtube", 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,8];
log(...num);

const array = ["a","b"];

const newArray = [...array];
console.log(newArray);

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};
console.log(newObj);

