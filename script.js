// ================= LOGIN =================

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



// ================= TIMER =================

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



// ================= SUBMIT TEST =================

function submitTest(){

    let score = 0;


    // ================= MCQ ANSWERS =================

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


    let answerSheet = [];



    // ================= CHECK MCQs =================

    for(let q in answers){

        let selected =
            document.querySelector(
                'input[name="' + q + '"]:checked'
            );


        let studentAnswer =
            selected ? selected.value : "Not Answered";


        let correctAnswer =
            answers[q];


        let isCorrect =
            studentAnswer === correctAnswer;


        if(isCorrect){

            score++;

        }


        answerSheet.push({

            question: q.toUpperCase(),

            studentAnswer: studentAnswer,

            correctAnswer: correctAnswer,

            status: isCorrect ? "Correct" : "Wrong"

        });

    }



    // ================= ERROR QUESTION 1 =================

    let error1 =
        document.querySelector(
            'input[name="error1"]:checked'
        );


    let error1Answer =
        error1 ? error1.value : "Not Answered";


    let error1Correct = "semicolon";


    let error1CorrectStatus =
        error1Answer === error1Correct;


    if(error1CorrectStatus){

        score++;

    }


    answerSheet.push({

        question: "ERROR 1",

        studentAnswer:
            error1Answer === "semicolon"
            ? "Add semicolon"
            : error1Answer === "remove"
            ? "Remove println"
            : "Not Answered",

        correctAnswer: "Add semicolon",

        status:
            error1CorrectStatus
            ? "Correct"
            : "Wrong"

    });



    // ================= ERROR QUESTION 2 =================

    let error2 =
        document.querySelector(
            'input[name="error2"]:checked'
        );


    let error2Answer =
        error2 ? error2.value : "Not Answered";


    let error2Correct = "addsemicolon";


    let error2CorrectStatus =
        error2Answer === error2Correct;


    if(error2CorrectStatus){

        score++;

    }


    answerSheet.push({

        question: "ERROR 2",

        studentAnswer:
            error2Answer === "addsemicolon"
            ? "Add semicolon after condition"
            : error2Answer === "remove"
            ? "Remove loop"
            : "Not Answered",

        correctAnswer:
            "Add semicolon after condition",

        status:
            error2CorrectStatus
            ? "Correct"
            : "Wrong"

    });



    // ================= CODING ANSWERS =================

    let codingBoxes =
        document.querySelectorAll("textarea");


    let coding1 =
        codingBoxes[0]
        ? codingBoxes[0].value
        : "";


    let coding2 =
        codingBoxes[1]
        ? codingBoxes[1].value
        : "";


    // Coding is displayed but NOT automatically scored yet

    answerSheet.push({

        question: "CODING 1",

        studentAnswer:
            coding1.trim()
            ? coding1
            : "Not Answered",

        correctAnswer:
            "Automatic coding evaluation will be added later.",

        status: "Pending"

    });


    answerSheet.push({

        question: "CODING 2",

        studentAnswer:
            coding2.trim()
            ? coding2
            : "Not Answered",

        correctAnswer:
            "Automatic coding evaluation will be added later.",

        status: "Pending"

    });



    // ================= SAVE RESULT =================

    localStorage.setItem(
        "score",
        score
    );


    localStorage.setItem(
        "total",
        12
    );


    localStorage.setItem(
        "answerSheet",
        JSON.stringify(answerSheet)
    );



    // ================= NAVIGATION =================

    window.location.href = "results.html";

}
