// ===============================
// LOGIN FUNCTION
// ===============================

function login(){

let username = document.querySelector("input[type='text']").value;

let password = document.querySelector("input[type='password']").value;


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



// ===============================
// TIMER FUNCTION
// ===============================

let time = 40 * 60;


if(document.getElementById("timer")){


let timer = setInterval(function(){


let minutes = Math.floor(time / 60);

let seconds = time % 60;


document.getElementById("timer").innerHTML =
minutes + ":" + (seconds < 10 ? "0" : "") + seconds;



time--;



if(time < 0){


clearInterval(timer);

alert("Time Over! Test Submitted");


submitTest();


}



},1000);


}




// ===============================
// ASSESSMENT EVALUATION
// ===============================


function submitTest(){


let score = 0;



// MCQ Answers (10 Marks)


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


let selected =
document.querySelector(
'input[name="'+q+'"]:checked'
);



if(selected && selected.value === answers[q]){


score++;


}


}




// Error Correction (4 Marks)


let error1 =
document.querySelector(
'input[name="error1"]:checked'
);


if(error1 && error1.value === "semicolon"){


score += 2;


}




let error2 =
document.querySelector(
'input[name="error2"]:checked'
);


if(error2 && error2.value === "addsemicolon"){


score += 2;


}




// Coding Questions (6 Marks)


let codeBoxes =
document.querySelectorAll("textarea");


codeBoxes.forEach(function(box){


if(box.value.trim() !== ""){


score += 3;


}


});





// Save Result


localStorage.setItem(
"score",
score
);



// Move to Result Page


window.location.href =
"results.html";



}
