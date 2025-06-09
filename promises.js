let Npromise = new Promise((resolve, reject)=>{
    if(true){
        resolve("success");
    }
    else{
        reject("Fail");
    }
});
Npromise.then((result((result)=>{
    console.log(result);
})
.catch((exception)=>{
    console.log(exception);
}
)))


// multiple promises

