// for of
var ages=[10,20,30,33,35,40];
for(var age of ages){
    console.log(age);
    if (age==10){
        console.log("you are a baby",ages[0]);
    }
    if(age==20){
        console.log("you are grown");
    }
}


var salary=["10k","20k","30k","40k"];
for(var money of salary){
    console.log(money);
    if(money=="10k"){
        console.log("Salary is insufficient",salary[0]);
    }
    if(money=="20k"){
        console.log("Salary is sufficient no savings",salary[1]);
    }
    else{
        console.log("High salary");
    }

    
}
//for in
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
    position += 1;
}

