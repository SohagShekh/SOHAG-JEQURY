$("document").ready(function() {

    $('.btn1').click(function() {
        $('.p1').show(1000);
    });

    $('.btn2').click(function() {
        $('.p2').hide(1500);
        $('.btn3').css({
            "background-color": "red",
            "color": "white"
        });
    });
    $('.btn3').click(function() {
        $('.p2').show(2000);
        $('.p2').css("background-color", "blue")
        $(this).css("background-color", "green")
    });

    $('h2').click(function() {
        $('.p3').slideToggle(1500);
    })

    $('.btn4').click(function() {
        $('.box').slideToggle(1500);
        $('.box').animate({
            left: '600px',
            width: '150px',
            height: '150px',

        })
    })


});