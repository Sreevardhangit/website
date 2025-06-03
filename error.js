// compile-time error

// const Name="sree";  // spelling mistakes or syntax error will occur compile time errors

let name="sreevardhan";
      
try{
    if(name){
        name=name.toUpperCase();
        console.log(`Hello! My Name is ${name}`);
        

    }
    else{
        throw new Error("Nothing Happened Be Patiant");
        // throw new Error(alert("Nothing Happened Be Patiant"));

    }
//    name=name.toUpperCase();
//    console.log(alert("Nothing Happend Be patiant"));
//    throw new Error(alert("server is down"));
// //    console.log("Namasthe",name);
}
catch(er){
    console.log(er.message);
}
finally{
    console.log("No errors")
}
console.log("welcome");
let names=["sree","vardhan","reddy"];
console.log("Count of names:",names.length);
