function calculator(callback){
    callback(10, 5);
    console.log("This is a calculator function.");
}
calculator(function(a,b){
    console.log("This is an addition function.");
    console.log("The sum is: " + (a + b));
    console.log("the subtraction is: " + (a - b));
    console.log("The multiplication is: " + (a * b));
    console.log("The division is: " + (a / b));
}); 

setTimeout(function(){
    console.log("This is a timeout function.");
}, 2000);



let driver=() => {
    console.log("this is an arrow function");
}
driver();

//return arrow function
let books =(name,subject,price) => {
    return `The book name is ${name}, subject is ${subject}, and the price is ${price}`;
}
books = books("JavaScript", "Programming", 500);
console.log(books);