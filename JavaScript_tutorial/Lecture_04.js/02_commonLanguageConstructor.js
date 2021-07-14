//**** if statement (all false) */
if ( false || null || undefined || "" || NaN) {
    console.log("This line won't ever executed");
}
else {
    console.log("All false");
}

//***** if statement (all true) */
if(true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}


var a = 5;
var b = 15;
if((a>b) || false || NaN || 0) {
    console.log("statement is wrong");
}
else {
    console.log("statement is right");
}
