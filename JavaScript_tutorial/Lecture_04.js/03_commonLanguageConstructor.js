// // ***Best practice for {} style */
// // Curly brace on the next line...
// // Is it just a style?
// // function a()
// // {
// //     return            //undefined because of not proper braces.
// //     {                       
// //         name: "Yaakov"
// //     };
// // }

// function b()
// {
//     return{           //executed propely.
//         name: "Yaakov"
//     };
// }

// // console.log(a());
// console.log(b());
// // ****************************************************** */
// // for loop
// // var sum = 0;
// // for(var i=0; i<10; i++) {
// //     console.log(i);
// //     sum += i;
// // }
// // console.log("sum of 0 through 9 is: " + sum);

function a() {
    return{
        name : "Abhishek";
    };
}
variable();