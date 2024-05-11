var introEl= document.getElementById("intro")
var questionSectionEl=document.getElementById("question-section")
var initialInputEl=document.getElementById("initial-input")
var highscoreEl=document.getElementById("highscore")
var startQuizEl=document.getElementById("start-quiz")
var questionTitleEl=document.getElementById("question-title")
var choiceListEl=document.getElementById("choice-list")
var timerEl=document.getElementById("timer")
var messageEl=document.getElementById("message")
var setIntervalId
var timeLeft=questionData.length * 15
var index=0


function startQuiz(){
    introEl.classList.add("hide")
    questionSectionEl.classList.remove("hide")

    setIntervalId=setInterval(startTimer , 1000)
}
function renderQuestion(){
    messageEl.innerHTML=""
    questionTitleEl.textContent=questionData[index].title
    choiceListEl.textContent=""
    for(var i=0; i<questionData[index].choices.length; i++){
        var li=document.createElement("li")
        var button=document.createElement("button")
        button.textContent=questionData[index].choices[i]
        li.appendChild(buton)
        choiceListEl.appendChild(li)
    }


}

function startTimer(){
    timerEl.textContent=timeLeft--
}
function nextQuestion(event){
    var currentChoiceButton=event.target
    var solution=questionData[index].solution
    index++
    if(index < questionData.length){
        questionData
        if(currentChoiceButton.textContent === solution){
            messageEl.innerHTML="<h3>Correct Answer!</h3>"
        }else{
            messageEl.innerHTML="<h3>Wrong Answer!</h3>"
            timeLeft=timeLeft-10
        }


        setTimeout(renderQuestion, 500)
    }else{
        endQuiz()
    }
    

}

function endQuiz(){
    clearInterval(setIntervalId)
    questionSectionEl.classList.add("hide")
}
startQuizEl.addEventListener("click",startQuiz)
choiceListEl.addEventListener("click",nextQuestion)