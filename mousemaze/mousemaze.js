$(document).ready(function(){
	let gameStarted = false;

    $(".boundary").mouseover(gameOver);

    $("#maze").mouseleave(gameOver);

    $("#start").click(function() {
        gameStarted = true;
        $(".boundary").css("background-color","rgb(238, 238, 238)");
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started!");
		$("#start").css("background-color","rgb(0, 230, 115)");
    });

    $("#end").click(function() {
        gameStarted = false;
        $(".boundary").css("background-color","rgb(238, 238, 238)");
        $(".boundary").removeClass("youlose");
        $("#status").text("Game Ended!");
		$("#start").css("background-color","rgb(136, 255, 136)");
    });

    $("#end").mouseenter(gameWin);

    function gameOver() {
        if (gameStarted) {
            $(".boundary").addClass("youlose");
            $("#status").text("Game Over!");
            $(".boundary").css("background-color","rgb(255, 51, 119)");
            gameStarted = false;
        }
    }

    function gameWin() {
        if (gameStarted) {
            $("#status").text("You won!");
            $(".boundary").css("background-color","rgb(77, 255, 136)");
            gameStarted = false;
        }
    }
	
})