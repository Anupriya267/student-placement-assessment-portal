// LOGIN FUNCTION

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



// TIMER FOR ASSESSMENT PAGE

let time = 40 * 60;

let timer = setInterval(function(){

    let timerBox = document.getElementById("timer");

    if(timerBox){

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timerBox.innerHTML =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        time--;

    }


    if(time < 0){

        clearInterval(timer);

        localStorage.setItem("score",0);

        window.location.href = "results.html";

    }


},1000);




// SUBMIT ASSESSMENT

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
        q10:"final",
        error1:"semicolon",
        error2:"addsemicolon"

    };


    for(let question in answers){

        let selected =
        document.querySelector(
        'input[name="'+question+'"]:checked'
        );


        if(selected && selected.value === answers[question]){

            score++;

        }

    }


    localStorage.setItem("score", score);

    localStorage.setItem("total", "12");


    window.location.href = "results.html";

}
