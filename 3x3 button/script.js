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

document.getElementById("winner").addEventListener("click", 
    function () {
        var moves = new Array (9);
        let text = "No winner!"
        for (i=0; i<moves.length; i++)
        {
            moves[i]= document.getElementById("button-"+i).textContent;
        }
        if (((moves[0]=="X")&&(moves[1]=="X")&&(moves[2]=="X"))||((moves[3]=="X")&&(moves[4]=="X")&&(moves[5]=="X"))||((moves[6]=="X")&&(moves[7]=="X")&&(moves[8]=="X")))
        {
           text = "Winner X !";
        }
        if (((moves[0]=="O")&&(moves[1]=="O")&&(moves[2]=="O"))||((moves[3]=="O")&&(moves[4]=="O")&&(moves[5]=="O"))||((moves[6]=="O")&&(moves[7]=="O")&&(moves[8]=="O")))
        {
            text = "Winner O !";
        }
        if (((moves[0]=="X")&&(moves[3]=="X")&&(moves[6]=="X"))||((moves[1]=="X")&&(moves[4]=="X")&&(moves[7]=="X"))||((moves[2]=="X")&&(moves[5]=="X")&&(moves[8]=="X")))
        {
            text = "Winner X !";
        }
        if (((moves[0]=="O")&&(moves[3]=="O")&&(moves[6]=="O"))||((moves[1]=="O")&&(moves[4]=="O")&&(moves[7]=="O"))||((moves[2]=="O")&&(moves[5]=="O")&&(moves[8]=="O")))
        {
            text = "Winner X !";
        }
        if (((moves[0]=="X")&&(moves[4]=="X")&&(moves[8]=="X"))||((moves[2]=="X")&&(moves[4]=="X")&&(moves[6]=="X")))
        {
            text = "Winner X !";
        }
        if (((moves[0]=="O")&&(moves[4]=="O")&&(moves[8]=="O"))||((moves[2]=="O")&&(moves[4]=="O")&&(moves[6]=="O")))
        {
            text="Winner O !";
        }
        
        document.getElementById("winner").textContent=text;
        
    })