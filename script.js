// LOGIN

function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;


if(username === "admin" && password === "admin123"){

window.location.href = "admin.html";

}

else if(username === "student1" && password === "1234"){

window.location.href = "student.html";

}

else{

alert("Invalid Username or Password");

}

}
