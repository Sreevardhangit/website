console.log("%c Javascript is a programming language",   "color: red");

console.log("%c    ","background-color: blue");

console.log("%c    ","background-color: green");
console.log("%c    ","background-color: yellow");


function redColor(){
    console.log("%c    ","background-color: red");
}


//section1

function section1(){
    console.log("%c    ","background-color: green");
    console.log("%c    ","background-color: yellow");
    redColor();
}
section1();


function section2(){
    console.log("%c    ","background-color: gray");
    console.log("%c    ","background-color: blue");
    redColor();
}
section2();
