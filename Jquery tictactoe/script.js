let game_grid = $("#tic-tac-toe");
let symbol = "X";
game_grid.find("button").click(function () {
    if ($(this).html()==""){
        $(this).html("<strong>" + symbol + "</strong>");
        
            if (symbol == "X") {
                symbol = "O";
            }
            else {
                symbol="X";
            }  
    } 
});

$("#clear-button").click(function () {
    game_grid.find("button").html("");
});

$(".winner_player1").click(function () {
    $(".winner").find("ul").append("<li>" +$(this).text() + "</li>");
    localStorage.setItem("item" +1,"<li>" +$(this).text() + "</li>");
});
$(".winner_player2").click(function () {
    $(".winner").find("ul").append("<li>" +$(this).text() + "</li>");
    localStorage.setItem("item" +1,"<li>" +$(this).text() + "</li>");
});

$(".winner").find("ul").append(localStorage.getItem("item1"));