// async function studentDetails() {
//     return "Name:Sree"
// }
// let student = studentDetails();
// student.then((data)=>{
//     console.log("student name",data);
// })
// console.log(student);





// async function studentDetails() {
//     return "Sree"
// }
// studentDetails().then((result)=>{
//     console.log("Student Name is:",result);
// })


// async function studentDetails() {
//     return new Promise((resolve,reject)=>{
//         resolve("Vardhan");
//         reject("No details");
//     })
// }
// studentDetails().then((result)=>{
//     console.log(result);
// })
// .catch((er)=>{
//     document.write(er);
// })


async function collegestaff(){
    return new Promise((resolve,reject)=>{
        let staff;
        if(staff){
            resolve("Staff name",staff);
        }
        else{
            reject("No details found the name",staff);
        }
    })
}
collegestaff().then((data)=>{
    console.log(data);
})
.catch((er)=> {
    document.writeln(er);
})