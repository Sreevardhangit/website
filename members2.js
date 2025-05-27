// function students(name,grade,section){
//     console.log("The student name is: " + name);
//     console.log("The student grade is: " + grade);
//     console.log("The student section is: " + section);
// }
// students("John", "10th", "A");
// students("Alice", "9th", "B");
// console.log(students.name);// Accessing the function name property
// console.log(students.length); // Accessing the function length property
// console.log(students.toString()); // Accessing the function toString method
// console.log(students.prototype); // Accessing the function prototype property

function pgList(){
    console.log("pglist");
    this.name ="Luxury PG";
    this.location = "Bengaluru";
    this.price = 15000;
    this.beds = 10;
    console.log(this);
}

pgList.prototype.pgInfo = function(){
    console.log("pgInfo in bengaluru");
    console.log(this);
}
let newPg=new pgList();
newPg.pgInfo(); // Accessing the prototype method
console.log(newPg.name); // Accessing the property of the object
console.log(newPg.location); // Accessing the property of the object
console.log(newPg.price); // Accessing the property of the object
console.log(newPg.beds); // Accessing the property of the object
console.log(newPg); // Accessing the object itself
console.log(pgList.prototype); // Accessing the prototype of the function
console.log(pgList.prototype.pgInfo); // Accessing the prototype method 