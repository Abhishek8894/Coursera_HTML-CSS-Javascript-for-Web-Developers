var name = "Abhishek";
function sayHello () {
    console.log("Hello " + name);
}

var name = "Ram";
function sayHii() {
    console.log("Hii " + name);
}

sayHello();
sayHii();
//Using fake namespace: 
console.log("\nUsing Fake Namespace:\n")

var AbhishekGreeting = {};
AbhishekGreeting.name = "Abhishek";
AbhishekGreeting.sayHello = function() {
    console.log("Hello "+ AbhishekGreeting.name);
}

var RamGreeting = {};
RamGreeting.name = "Ram";
RamGreeting.sayHii = function() {
    console.log("Hii "+ RamGreeting.name);
}

AbhishekGreeting.sayHello();
RamGreeting.sayHii();