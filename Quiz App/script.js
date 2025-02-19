const question = [
    {
        question: "which is largest animal in the world ? ",
        answer:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is largest animal in the world ? ",
        answer:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is largest animal in the world ? ",
        answer:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is largest animal in the world ? ",
        answer:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is largest animal in the world ? ",
        answer:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButton.firstChild);
    }
}

startQuiz()