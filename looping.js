// for of
// var ages=[10,20,30,33,35,40];
// for(var age of ages){
//     console.log(age);
//     if (age==10){
//         console.log("you are a baby",ages[0]);
//     }
//     if(age==20){
//         console.log("you are grown");
//     }
// }

var position=0;
var collegeStudent =[
    {name:"sreevardhan"},
    {age:22},
    {rollNo:"20781A3317"},
    {dept:"CSM"}
]
// for(var college in collegeStudent){
//     console.log(college);
//     console.log("Student name is",collegeStudent[0]);
// }
while(position<4){
    console.log(collegeStudent[position]);
    // position += 1;
}

