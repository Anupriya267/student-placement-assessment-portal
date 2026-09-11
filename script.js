alert("Script Loaded");


let time = 40 * 60;

let timer = setInterval(function(){

let timerBox = document.getElementById("timer");

if(timerBox){

let min = Math.floor(time / 60);
let sec = time % 60;

timerBox.innerHTML = min + ":" + (sec < 10 ? "0" : "") + sec;

}

time--;

},1000);



function submitTest(){

window.location.href="results.html";

}



function login(){

let username = document.getElementById("username").value.trim();

let password = document.getElementById("password").value.trim();


if(username=="admin" && password=="admin123"){

window.location.href="admin.html";

}

else if(username=="student1" && password=="1234"){

window.location.href="student.html";

}

else{

alert("Invalid Username or Password");

}

}
