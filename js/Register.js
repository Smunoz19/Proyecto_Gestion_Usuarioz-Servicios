$(function(){
    let hasAdmin = false;

    if(localStorage.length > 0){
        for(let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            
            const admin = JSON.parse(localStorage.getItem(key));
            
            if(admin.role && admin.role == "admin")
            {
                hasAdmin = true;
                break;
            }
        }
    }
    
    if(hasAdmin == true)
    {
        $("#formRegisterAdmin").removeClass("d-block");
        $("#formRegisterAdmin").addClass("d-none");

        $("#formRegister").removeClass("d-none");
        $("#formRegister").addClass("d-block");
    }
    else
    {
        $("#formRegister").addClass("d-none");
        $("#footerRegister").addClass("d-none");

        $("#formRegisterAdmin").removeClass("d-none");
        $("#formRegisterAdmin").addClass("d-block");
        $(".card-header").html("<h5 style='color: white;'>NO EXISTE UN ADMINISTRADOR, CREA UNO</h5>");
    }

    $("#signUpAdmin").submit(function(event){
        event.preventDefault();

        var userName = $('#usernameAdmin').val();
        var passwordRegister = $('#passwordAdmin').val();

        const data = 
        {
            profile: 
            { 
                user: userName,
                password: passwordRegister
            },
            role: "admin"
        };

        var user = localStorage.getItem(userName);

        if(user !== null)
        {
            $("#alertErrorAdmin").removeClass("d-none");
            $("#alertErrorAdmin").addClass("d-block");
            $("#alertErrorAdmin").text("Error, el usuario ya existe");
        }
        else
        {
            localStorage.setItem(userName, JSON.stringify(data));
            $("#alertErrorAdmin").removeClass("d-block");
            $("#alertErrorAdmin").addClass("d-none");

            $("#formRegisterAdmin").removeClass("d-block");
            $("#formRegisterAdmin").addClass("d-none");
            $("#footerRegister").addClass("d-none");

            $("#formSuccess").removeClass("d-none");
            $("#formSuccess").addClass("d-block");
        }
    });

    $('#signUp').submit(function(event){
        event.preventDefault();

        var userName = $('#usernameSingUp').val();
        var passwordRegister = $('#passwordSingUp').val();

        const data = 
        {
            profile: 
            { 
                user: userName,
                password: passwordRegister
            },
            role: "viewer"
        };

        var user = localStorage.getItem(userName);

        if(user !== null)
        {
            $("#alertError").removeClass("d-none");
            $("#alertError").addClass("d-block");
            $("#alertError").text("Error, el usuario ya existe");
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
})