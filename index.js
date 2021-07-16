function diceRoller() {
    var player1Num = Math.floor((Math.random() * 6 )+ 1);
    var player2Num = Math.floor((Math.random() * 6 )+ 1);

    var player1Img = "images/dice" + player1Num + ".png";
    var player2Img = "images/dice" + player2Num + ".png";

    document.querySelector(".img1").setAttribute("src", player1Img);
    document.querySelector(".img2").setAttribute("src", player2Img);

    if(player2Num < player1Num) {
        document.querySelector("h1").innerText = "🥇 Player 1 Wins!";
    } else if (player2Num > player1Num) {
        document.querySelector("h1").innerText = "Player 2 Wins! 🏆";
    } else {
        document.querySelector("h1").innerText = "Draw 🙉";
    }

}
