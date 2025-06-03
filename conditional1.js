let age = 12;
if(age >= 18) {
    console.log("You are eligible to vote.");
}
else{
    console.log(`your age is ${age - 18}, you are not eligible to vote.`);
}

// let namestr=sreevardhan.length > vardhan.length;
// console.log(`Is 'sreevardhan' longer than 'vardhan'? ${namestr}`);
let sreevardhan = "sreevardhan";
let vardhan = "vardhan";
if(sreevardhan.length > vardhan.length) {
    console.log("sreevardhan is longer than vardhan.");
}
else if(sreevardhan.length < vardhan.length) {
    console.log("vardhan is longer than sreevardhan.");
}
else {
    console.log("sreevardhan and vardhan are of equal length.");
}



console.log('5' + 1 + 2); // "512"
console.log('5' - 1 + 2); // 6
console.log('5' * 2); // 10
let age1 = 20;
let myage= `my age before 3 years ${age1 - 3} years old.`;
console.log(myage); // "my age before 3 years 17 years old."