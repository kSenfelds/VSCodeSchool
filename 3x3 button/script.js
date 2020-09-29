let fieldrow1 = document.getElementById("field=row1");
let fieldrow2 = document.getElementById("field=row2");
let fieldrow3 = document.getElementById("field=row3");
let output = document.getElementById("output");

let symbol = "X";
j=0;
for (i=0; i<3; i++){
let button = document.createElement("button");
button.textContent = "[]";
button.id = "button-"+j;
fieldrow1.append(button);

button.addEventListener("click", function () {
    if (button.textContent == "[]") {
        if (symbol == "X") {
            button.textContent = symbol;
            symbol= "O";}
        else {
            button.textContent = symbol;
            symbol = "X";}}
    else {
        alert( "MOVE UNAVAILABLE");
        button.textContent=button.textContent;
    }
    
});
j++;
}
for (i=0; i<3; i++){
    let button = document.createElement("button");
    button.textContent = "[]";
    button.id = "button-"+j;
    fieldrow2.append(button);
    button.addEventListener("click", function () {
        if (button.textContent == "[]") {
            if (symbol == "X") {
                button.textContent = symbol;
                symbol= "O";}
            else {
                button.textContent = symbol;
                symbol = "X";}}
        else {
            alert( "MOVE UNAVAILABLE");
            button.textContent=button.textContent;
        }
        
    });
    j++;
}
    
for (i=0; i<3; i++){
    let button = document.createElement("button");
    button.textContent = "[]";
    button.id = "button-"+j;
    fieldrow3.append(button);
    button.addEventListener("click", function () {
        if (button.textContent == "[]") {
            if (symbol == "X") {
                button.textContent = symbol;
                symbol= "O";}
            else {
                button.textContent = symbol;
                symbol = "X";}}
        else {
            alert( "MOVE UNAVAILABLE");
            button.textContent=button.textContent;
        }
        
    });
    j++;
}

document.getElementById("clear-button").addEventListener("click", function () {
    for (i=0; i<9; i++)
    {
        document.getElementById("button-" +i).textContent = "[]";
    }
    ;})

document.getElementById("winner").addEventListener("click", checkWinner());
    function checkWinner() {
        let text = "NO WINNER";
        let result = 0;
        for (i=0; i<3; i++) {
            
            if (document.getElementById("button-"+i).contains("X")) {
                result = 3;
            }
            else { result=0;}
        }
    }