{
    var scope1 = "global scope";
    {
        var scope2 = "local scope";
        {
            var name = "block scope function";
            console.log(name); // Accessing block scope function
            console.log(scope2); // Accessing local scope variable
            console.log(scope1); // Accessing global scope variable
        }
        console.log(scope2); // Accessing local scope variable
        console.log(scope1); // Accessing global scope variable
    }
    console.log(scope1); // Accessing global scope variable
}