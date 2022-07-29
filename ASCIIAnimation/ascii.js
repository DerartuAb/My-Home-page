$(document).ready(function () {
    var frame;
    var n = 0;
    var interval;

    $("#stop").prop("disabled", true);
    $("#speed").attr("disabled", true);


    $("#start").click(function () {
        $("#start").prop("disabled", true);
        $("#stop").prop("disabled", false);
        $("#animation").attr("disabled", true);
        $("#speed").attr("disabled", false);
        interval = setInterval(move, 250, n);
    });


    $("#stop").click(function () {
        $("#stop").prop("disabled", true);
        $("#start").prop("disabled", false);
        $("#size").attr("disabled", false);
        $("#animation").attr("disabled", false);
        $("#speed").attr("disabled", true);
        clearInterval(interval);
        $("#textarea").val(ANIMATIONS[$("#animation option:selected").val()]);
    });


    $("#animation").change(function () {
        $("#textarea").val(ANIMATIONS[$(this).val()]);
        frame = $("#textarea").val().split("=====\n");
    });


    $("#size").change(function () {
        var fontSize = $(this).val();
        $("#textarea").css("font-size", fontSize);
    });


    $("#speed").change(function () {
        if ($("#speed").is(":checked")) {
            clearInterval(interval);
            interval = setInterval(move, 50, n);
        } else {
            clearInterval(interval);
            interval = setInterval(move, 250, n);
        }
    });

    function move() {
        if (n === frame.length) {
            n = 0;
        }
        $("#textarea").val(frame[n]);
        n += 1;
    }
});