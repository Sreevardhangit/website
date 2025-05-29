//example 1
if(true){
    console.log("This condition is always true.");
}

//example 2

let StudentAccess = true;
let studentName = "John Doe";
if (StudentAccess) {
    console.log("Access granted to student: " + studentName);
}
else if (StudentAccess === false){
    console.log("Access denied to student: " + studentName);  
}  
else{
    console.log("No access information available for student: " + studentName);
}
//example 3

let StudentAccess1 = false;
let studentName1 = "jane";
if (StudentAccess1) {
    console.log("Access denied: " + studentName1);
}
else if (StudentAccess1 === false){
    console.log("Access denied: " + studentName1);
}
else{
    console.log("Access granted: " + studentName1);
}



// example 4


let StudentAccess2 = false;
let studentPrsent= false;
let studentAuthenticated = true;

if(StudentAccess2 == true){
    console.log("Access granted to student.");
}
else if(studentPrsent == true){
    console.log("Student is present, but access is denied.");
}
else if(studentAuthenticated == true){
    console.log("Student is authenticated, but access is denied.");
}
else{
    console.log("Access denied to student.");
}


// example 5
let a = 10;
if(a%2 == 0){
    console.log(`${a} is even.`);
}
else if(a%2 != 0){
    console.log(`${a} is odd`);
}
else{
    console.log("The number is neither even nor odd.");
}


//switch statement example
let day = 3;
switch(day){
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;  
    case 4:
        console.log("Today is Thursday.");
        break;

    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    case 7:
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");


}