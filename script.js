function login(){

let username = document.getElementById("username").value;

let password = document.getElementById("password").value;


alert(username + " " + password);


if(username=="admin" && password=="admin123"){

window.location.href="admin.html";

}

else{

alert("Wrong login");

}

}
