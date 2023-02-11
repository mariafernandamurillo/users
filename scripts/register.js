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
    let inputEmail = $("#txtEmail").val();
    let inputPasswords = $("#txtPassword").val();
    let inputFname = $("#txtFirstName").val();
    let inputLname = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtTel").val();
    let inputPayment = $("#txtPayment").val();
    let inputColor = $("#txtColor").val();

    let newUser = new User (inputEmail, inputPasswords, inputFname, inputLname, inputAge, inputGender, inputPhone, inputPayment, inputColor);

    console.log(newUser);
}

function init(){
//Something here.
    $("#btnAdd").click(register);
}
window.onload=init;