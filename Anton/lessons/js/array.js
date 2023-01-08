const arr = [1,23 , 42, 7, 9];
arr.sort(forSort);
console.log(arr);

function forSort(a, b){
    return a - b;
}
// arr.pop();

// console.log(arr);
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }



// arr.forEach(function(item, i,arr){
//     console.log(`${i}: ${item} ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);

// let finalText = products.join("; ");
// console.log(finalText);