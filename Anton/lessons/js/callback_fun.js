function first() {
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}

first();
second();

function second(){
    console.log(2);
}


function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS("Джава Скрипт", second);


