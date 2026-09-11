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

let time = 40 * 60;

let timer = setInterval(function(){

let minutes = Math.floor(time / 60);

let seconds = time % 60;


if(document.getElementById("timer")){

document.getElementById("timer").innerHTML =
minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

}


time--;


if(time < 0){

clearInterval(timer);

alert("Time Over! Test Submitted");

window.location.href="results.html";

}


},1000);




// SUBMIT TEST

function submitTest(){

let score = 0;


// MCQ ANSWERS

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


// CHECK MCQ

for(let q in answers){

let selected = document.querySelector(
'input[name="'+q+'"]:checked'
);


if(selected && selected.value === answers[q]){

score++;

}

}



// ERROR QUESTIONS

let errorAnswers = {

error1:"semicolon",

error2:"addsemicolon"

};


for(let q in errorAnswers){

let selected = document.querySelector(
'input[name="'+q+'"]:checked'
);


if(selected && selected.value === errorAnswers[q]){

score++;

}

}



// SAVE RESULT

localStorage.setItem("score", score);

localStorage.setItem("total", "12");


// GO TO RESULT PAGE

window.location.href = "results.html";


}
