var array = new Array();
array[0] = "Abhishek";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello "+ name);
}
array[3] = { course: "HTML, CSS AND JS"};

console.log(array);
console.log(array[1]);
array[2]("Abhishek Verma");
array[2](array[0]);
console.log(array[3].course);

//short hand array creation
var names = ["Abhishek", "Jhon", "Aayush"];
console.log(names);
//short hand array creation with object
var math = [{sum: 5+4}, { sub: 5-4}];
console.log(math);
//short hand array creation with loops
for(var i=0; i<names.length; i++) {
    console.log("Hello " + names[i]);
}

names[100] = "jim";
for(var i=0; i<names.length; i++) {
    console.log("Hello " + names[i]);

}

var names2 = ["abhishek", " john", "joe" ];
var myObj = {name:"abhishek",course: " HTML/CSS/JS", platform: " coursera"};
//properties in my object for loop
// for(var prop in myObj) {
//     console.log(prop + " : " + myObj[prop]);
// }

// for(var i in names2) {
//     console.log(names2[i]);
// }

names2.a = "Hi!";
for(var i in names2) {
    console.log(names2[i]);
}
