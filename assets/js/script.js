var introEl= document.getElementById("intro")
var questionSectionEl=document.getElementById("question-section")
var initialInputEl=document.getElementById("initial-input")
var highscoreEl=document.getElementById("highscore")
var startQuizEl=document.getElementById("start-quiz")
var questionTitleEl=document.getElementById("question-title")
var choiceListEl=document.getElementById("choice-list")

function startQuiz(){
    introEl.classList.add("hide")
    questionSectionEl.classList.remove("hide")
}

startQuizEl.addEventListener("click",startQuiz)