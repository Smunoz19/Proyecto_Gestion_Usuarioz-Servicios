$(function(){
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    $("#roleUser").text("Rol: " + user.roleName);
    $("#userName").text("Usuario: " + user.user);

    if(user.roleName == "admin")
    {
        $("#uploadImage").removeClass("d-none");
        $("#uploadImage").addClass("d-block");

        $("#createUserContanier").removeClass("d-none");
        $("#createUserContanier").addClass("d-block");

        document.getElementById('photoUpload').addEventListener('change', function(event) {
            var file = event.target.files[0];
            var reader = new FileReader();
            
            reader.onload = function(e) {
                var img = document.getElementById('preview');
                img.src = e.target.result;
                img.style.display = 'block';
            };
            
            if (file) {
                reader.readAsDataURL(file);
            }
        });
    }
    else
    {
        $("#uploadImage").removeClass("d-block");
        $("#uploadImage").addClass("d-none");
    }

    $("#closeSession").on("click", function(){
        sessionStorage.clear();

        window.location.replace("../index.html");
    });

    $("#createUser").on("click", function(){
        window.location.href = "../Register_User.html";
    });
});