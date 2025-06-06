function sleep(milliseconds){
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime + milliseconds;
    while(new Date().getTime() < endDateTime){
        // console.log("Done");

    }
}
function stepOne(steptwocallbackfn){
    sleep(2000);
    console.log("1Done")
    steptwocallbackfn();
}
function steptwo(stepthreecallbackfn){
    sleep(5000);
    console.log("2done")
    stepthreecallbackfn();
}
function stepthree(){
    sleep(1000);
    console.log("3done");
}
stepOne(()=>{
    steptwo(()=>{
        stepthree();
    });
});


console.log("All Done");
console.log("!!!!!");