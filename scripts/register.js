//create a constructor for the users
function User(email, pass, fname, lname, age, gender, phone, payment, color){
    this.email = email;
    this.pass = pass;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

function validate(user){
    let valid = true;

    if (user.email==""){
        $("#txtEmail").addClass("input-alert-error");      
        valid = false;   
    }
    if (user.pass==""){
        $("#txtPassword").addClass("input-alert-error");      
        valid = false;    
    }
    if (user.fname==""){
        $("#txtFirstName").addClass("input-alert-error");    
        valid = false;      
    }    
    if (user.lname==""){
        $("#txtLastName").addClass("input-alert-error");   
        valid = false;       
    }  
    if (user.age==""){
        $("#txtAge").addClass("input-alert-error");     
        valid = false;     
    } 
    if (user.gender==""){
        $("#txtGender").addClass("input-alert-error");  
        valid = false;        
    } 
    if (user.phone==""){
        $("#txtTel").addClass("input-alert-error");     
        valid = false;     
    } 
    if (user.payment==""){ //Not Working 
        $("#txtPayment").addClass("input-alert-error");  
        valid = false;        
    } 
    if (user.color=="#ffffff"){ //Not Working 
        $("#txtColor").addClass("input-alert-error");   
        valid = false;       
    } 

    return valid;
}

function register(){
    //Get the values from the form.
    let inputEmail = $("#txtEmail").val();
    let inputPasswords = $("#txtPassword").val();
    let inputFname = $("#txtFirstName").val();
    let inputLname = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtTel").val();
    let inputPayment = $("#txtPayment").val();
    let inputColor = $("#txtColor").val();

    //Create an newUser object
    let newUser = new User (inputEmail, inputPasswords, inputFname, inputLname, inputAge, inputGender, inputPhone, inputPayment, inputColor);

    //Validate new user
        if(validate(newUser)){
            //Clear the form

        //My way
        /* 
        $("#txtEmail").val('');
        $("#txtPassword").val('');
        $("#txtFirstName").val('');
        $("#txtLastName").val('');
        $("#txtAge").val('');
        $("#txtGender").val('');
        $("#txtTel").val('');
        $("#txtPayment").val('');
        $("#txtColor").val('');*/

        //Other way
        $("input").val('');

        //console.log(newUser);
        saveUser(newUser);        
    }
}

function init(){
//Something here.
    $("#btnAdd").click(register);
}
window.onload=init;