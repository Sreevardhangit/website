function sleep(milliseconds){
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime + milliseconds;
    while(new Date().getTime() < endDateTime){
        // console.log("Done");

    }
}
function stepOne(){
    sleep(2000);
    console.log("1Done")
}
function steptwo(){
    sleep(5000);
    console.log("2done")
}
function stepthree(){
    sleep(1000);
    console.log("3done");
}
stepOne();
steptwo();
stepthree();

console.log("All Done");



// function Test(){
//     console.time("sleep");
//     sleep(5000);
//     console.EndTime("sleep");

// }