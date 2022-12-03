const options = {
    name: 'test', 
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red",
        red: "Что то",
    },
    testFunc: function(){
        console.log("Тест");
    }
};

const {border, bg, red} = options.colors;
console.log(red);


delete options.name;

console.log(options);

let counter = 0;
for (let key in options){
    if (typeof options[key]==="object"){
        for (let i in options[key]){
            console.log(options[key][i]);
            counter++;        
        }
    
        break;
    }
    counter++;
    console.log(`Какой то ключ ${key} имеет значения ${options[key]}`);
} 


options.testFunc();

console.log(Object.keys(options));
