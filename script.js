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
let time = 40 * 60;

let timer = setInterval(function(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

document.getElementById("timer").innerHTML =
minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

time--;

if(time < 0){

clearInterval(timer);

alert("Time Over! Test Submitted");

window.location.href="results.html";

}

},1000);
