class person{
    constructor(name){
        this.name = name;
    }
    act(){
        console.log(`name is ${this.name}`);
    }
    
}
class talkwithfriends extends person{
    act(){
        console.log(`Talk with friends ${this.name}`);
    }
}

class trip extends person{
    act(){
        console.log(`trip with friends ${this.name}`);
    }
}
let personName = "vardhan";
// let person1 = new talkwithfriends(personName);
// person1.act();
let person1 = new trip(personName);
person1.act();