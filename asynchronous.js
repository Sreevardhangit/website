function sleep(milliseconds){
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime + milliseconds;
    while(new Date().getTime() < endDateTime){
        // console.log("Done");

    }
}
function stepOne(){
    //sleep(2000);
    setTimeout(()=>{
        console.log("1Done")
    },1000);
}
function steptwo(){
   // sleep(5000);
   setTimeout(()=>{
    console.log("2done");
   },5000);
}
function stepthree(){
   // sleep(1000);
   setTimeout(()=>{
    console.log("3done");
   },3000);
}
stepOne(()=>{
    steptwo(()=>{
        stepthree();
    });
});


console.log("All Done");
console.log("!!!!!");