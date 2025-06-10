// class studentDetails{
//     constructor(){
//         console.log("Student name: Sree vardhan");
//     }
//     registrationStudent(){
//         console.log("Student name is Reddy and his registration is success");
//     }
// }
// //new studentDetails().registrationStudent();
// let student = new studentDetails();
// student.registrationStudent();


// class studentDetails{
//     constructor(name){
//         console.log(`Student name:  ${name}`);
//     }
//     registrationStudent(){
//         console.log("Student name is Reddy and his registration is success");
//     }
// }
// //new studentDetails().registrationStudent();
// let student = new studentDetails("sree");
// student.registrationStudent();


// class student{
//     Sname = "SREE";
//     constructor(name){
//         console.log(`Name: ${name}`);
//     }
//     regDetails(){
//         console.log(`student name is ${this.Sname}`);
//     }
// }
// new student("john").regDetails();


// class studentReg{
//     S_name;
//     S_id;
//     constructor(name,id){
//         console.log(`student name is ${name}`)
//         this.S_name = name;
//         this.S_id = id;

//     }
//     DetailsofStu(){
//         console.log(`Student name is ${this.S_name} and his id is ${this.S_id}`);

//     }
//     studentSub(){
//         return ["telugu","Hindi","English"];
//     }

// }
// let student=new studentReg("vardhan",16);
// let student1= new studentReg("sree",17);
// student.DetailsofStu();
// student1.DetailsofStu();
// let students = student.studentSub();
// console.log("Subjects to learn",students);






class Details{
    S_name="sree";
    S_id ="123";

    get S_name(){
        this.S_name;

    }
    set S_name(value){
        if(typeof this.S_name == String){
            this.S_name = value;
        }
        else{
            console.log("You have entered wrong data type");
        }
    }
}
let rDetails = new Details();
rDetails.S_name = false;


