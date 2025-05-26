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