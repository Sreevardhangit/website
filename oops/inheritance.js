class father{
    constructor(character,color,face){
        this.character = character;
        this.color = color;
        this.face = face;
    }
    displayDetails(){
        console.log(this.character);
        console.log(this.color);
        console.log(this.face);
    }

}
let fathers = new father("Good","white","round");
fathers.displayDetails();


class son extends father{
    constructor(character,color,face){
        super(character,color,face);
    }

    displaysonDetails(){
        this.displayDetails();
    }

}
let son1 = new son("Good","white","Round");
console.log(son1);