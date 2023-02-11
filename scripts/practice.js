//JS VS JQ

//Select HTML elements and hide it

/* By ID */
document.getElementById("txtEmail").style.display="none";

$("#txtPassword").hide();

/* By Tag Name */
for(let i=0; i<3;i++){
    document.getElementsByTagName("input")[i].style.display="none";
}

//$("label").hide();

/* By Class Name */ //No working
document.getElementsByClassName("menu")[0].style.display="none";

$(".menu a:first").hide();

function btnAdd(){
    $(".form").hide();
}

$("button").click(btnAdd);

/*$(document).click(function(){
    $(".form").show(); 
  // alert("click");
});*/
