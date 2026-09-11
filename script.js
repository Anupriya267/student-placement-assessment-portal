// LOGIN

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

if(document.getElementById("timer")){

let time = 40 * 60;


let timer = setInterval(function(){


let timerBox = document.getElementById("timer");


if(timerBox){

let min = Math.floor(time / 60);

let sec = time % 60;


timerBox.innerHTML =
min + ":" + (sec < 10 ? "0" : "") + sec;

}


time--;


if(time < 0){

clearInterval(timer);

submitTest();

}


},1000);

}



// SUBMIT ASSESSMENT

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



// Check MCQ

for(let q in answers){

let selected =
document.querySelector(
'input[name="'+q+'"]:checked'
);


if(selected && selected.value === answers[q]){

score++;

}

}



// Error correction

let error1 =
document.querySelector(
'input[name="error1"]:checked'
);


if(error1 && error1.value === "semicolon"){

score++;

}



let error2 =
document.querySelector(
'input[name="error2"]:checked'
);


if(error2 && error2.value === "addsemicolon"){

score++;

}



// Save result

localStorage.setItem("score",score);

localStorage.setItem("total",12);



// Go result page

window.location.href="results.html";


}
