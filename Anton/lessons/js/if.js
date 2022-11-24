const digit = 25;

if (digit > 51){
    console.log("Больше 51");
}
if(digit > 100){
    console.log("Больше 100");
}
else{
    console.log("Меньше 51");
}

switch (digit){
    case 25:
        console.log("Число равно 25");
        break;
    case 50:
        console.log("Число равно 50");
        break;
    default:
        console.log("Не 25 и не 50");
        break;
}