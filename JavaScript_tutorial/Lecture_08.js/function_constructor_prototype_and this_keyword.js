// //This keyword;
// function test() {
//     console.log(this); //open global window object
//     this.name = "Abhishek verma";
// }
// test();
// // // console.log(window.name);

// function Circle (radius) {
    
//     this.radius = radius;
//     //method - member function
//     this.getArea = function () {
//         return Math.PI * Math.pow(this.radius, 2); //value of pie
//     };
// }
// var myCircle = new Circle(10);
// console.log(myCircle);
// console.log(myCircle.getArea());

//prototype
// function Circle (radius) {
    
//     this.radius = radius;
//     //method - member function
// }
// Circle.prototype.getArea = function () { //always outside the function.
//     return Math.PI * Math.pow(this.radius, 2); //value of pie
// };
// var myCircle = new Circle(10);
// console.log(myCircle);
// var mayOtherCircle = new Circle(20);
// console.log(mayOtherCircle);