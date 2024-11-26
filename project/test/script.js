const questions = [
    {
        question: "Where is the prymaid of Giza located?",
        answers: [
            { text: "Egypt", correct: true },
            { text: "France", correct: false },
            { text: "England", correct: false },
            { text: "Japan", correct: false }
        ]
    },
    {
        question: "Which country is home to the Brandenburg Gate Bridge Located?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: false },
            { text: "India", correct: false },
            { text: "Germany", correct: true }
        ]
    },
    {
        question: "Where is the Taj Mahal located?",
        answers: [
            { text: "France", correct: false },
            { text: "Egypt", correct: false },
            { text: "India", correct: true },
            { text: "Berlin", correct: false }
        ]
    },
    {
        question: "In which country would you find the Statue of Liberty?",
        answers: [
            { text: "France", correct: false },
            { text: "USA", correct: true },
            { text: "Italy", correct: false },
            { text: "Germany", correct: false }
        ]
    },
    {
        question: "Where is the Mount Fuji located?",
        answers: [
            { text: "Japan", correct: true },
            { text: "France", correct: false },
            { text: "Italy", correct: false },
            { text: "China", correct: false }
        ]
    },
    {
        question: "Where is the Colosseum located?",
        answers: [
            { text: "France", correct: false },
            { text: "Turkey", correct: false },
            { text: "Italy", correct: true },
            { text: "UAE", correct: false }
        ]
    },
    {
        question: "Where is the Sydney Opera House located?",
        answers: [
            { text: "Spain", correct: false },
            { text: "USA", correct: false },
            { text: "New Zealand ", correct: false },
            { text: "Australia", correct: true }
        ]
    },
    {
        question: "Where is the Sagrada Família located?",
        answers: [
            {text: "Berlin", correct:false},
            {text: "Spain", correct:true},
            {text: "France", correct:false},
            {text: "Italy", correct:false}
      
        ]
    },
    {
        question: "Where is the Acropolis of Athens located?",
        answers: [
            { text: "Italy", correct: false },
            { text: "Spain", correct: false },
            { text: "Greece", correct: true },
            { text: "Turkey", correct: false }
        ]
    },
    {
        question: "Where is the Burj Khalifa located?",
        answers: [
            {text: "Cairo", correct:false},
            {text: "Doha", correct:false},
            {text: "Paris", correct:false},
            {text: "Dubai", correct:true}
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer_btn');
const nextButton = document.getElementById('next');

startQuiz();

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });

    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    resetState();
    questionElement.innerText = `Quiz Finished! You scored ${score} out of ${questions.length}.`;
    nextButton.innerText = 'Restart';
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', startQuiz);
}
