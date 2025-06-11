class pg{
    #pgname;
    #pgloc;
    #geusts = [];

    constructor(name,loc){
        this.#pgname = name;
        this.#pgloc = loc;

    }
    pgenrollment(){
        let geust ={
            name : "vardhan",
            Id : "123"
        }
        this.#geusts.push(geust);
        console.log(`Student name is ${this.#geusts[0].name} and id is ${this.#geusts[0].Id}`);
    }
    pgenrollment1(){
        let geustn ={
            name : "Sree",
            Id : "1234"
        }
        this.#geusts.push(geustn);
        console.log(`Student name is ${this.#geusts[1].name} and id is ${this.#geusts[1].Id}`);
        
    }
}
let pgs= new pg("Lakshmi Srinivasa","bangalore");
pgs.pgenrollment();
pgs.pgenrollment1();









