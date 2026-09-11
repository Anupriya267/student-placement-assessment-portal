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


// TIMER

if(document.getElementById("timer")){

let time = 40 * 60;

let timer = setInterval(function(){

let min = Math.floor(time / 60);
let sec = time % 60;

document.getElementById("timer").innerHTML =
min + ":" + (sec < 10 ? "0" : "") + sec;


time--;


if(time < 0){

clearInterval(timer);
submitTest();

}

},1000);

}


// SUBMIT

function submitTest(){

let score = 0;


let answers = {

q1:"new",
q2:"for",
q3:"int",
q4:"==",
q5:"if",
q6:"0",
q7:"Object Oriented",
q8:"&&",
q9:"main",
q10:"final"

};


for(let q in answers){

let answer =
document.querySelector(
'input[name="'+q+'"]:checked'
);


if(answer && answer.value == answers[q]){

score++;

}

}


localStorage.setItem("score",score);


window.location.href="results.html";

}
