$("document").ready(function(){
    // To get the year
    $('#year').text(new Date().getFullYear());

    // Feather Icon
    feather.replace();

    // Login Modal
    $("#back").hide();
    $("#login").hide();
    $("#formRegister").hide();
    $("#formRegisterProfile").hide();
    
    $("#register").click(function(){
        $("#formLogin, #register, #forgotPassword").hide();
        $("#login, #formRegister").show();
    });

    $("#login").click(function(){
        $("#formLogin, #register, #forgotPassword").show();
        $("#login, #formRegister, #formRegisterProfile").hide();
    });

    $("#btnRegister").on("click", function(e){
        e.preventDefault();
        $("#formRegisterProfile, #back").show();
        $("#formRegister, #login").hide();
    });

    $("#back").click(function(){
        $("#formLogin, #register, #forgotPassword, #formRegisterProfile, #back").hide();
        $("#login, #formRegister").show();
    });

    if($(window).width() >= 768){
        $(this).scroll(function(){
            if ($(document).scrollTop() > 100) {
                $(".navbar .container-fluid").css("padding", "0 17%");
            } else {
                $(".navbar .container-fluid").css("padding", "1% 17%");
            }
        });
    }

});