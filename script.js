// ================= LOGIN =================

function login(){

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value.trim();

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


// ================= ASSESSMENT SUBMISSION =================

function calculateAndSaveResult(){

    let questionBank =
        JSON.parse(
            localStorage.getItem("questionBank") || "[]"
        );

    let assignedDay =
        localStorage.getItem("assignedDay") || "1";


    // Get questions for current day

    let dayQuestions =
        questionBank.filter(function(q){

            return String(q.Day) === String(assignedDay);

        });


    if(dayQuestions.length === 0){

        alert("No questions found for this assessment.");

        return;

    }


    let score = 0;

    let totalObjective = 0;

    let answerSheet = [];



    // ================= CHECK QUESTIONS =================

    dayQuestions.forEach(function(q, index){

        let type =
            String(q.Type || "").toUpperCase();

        let questionNumber =
            index + 1;

        let studentAnswer = "Not Answered";


        // ---------- MCQ ----------

        if(type === "MCQ"){

            totalObjective++;

            let selected =
                document.querySelector(
                    'input[name="mcq_' +
                    questionNumber +
                    '"]:checked'
                );

            if(selected){

                studentAnswer =
                    selected.value;

            }


            let correctAnswer =
                String(q["Correct Answer"] || "")
                .trim();


            let isCorrect =
                studentAnswer === correctAnswer;


            if(isCorrect){

                score++;

            }


            answerSheet.push({

                question:
                    q.Question,

                studentAnswer:
                    studentAnswer,

                correctAnswer:
                    correctAnswer,

                status:
                    isCorrect
                    ? "Correct"
                    : "Wrong"

            });

        }



        // ---------- ERROR CORRECTION ----------

        else if(
            type === "ERROR" ||
            type === "ERROR CORRECTION"
        ){

            totalObjective++;

            let selected =
                document.querySelector(
                    'input[name="error_' +
                    questionNumber +
                    '"]:checked'
                );


            if(selected){

                studentAnswer =
                    selected.value;

            }


            let correctAnswer =
                String(q["Correct Answer"] || "")
                .trim();


            let isCorrect =
                studentAnswer === correctAnswer;


            if(isCorrect){

                score++;

            }


            answerSheet.push({

                question:
                    q.Question,

                studentAnswer:
                    studentAnswer,

                correctAnswer:
                    correctAnswer,

                status:
                    isCorrect
                    ? "Correct"
                    : "Wrong"

            });

        }



        // ---------- CODING ----------

        else if(type === "CODING"){

            let codingBox =
                document.getElementById(
                    "coding_" + questionNumber
                );


            let studentCode =
                codingBox
                ? codingBox.value.trim()
                : "";


            answerSheet.push({

                question:
                    q.Question,

                studentAnswer:
                    studentCode
                    ? studentCode
                    : "Not Answered",

                correctAnswer:
                    "Automatic coding evaluation will be added later.",

                status:
                    "Pending"

            });

        }

    });



    // ================= SAVE RESULT =================

    localStorage.setItem(
        "score",
        score
    );


    localStorage.setItem(
        "total",
        totalObjective
    );


    localStorage.setItem(
        "answerSheet",
        JSON.stringify(answerSheet)
    );


    localStorage.setItem(
        "submittedDay",
        assignedDay
    );


    // ================= GO TO RESULT =================

    window.location.href =
        "results.html";

}
