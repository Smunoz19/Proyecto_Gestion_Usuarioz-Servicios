$(function(){
    $('#signUpUser').submit(function(event){
        event.preventDefault();

        var userName = $('#usernameUser').val();
        var passwordRegister = $('#passwordUser').val();
        var roles = $("#roleUser").val();

        const data = 
        {
            profile: 
            { 
                user: userName,
                password: passwordRegister
            },
            role: roles
        };

        var user = localStorage.getItem(userName);

        if(user !== null)
        {
            $("#alertErrorUser").removeClass("d-none");
            $("#alertErrorUser").addClass("d-block");
            $("#alertErrorUser").text("Error, el usuario ya existe");
        }
        else
        {
            localStorage.setItem(userName, JSON.stringify(data));
            $("#alertError").removeClass("d-block");
            $("#alertError").addClass("d-none");

            $("#formRegister").addClass("d-none");
            $("#footerRegister").addClass("d-none");

            $("#formSuccess").removeClass("d-none");
            $("#formSuccess").addClass("d-block");
        }
    });

    $("#goBack").on("click", function(){
        window.history.back();
    });
});