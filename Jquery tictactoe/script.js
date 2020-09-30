let game_grid = $("#tic-tac-toe");
let symbol = "X";
game_grid.find("button").click(function () {
    
        $(this).html("<strong>" + symbol + "</strong>");
        if (symbol == "X") {
            symbol = "O";
        }
        else {
            symbol="X";
        }   
});
