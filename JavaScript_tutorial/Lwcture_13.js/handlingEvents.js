function sayHello (event) {
    console.log(this);
    var name =
    document.getElementById("name").nodeValue;
    var message = "<h2>Hello " + name + "!</h2>";

    document
    .getElementById("content")
    .innerHTML = message;

    if(name === "student") {
        var title =
        document.querySelector("#title")
        .textContent;
        title += " & Lovin it!";
        document
        .querySelector("h1")
        .textContent = title;
    }
}