function saveUser(user){
    let registeredUsers = readUsers(); //Get the users form LS
    registeredUsers.push(user); //add the new user to the registered users list.

    //console.log(user);
    //Local Storage need strings, that's why we need user JSON (JS Object Notation)

    let val = JSON.stringify(registeredUsers); 
    //console.log(val);
    localStorage.setItem("users",val); //Send elements to local storage
}

function readUsers(){
    let users = localStorage.getItem("users"); //Get the data from de LS
    //console.log(users); //We get ab string

    if(!users){//If there are not users
        return []; //Then create an array
    }else{
        //if there is users
        let listUsers = JSON.parse(users); //Convert the string to an object
        console.log(listUsers);
        return listUsers;
    }
}

//typeof  -> to know what type of data something is.