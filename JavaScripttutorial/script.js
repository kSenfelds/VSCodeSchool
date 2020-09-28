console.log("second file");

let x =123;
message();
function message(m) {
    console.log(x);
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
        button.addEventListener("click", function (){alert(button.textContent = "BUTTON".concat(i+1));})
        
    }

}
    let pluss = document.getElementById("pluss");
    let button2 = document.createElement("button");
    pluss.append(button2);
    button2.textContent = "+";
    let j = 42;
    button2.addEventListener("click", function (){addButton(j); j++;})
    

 
    /* zaļām pogām uztaisīt tā lai klikšķinot skaitlis palielinās par 1*/
        