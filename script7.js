// function bookDetails(){
//     let bookDetails = "bookName:" + "vardhan";
//     return bookDetails;
// }


{
    let a=[12,23,34,45,56,67,78,89];//scope 1
    {
        let b=["apple","banana"];//scope 2
        {
            let c = ["location","city"];//scope 3
        
            console.log("c=",c);
            console.log("b=",b);
            console.log("a=",a);
        }
        console.log("a=",a);
        console.log("b=",b);
   }
   console.log("a",a);

}