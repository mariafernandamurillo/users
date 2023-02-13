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

    //Clear the form
    $("#txtEmail").val('');
    $("#txtPassword").val('');
    $("#txtFirstName").val('');
    $("#txtLastName").val('');
    $("#txtAge").val('');
    $("#txtGender").val('');
    $("#txtTel").val('');
    $("#txtPayment").val('');
    $("#txtColor").val('');

    console.log(newUser);
}

function init(){
//Something here.
    $("#btnAdd").click(register);
}
window.onload=init;