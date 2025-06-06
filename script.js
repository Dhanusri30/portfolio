const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HyperText Markdown Language",
            "HyperTool Markup Language",
            "Hyper Transfer Markup Language"
        ],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to define an internal stylesheet?",
        options: ["<css>", "<style>", "<script>", "<link>"],
        correct: 1,
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Central Style Sheets",
            "Cascading Simple Sheets",
            "Creative Style Sheets"
        ],
        correct: 0,
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "background-color", "bgcolor", "background"],
        correct: 1,
    },
    {
        question: "What does the 'id' selector in CSS target?",
        options: [
            "All elements with the same name",
            "A specific element with a unique ID",
            "All elements with the same class",
            "All elements in the document"
        ],
        correct: 1,
    },
    {
        question: "Which is the correct syntax to include an external JavaScript file?",
        options: [
            "<script href='script.js'>",
            "<script src='script.js'>",
            "<script file='script.js'>",
            "<script link='script.js'>"
        ],
        correct: 1,
    },
    {
        question: "Which JavaScript method is used to write content into the browser window?",
        options: ["console.log()", "document.write()", "window.alert()", "innerHTML"],
        correct: 1,
    },
    {
        question: "Which HTTP method is typically used to submit data to be processed to a server?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 1,
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        options: [
            "To create links to external files",
            "To define metadata about the document",
            "To specify the document's title",
            "To include JavaScript files"
        ],
        correct: 1,
    },
    {
        question: "What is the purpose of a CSS media query?",
        options: [
            "To define animations",
            "To apply styles based on screen size or device type",
            "To query databases",
            "To create responsive images"
        ],
        correct: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;

    answersDiv.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-button");
        button.onclick = () => selectAnswer(index);
        answersDiv.appendChild(button);
    });

    nextButton.disabled = true;
}

function selectAnswer(index) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (index === correctAnswer) {
        score++;
    }
    document.querySelectorAll(".answer-button").forEach((button, idx) => {
        button.disabled = true;
        button.style.backgroundColor = idx === correctAnswer ? "#28a745" : "#dc3545";
    });
    nextButton.disabled = false;
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayScore();
    }
};

function displayScore() {
    questionText.style.display = "none";
    answersDiv.style.display = "none";
    nextButton.style.display = "none";
    scoreDisplay.style.display = "block";
    scoreDisplay.textContent = `Your score: ${score} / ${questions.length}`;
}

// Initialize the first question
loadQuestion();
