function login(){
    let valid = true;

    //get the values from the HTML (username, pass)
    let userName = $("#txtUserName").val();
    let password = $("#txtPassword").val();

    //travel the users from the LS
    let users = readUsers();
    //console.log(users);

    //travel the users array
    for(let i=0; i<users.length; i++){
        let user = users[i];

        //compare
        if((userName == user.email) && (password == user.pass)){
            console.log("Valid");
            window.location.href="users.html";
            valid = true;
        }else{
            valid = false;
        }
    }

    if(!valid){ //valid == false === !valid
        //alert("Username or Password Incorrect");
        $("#loginError").removeClass("hide");
        setTimeout(function (){
            $("#loginError").addClass("hide");
        },3000);
    }
}


