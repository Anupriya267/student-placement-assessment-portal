// ================= LOGIN =================

function login(){

    const username =
        document.getElementById("username")
        .value
        .trim();

    const password =
        document.getElementById("password")
        .value
        .trim();


    // ================= ADMIN LOGIN =================

    if(
        username === "admin" &&
        password === "admin123"
    ){

        localStorage.setItem(
            "loggedInUser",
            "admin"
        );

        window.location.href =
            "admin.html";

        return;

    }


    // ================= STUDENT LOGIN =================

    const students =
        JSON.parse(
            localStorage.getItem(
                "students"
            )
            ||
            "[]"
        );


    const student =
        students.find(
            function(s){

                return (
                    String(s.username)
                    .trim()
                    ===
                    username
                )
                &&
                (
                    String(s.password)
                    .trim()
                    ===
                    password
                );

            }
        );


    if(student){

        // Save logged-in student

        localStorage.setItem(
            "loggedInUser",
            "student"
        );


        localStorage.setItem(
            "studentName",
            student.name
        );


        localStorage.setItem(
            "studentUsername",
            student.username
        );


        localStorage.setItem(
            "studentYear",
            student.year
        );


        // IMPORTANT:
        // Student receives assigned day

        localStorage.setItem(
            "assignedDay",
            student.assignedDay
        );


        window.location.href =
            "student.html";

        return;

    }


    // ================= OLD TEST LOGIN =================
    // Keeps your existing student1 login working

    if(
        username === "student1" &&
        password === "1234"
    ){

        localStorage.setItem(
            "loggedInUser",
            "student"
        );


        localStorage.setItem(
            "studentName",
            "Student 1"
        );


        localStorage.setItem(
            "studentUsername",
            "student1"
        );


        localStorage.setItem(
            "studentYear",
            "Final Year"
        );


        localStorage.setItem(
            "assignedDay",
            "1"
        );


        window.location.href =
            "student.html";

        return;

    }


    // ================= INVALID LOGIN =================

    alert(
        "Invalid Username or Password"
    );

}



// =====================================================
// ASSESSMENT SUBMISSION
// =====================================================

function calculateAndSaveResult(){

    let questionBank =
        JSON.parse(
            localStorage.getItem(
                "questionBank"
            )
            ||
            "[]"
        );


    let assignedDay =
        localStorage.getItem(
            "assignedDay"
        )
        ||
        "1";


    let dayQuestions =
        questionBank.filter(
            function(q){

                return String(q.Day)
                ===
                String(assignedDay);

            }
        );


    if(
        dayQuestions.length === 0
    ){

        alert(
            "No questions found for this assessment."
        );

        return;

    }


    let score = 0;

    let totalObjective = 0;

    let answerSheet = [];


    dayQuestions.forEach(
        function(q,index){

            let type =
                String(
                    q["Question Type"]
                    ||
                    ""
                )
                .trim()
                .toUpperCase();


            let questionNumber =
                index + 1;


            let studentAnswer =
                "Not Answered";


            // ================= MCQ =================

            if(type === "MCQ"){

                totalObjective++;


                let selected =
                    document.querySelector(
                        'input[name="question_' +
                        questionNumber +
                        '"]:checked'
                    );


                if(selected){

                    studentAnswer =
                        selected.value;

                }


                let correctAnswer =
                    String(
                        q["Correct Answer"]
                        ||
                        ""
                    )
                    .trim();


                let isCorrect =
                    studentAnswer
                    ===
                    correctAnswer;


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


            // ================= ERROR =================

            else if(
                type === "ERROR"
                ||
                type === "ERROR CORRECTION"
            ){

                totalObjective++;


                let selected =
                    document.querySelector(
                        'input[name="question_' +
                        questionNumber +
                        '"]:checked'
                    );


                if(selected){

                    studentAnswer =
                        selected.value;

                }


                let correctAnswer =
                    String(
                        q["Correct Answer"]
                        ||
                        ""
                    )
                    .trim();


                let isCorrect =
                    studentAnswer
                    ===
                    correctAnswer;


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


            // ================= CODING =================

            else if(type === "CODING"){

                let codingBox =
                    document.getElementById(
                        "coding_" +
                        questionNumber
                    );


                let studentCode =
                    codingBox
                    ?
                    codingBox.value.trim()
                    :
                    "";


                answerSheet.push({

                    question:
                        q.Question,

                    studentAnswer:
                        studentCode
                        ?
                        studentCode
                        :
                        "Not Answered",

                    correctAnswer:
                        "Coding evaluation pending",

                    status:
                        "Pending"

                });

            }

        }
    );


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
        JSON.stringify(
            answerSheet
        )
    );


    localStorage.setItem(
        "submittedDay",
        assignedDay
    );


    // ================= RESULT PAGE =================

    window.location.href =
        "results.html";

}
