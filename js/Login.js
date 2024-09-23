$(function(){
    var role = "";
    var userName = "";

    if(localStorage.length == 0){
        window.location.replace("Register.html");
    }

    $('#login').submit(function(event){
        event.preventDefault();

        userName = $('#username').val();
        var passwordRegister = $('#password').val();

        var user = localStorage.getItem(userName);

        if(user !== null)
        {
            $("#alertError").removeClass("d-block");
            $("#alertError").addClass("d-none");

            var data = JSON.parse(user);

            if(data.profile.password == passwordRegister)
            {
                $("#alertError").removeClass("d-block");
                $("#alertError").addClass("d-none");

                role = data.role;

                const session =
                {
                    user: userName,
                    roleName: role
                };

                sessionStorage.setItem("user", JSON.stringify(session));

                window.location.replace("main/main.html");
            }
            else
            {
                $("#alertError").removeClass("d-none");
                $("#alertError").addClass("d-block");
                $("#alertError").text("Error, contraseña incorrecta");
            }
        }
        else
        {
            $("#alertError").removeClass("d-none");
            $("#alertError").addClass("d-block");
            $("#alertError").text("Error, el usuario no existe, registrate o intentalo de nuevo");
        }
    });
})