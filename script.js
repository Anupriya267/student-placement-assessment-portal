function login(){

let username =
document.querySelector("input[type='text']").value;

let password =
document.querySelector("input[type='password']").value;


if(username==="admin" && password==="admin123"){

alert("Admin Login Successful");

window.location.href="admin.html";

}

else if(username==="student1" && password==="1234"){

alert("Student Login Successful");

window.location.href="student.html";

}

else{

alert("Invalid Username or Password");

}

}
