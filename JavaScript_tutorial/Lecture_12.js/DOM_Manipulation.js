// console.log(document.getElementById("title"));//output title line from html
function sayHello() {
    var name = document.getElementById("name").value;
    var message = "<h1>Hello " + name + "!<h2>";
    
    //Div is completely empty
    // document.getElementById("content").textContent = message;
    document.getElementById("content").innerHTML = message;
    //if want to change heading
    if(name === "student") {
        var title = document.querySelector("#title")
        .textContent;
        title += " & Loving it!";
        document.querySelector("#title")//or querySelector("h1")
        .textContent = title;//it specify the selector like a css.
    }
}
//note- value: input and textContent : output