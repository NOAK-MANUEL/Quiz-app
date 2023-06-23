const Choices = document.querySelectorAll("input");
let start = document.querySelector('.begin')
let mHead = document.querySelector('.m-head')
let pHead = document.querySelector('.p-head')
let sound = document.querySelector('.mouse')
const headDisplay = document.getElementById("head")
const nextBtn = document.getElementById("next")
const previousBtn = document.getElementById("previous")
const options = document.querySelectorAll(".options")
const totalQuestionsDisplay = document.querySelectorAll("#totalQuestions")
const currentQuestionIndexDisplay = document.getElementById("currentQuestion") 
const timeDisplay = document.getElementById("timer")
const questionContainer = document.querySelector("#questionContainer")
let infoContainer = document.querySelector('.info-container')
let check = document.querySelector('.check')




let time = 50;
let currentQuestion;
let totalQuestions;
let questionLeft;
let avaliableQuestions;
let randomIndex;
let result = 0;
const questions = [
  {
    question: "What is a web developer purpose",
    options:{
      A: "To Flex",
      B: "For stating laws",
      C: "To create a more global world",
      D: "Just for fun",
    },
    answer: "choice3"
    
  },
  {
    question: "Each are well suited for storage",
    options:{
      A:  "PHP" ,
      B:  "Python",
      C:  "SSS",
      D:  "MongoDB",
    },
    answer: "choice4"
  },
  // {
  //   question: "What progamming language is best suited for security purpose",
  //   options:{
  //     A: " Python",
  //     B: " Java",
  //     C: " PHP",
  //     D: "JavaScript",
  //   },
  //   answer: "choice2"
  // },
  // {
  //   question: "What progamming language is best suited for front end",
  //   options:{
  //     A: " Python",
  //     B: " Java",
  //     C: " PHP",
  //     D: "JavaScript",
  //   },
  //   answer: "choice4"
  // },
  // {
  //   question: "Which of this is not a programming language",
  //   options:{
  //     A: "MySQL",
  //     B: " Java",
  //     C: " PHP",
  //     D: "JavaScript",
  //   },
  //   answer: "choice1"
  // },
  // {
  //   question: "What word describes the of instructions that computers need  to do work",
  //   options:{
  //     A: "Agenda",
  //     B: "Blueprint",
  //     C: "Program",
  //     D: "Synopsis",
  //   },
  //   answer: "choice3"
  // },

]
// let input;
let timer;
function restartQuiz(e) {
  window.location.reload()
}
  function game() {
    let currentIndex = 0;
    avaliableQuestions = [...questions];
    avaliableQuestions.sort(()=> 0.5 - Math.random())
    timeDisplay.innerHTML = time;
    totalQuestionsDisplay.forEach(totalQuestionDisplay=> totalQuestionDisplay.innerHTML = questions.length);

    getQuestion(currentIndex)
    move(currentIndex);
    getAnswer(currentIndex)
    timer = setInterval(() => {
      time--
      timeDisplay.innerHTML = time
      quizOver(time)
    }, 1000);
  }
  
  
  function getQuestion(currentIndex) {
    currentQuestionIndexDisplay.innerHTML = currentIndex + 1
    currentQuestion = avaliableQuestions[currentIndex]
    headDisplay.innerHTML = currentQuestion.question;
    
    if ((currentIndex + 1) === avaliableQuestions.length) {
      nextBtn.disabled = true;
    }else nextBtn.disabled = false
    
    if (currentIndex === 0) {
      previousBtn.disabled = true
    }else{
      previousBtn.disabled = false
    }
    // for (let i = 0; i < options.length; i++) {
    //  input = document.createElement("input");
    //   input.setAttribute("type", "radio");
    //   input.setAttribute("name", "input");
    //   input.id = "choice" + i;
    //   for (const [key, value] of Object.entries(currentQuestion.options)) {
    //     if (options[i].id ===key) {
    //       options[i].innerHTML = key +": " + value;
    //       options[i].append(input)
    //       }
    // }
    // }
  options.forEach(choice =>{
      for (const [key, value] of Object.entries(currentQuestion.options)) {
        if (choice.id ===key) {
          choice.innerHTML = key +": " + value;
          }
    }
      
  })
}

function getAnswer(currentIndex) {
  Choices.forEach(choice =>{
    choice.addEventListener("click", function checkAns(){
      if (choice.id === avaliableQuestions[currentIndex].answer ) {
        result += 1;
        choice.removeEventListener("click", checkAns)
      }else{
        result +=0
        choice.removeEventListener("click", checkAns)
      }
    
    })   
  })
  
  // if (input.id === avaliableQuestions[currentIndex].answer) {
  //   alert("yes")
  // }else alert("no");
  // console.log(result);
  // input.addEventListener("click", (e)=>{
  //   e.target.value = true
  //   alert("h")
  // })
}

function move(currentIndex){
    nextBtn.addEventListener("click", ()=>{
      currentIndex++ 
      getQuestion(currentIndex)
      getAnswer(currentIndex)
      Choices.forEach(choice =>{
          choice.checked === false
      })
    })

    previousBtn.addEventListener("click", ()=>{
      currentIndex-- 
      getQuestion(currentIndex)
      getAnswer(currentIndex)
      
    })
    
}

function quizOver(time) {
  if (time === 0) {
    clearInterval(timer)
    removeEventListener("click", getAnswer)
    alert("Your time is up")
    questionContainer.style.animation = "display 3s forwards ease-out"
    document.addEventListener("animationend", ()=>{
      questionContainer.style.display = "none"

    })
  }
  document.addEventListener("keyup",(e)=>{
    
    if (e.key === "s") {
      clearInterval(timer);
      removeEventListener("click", getAnswer)
     let response = "yes"
     if (response === "yes"|| response ==="Yes") {
      questionContainer.style.animation = "display 3s forwards ease-out"
      document.addEventListener("animationend", ()=>{
        questionContainer.style.display = "none"

      })
     }
      
    }
  })
}

start.addEventListener('click', function () {
  sound.play()
  start.style.display = 'none'
  mHead.style.display = 'block'
})

mHead.addEventListener('animationend', function () {
  mHead.style.display = 'none'
  pHead.style.display = 'block'
})

pHead.addEventListener('animationend', function () {
  pHead.style.display = 'none'
  infoContainer.style.display = 'block'
})
function next() {
  if (infoContainer && check.checked) {
    infoContainer.style.animation = 'display 3s forwards ease-out'
    infoContainer.addEventListener('animationend', function () {
      infoContainer.style.display = 'none'
      infoContainer.style.animation = 'none'
      questionContainer.style.display = 'block'
    })
    
  }
}
game()

