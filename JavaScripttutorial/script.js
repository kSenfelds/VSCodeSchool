console.log("second file");

let x =123;
message();
function message(m) {
    console.log(x);
}
button.addEventListener("click", function()){
    alert(); /* uztaisīt tā lai klikšķinot skaitlis palielinās par 1*/
}
let output = document.getElementById("output");

console.log(output);
addButton(0);
function addButton(i) {
    i = i + 1;
    let button = document.createElement("button");
    button.textContent = "BUTTON".concat(i);
    output.append(button);

    if (i < 42) {
        addButton(i);
    }
    if (i%3==0) {
        button.style.background="green";
    }
    
}
