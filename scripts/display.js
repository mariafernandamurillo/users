function displayTable(usersArray){
    const tbUsers= $("#tbUsers");
    let tr = "";
    //travel the array
    for(let i=0; i<usersArray.length; i++){
        let user = usersArray[i];
        //create tr
        tr = `
        <tr>
            <td>${user.email}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td style="background-color:${user.color}"></td>
        </tr>
        `;
        //append() the tr into the HTML
        tbUsers.append(tr);
    }
}

function init(){
    //console.log("Listening the users.js");

    let users = readUsers();
    //console.log(users);
    displayTable(users);
}

window.onload=init;