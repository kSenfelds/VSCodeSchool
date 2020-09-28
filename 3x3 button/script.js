let fieldrow1 = document.getElementById("field=row1");
let fieldrow2 = document.getElementById("field=row2");
let fieldrow3 = document.getElementById("field=row3");
let output = document.getElementById("output");

let symbol = "X";
let player = "player1";
j=0;
for (i=0; i<3; i++){
    j++;
let button = document.createElement("button");
button.textContent = "".concat(j);
fieldrow1.append(button);
symbol= "X";
}
for (i=0; i<3; i++){
    let button = document.createElement("button");
    j++;
    button.textContent = "".concat(j);
    fieldrow2.append(button);
    button.addEventListener("click", function () {
        if(symbol="X") {
            symbol= "O"
        };
        if (symbol= "O")
        {symbol= "X"};
        button.textContent = symbol;
     });
    
}
for (i=0; i<3; i++){
    let button = document.createElement("button");
    j++;
    button.textContent = "".concat(j);
    fieldrow3.append(button);
    
}




    

