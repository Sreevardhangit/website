// function returnNonreturn(studentName,studentAge) {
//     console.log("Student Name: " + studentName);
//     console.log("Student Age: " + studentAge);


// }
// returnNonreturn("vardhan", 20);

function StudentDetails(studentName, studentAge) {
    let student_D = "";
    student_D += "Student Name: " + studentName + "\n";
    student_D += "Student Age: " + studentAge + "\n";
    return student_D;
}
console.log(StudentDetails("vardhan", 20));










// function OddandEvensum(arr){
//     let oddsum = 0;
//     let evensum = 0;
//     arr.forEach(function(num){
//         if(num%2 == 0){
//             console.log("Even numbers:", num);
//             evensum += num;

//         }
//         else{
//             console.log("Odd numbers:", num);
//             oddsum += num;
//         }
//     }
//     );return{
//         oddsum:oddsum,
//         evensum:evensum
//     }
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = OddandEvensum(numbers);
// console.log("sum of even numbers:",result.evensum);
// console.log("sum of odd numbers:",result.oddsum);
// // Output: sum of even numbers: 20
// // Output: sum of odd numbers: 16   
// // Output: Even numbers: 2, 4, 6, 8
// // Output: Odd numbers: 1, 3, 5, 7
// // Output: sum of even numbers: 20





// function calculateSum(arr) {
//     let sum =0;
//     arr.forEach(function(num){
//         sum += num;
//     });
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5];
// let totalSum = calculateSum(numbers);
// console.log("total sum:", totalSum);




// function calculator(a,b, operation) {
//     switch(operation){
//         case 1:
//         return a+b;
//         case 2:
//         return a-b;     
//         case 3:
//         return a*b;
//         case 4:
//         return a/b;
//         default:
//         return "Invalid operation";

//     }
// }
// console.log(calculator(10, 5, 1)); // Output: 15
// console.log(calculator(10, 5, 2)); // Output: 5
// console.log(calculator(10, 5, 3)); // Output: 50
// console.log(calculator(10, 5, 4)); // Output: 2



// function calculator(a,b){
//     let sum = a + b;
//     let difference = a - b;
//     let product = a * b;
//     let quotient = a / b;
//     return{
//         sum:sum,
//         difference:difference,
//         product:product,
//         quotient:quotient
//     }
// }
// let result = calculator(10, 5);
// console.log("Sum:", result.sum); // Output: Sum: 15
// console.log("Difference:", result.difference); // Output: Difference: 5
// console.log("Product:", result.product); // Output: Product: 50
// console.log("Quotient:", result.quotient); // Output: Quotient: 2







