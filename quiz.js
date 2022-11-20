//starting programme
let start = document.querySelector('.begin')
let mHead = document.querySelector('.m-head')
let pHead = document.querySelector('.p-head')
let sound = document.querySelector('.mouse')
let infoContainer = document.querySelector('.info-container')
let correct = document.querySelectorAll('.correct')
let wrong1 = document.querySelectorAll('.wrong1')
let wrong2 = document.querySelectorAll('.wrong2')
let wrong3 = document.querySelectorAll('.wrong3')
let check = document.querySelector('.check')
let question1 = document.querySelector('.question-1')
let question2 = document.querySelector('.question-2')
let question3 = document.querySelector('.question-3')
let question4 = document.querySelector('.question-4')
let question5 = document.querySelector('.question-5')
let time = document.querySelectorAll('.time')
let score = document.querySelector('.score')
let finish = document.querySelector('.finish')


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


function block(params) {
  if (infoContainer) {
    infoContainer.style.animation = 'display 3s forwards ease-out'
    infoContainer.addEventListener('animationend', function () {
      window.location.reload()
    })
  }

  if (question1) {
    question1.style.animation = 'display 3s forwards ease-out'
    question1.addEventListener('animationend', function () {
      window.location.reload()
    })
  }

  if (question2) {
    question2.style.animation = 'display 3s forwards ease-out'
    question2.addEventListener('animationend', function () {
      window.location.reload()
    })
  }

  if (question3) {
    question3.style.animation = 'display 3s forwards ease-out'
    question3.addEventListener('animationend', function () {
      window.location.reload()
    })
  }
  if (question4) {
    question4.style.animation = 'display 3s forwards ease-out'
    question4.addEventListener('animationend', function () {
      window.location.reload()
    })
  }

  if (question5) {
    question5.style.animation = 'display 3s forwards ease-out'
    question5.addEventListener('animationend', function () {
      window.location.reload()
    })
  }

  if (finish) {
    finish.style.animation = 'display 3s forwards ease-out'
    finish.addEventListener('animationend', function () {
      window.location.reload()
    })
  }
}


function unquit() {
  block()
  
}

function next() {
  if (infoContainer && check.checked) {
    infoContainer.style.animation = 'display 3s forwards ease-out'
    infoContainer.addEventListener('animationend', function () {
      infoContainer.style.display = 'none'
      start.style.display = 'none'
      infoContainer.style.animation = 'none'
      question1.style.display = 'block'
      question1.style.animation = 'none'
      question2.style.display = 'none'
      setTimer1()
    })

  }

  if (question1 && correct[0].disabled && wrong1[0].disabled && wrong2[0].disabled && wrong3[0].disabled) {
    question1.style.animation = 'display 3s forwards ease-out'
    question1.addEventListener('animationend', function (params) {
      question1.style.display = 'none'
      question2.style.display = 'block'
      setTimer2()
    })
  }

  if (question2 && correct[1].disabled && wrong1[1].disabled && wrong2[1].disabled && wrong3[1].disabled) {
    question2.style.animation = 'display 3s forwards ease-out'
    question2.addEventListener('animationend', function () {
      question2.style.display = 'none'
      question3.style.display = 'block'
      setTimer3()
    })
  }
  if (question3 && correct[2].disabled && wrong1[2].disabled && wrong2[2].disabled && wrong3[2].disabled) {
    question3.style.animation = 'display 3s forwards ease-out'
    question3.addEventListener('animationend', function () {
      question3.style.display = 'none'
      question4.style.display = 'block'
      setTimer4()
    })
  }

  if (question4 && correct[3].disabled && wrong1[3].disabled && wrong2[3].disabled && wrong3[3].disabled) {
    question4.style.animation = 'display 3s forwards ease-out'
    question4.addEventListener('animationend', function () {
      question4.style.display = 'none'
      question5.style.display = 'block'
      setTimer5()
    })
  }

  if (question5 && correct[4].disabled && wrong1[4].disabled && wrong2[4].disabled && wrong3[4].disabled) {
    question5.style.animation = 'display 3s forwards ease-out'
    question5.addEventListener('animationend', function () {
      question5.style.display = 'none'
      finish.style.display = 'block'
     total() 
    })
  }
}



function result() {
  if (question1) {
    correct[0].parentElement.style.background = 'green'
    wrong3[0].parentElement.style.background = 'red'
    wrong2[0].parentElement.style.background = 'red'
    wrong1[0].parentElement.style.background = 'red'
    wrong1[0].disabled = true
    wrong2[0].disabled = true
    wrong3[0].disabled = true
    correct[0].disabled = true
    
  }
  if (question2 && correct[1].checked || wrong2[1].checked || wrong3[1].checked || wrong1[1].checked) {
    correct[1].parentElement.style.background = 'green'
    wrong3[1].parentElement.style.background = 'red'
    wrong2[1].parentElement.style.background = 'red'
    wrong1[1].parentElement.style.background = 'red'
    wrong1[1].disabled = true
    wrong2[1].disabled = true
    wrong3[1].disabled = true
    correct[1].disabled = true
  }
  if (question3 && correct[2].checked || wrong2[2].checked || wrong3[2].checked || wrong1[2].checked) {
    correct[2].parentElement.style.background = 'green'
    wrong3[2].parentElement.style.background = 'red'
    wrong2[2].parentElement.style.background = 'red'
    wrong1[2].parentElement.style.background = 'red'
    wrong1[2].disabled = true
    wrong2[2].disabled = true
    wrong3[2].disabled = true
    correct[2].disabled = true
  }
  if (question4 && correct[3].checked || wrong2[3].checked || wrong3[3].checked || wrong1[3].checked) {
    correct[3].parentElement.style.background = 'green'
    wrong3[3].parentElement.style.background = 'red'
    wrong2[3].parentElement.style.background = 'red'
    wrong1[3].parentElement.style.background = 'red'
    wrong1[3].disabled = true
    wrong2[3].disabled = true
    wrong3[3].disabled = true
    correct[3].disabled = true
  }
  if (question5 && correct[4].checked || wrong2[4].checked || wrong3[4].checked || wrong1[4].checked) {
    correct[4].parentElement.style.background = 'green'
    wrong3[4].parentElement.style.background = 'red'
    wrong2[4].parentElement.style.background = 'red'
    wrong1[4].parentElement.style.background = 'red'
    wrong1[4].disabled = true
    wrong2[4].disabled = true
    wrong3[4].disabled = true
    correct[4].disabled = true
  }

}


//setting of time
function setTimer1() {  
    setTimeout(timer,100);
}

function setTimer2() {
  setTimeout(timer2, 100);
}
function setTimer3() {
  setTimeout(timer3, 100);
}
function setTimer4() {
  setTimeout(timer4, 100);
}
function setTimer5() {
  setTimeout(timer5, 100);
}

function timer() {
  setInterval(timeset1, 1000)
  setInterval(timeset2, 2000);
  setInterval(timeset3, 3000);
  setInterval(timeset4, 4000);
  setInterval(timeset5, 5000);
  setInterval(timeset6, 6000);
  setInterval(timeset7, 7000);
  setInterval(timeset8, 8000);
  setInterval(timeset9, 9000);
  setInterval(timeset10, 10000);  
}

function timer2(params) {
  setInterval(timeset11, 1000);
  setInterval(timeset12, 2000);
  setInterval(timeset13, 3000);
  setInterval(timeset14, 4000);
  setInterval(timeset15, 5000);
  setInterval(timeset16, 6000);
  setInterval(timeset17, 7000);
  setInterval(timeset18, 8000);
  setInterval(timeset19, 9000);
  setInterval(timeset20, 10000);
}

function timer3(params) {
  setInterval(timeset21, 1000);
  setInterval(timeset22, 2000);
  setInterval(timeset23, 3000);
  setInterval(timeset24, 4000);
  setInterval(timeset25, 5000);
  setInterval(timeset26, 6000);
  setInterval(timeset27, 7000);
  setInterval(timeset28, 8000);
  setInterval(timeset29, 9000);
  setInterval(timeset30, 10000);
}

function timer4(params) {
  setInterval(timeset31, 1000);
  setInterval(timeset32, 2000);
  setInterval(timeset33, 3000);
  setInterval(timeset34, 4000);
  setInterval(timeset35, 5000);
  setInterval(timeset36, 6000);
  setInterval(timeset37, 7000);
  setInterval(timeset38, 8000);
  setInterval(timeset39, 9000);
  setInterval(timeset40, 10000);
}

function timer5(params) {
  setInterval(timeset41, 1000);
  setInterval(timeset42, 2000);
  setInterval(timeset43, 3000);
  setInterval(timeset44, 4000);
  setInterval(timeset45, 5000);
  setInterval(timeset47, 6000);
  setInterval(timeset46, 7000);
  setInterval(timeset48, 8000);
  setInterval(timeset49, 9000);
  setInterval(timeset50, 10000);
}




function timeset1() {
  if (time[0].value==10 && question1) {
    time[0].value--
  }
}


function timeset2() {
  if (time[0].value==9 && question1) {
    time[0].value--
  }
}
function timeset3() {
  if (time[0].value==8 && question1) {
    time[0].value--
  }
}
function timeset4() {
  if (time[0].value==7 && question1) {
    time[0].value--
  }
}
function timeset5() {
  if (time[0].value==6 && question1) {
    time[0].value--
  }
}
function timeset6() {
  if (time[0].value==5 && question1) {
    time[0].value--
  }
}
function timeset7() {
  if (time[0].value==4 && question1) {
    time[0].value--
  }
}
function timeset8() {
  if (time[0].value==3 && question1) {
    time[0].value--
  }
}
function timeset9() {
  if (time[0].value==2 && question1) {
    time[0].value--
  }
}
function timeset10() {
  if (time[0].value==1 && question1) {
    time[0].value--
    if (wrong1[0].checked  || wrong2[0].checked  || wrong3[0].checked  || correct[0].checked) {
      question1.style.animation = 'none'
    }else{
      
      question1.style.animation = 'display 3s forwards ease-out'
      question1.addEventListener('animationend', function () {
        window.location.reload()
      })
    }
  }
}

function timeset11() {
  if (time[1].value==10 && question2) {
    time[1].value--
  }
}


function timeset12() {
  if (time[1].value==9 && question2) {
    time[1].value--
  }
}
function timeset13() {
  if (time[1].value==8 && question2) {
    time[1].value--
  }
}
function timeset14() {
  if (time[1].value==7 && question2) {
    time[1].value--
  }
}
function timeset15() {
  if (time[1].value==6 && question2) {
    time[1].value--
  }
}
function timeset16() {
  if (time[1].value==5 && question2) {
    time[1].value--
  }
}
function timeset17() {
  if (time[1].value==4 && question2) {
    time[1].value--
  }
}
function timeset18() {
  if (time[1].value==3 && question2) {
    time[1].value--
  }
}
function timeset19() {
  if (time[1].value==2 && question2) {
    time[1].value--
  }
}
function timeset20() {
  if (time[1].value==1 && question2) {
    time[1].value--
    if (wrong1[1].checked || wrong2[1].checked || wrong3[1].checked || correct[1].checked) {
      question2.style.animation = 'none'      
    }else{
      question2.style.animation = 'display 3s forwards ease-out'
      question2.addEventListener('animationend', function () {
        window.location.reload()
      })
    }
  }
}

function timeset21() {
  if (time[2].value==10&& question3) {
    time[2].value--
  }
}


function timeset22() {
  if (time[2].value==9&& question3) {
    time[2].value--
  }
}
function timeset23() {
  if (time[2].value==8&& question3) {
    time[2].value--
  }
}
function timeset24() {
  if (time[2].value==7&& question3) {
    time[2].value--
  }
}
function timeset25() {
  if (time[2].value==6&& question3) {
    time[2].value--
  }
}
function timeset26() {
  if (time[2].value==5&& question3) {
    time[2].value--
  }
}
function timeset27() {
  if (time[2].value==4&& question3) {
    time[2].value--
  }
}
function timeset28() {
  if (time[2].value==3&& question3) {
    time[2].value--
  }
}
function timeset29() {
  if (time[2].value==2&& question3) {
    time[2].value--
  }
}
function timeset30() {
  if (time[2].value==1&& question3) {
    time[2].value--
    if (wrong1[2].checked || wrong2[2].checked || wrong3[2].checked || correct[2].checked) {
      question3.style.animation = 'none'      
    }else{
      question3.style.animation = 'display 3s forwards ease-out'
      question3.addEventListener('animationend', function () {
        window.location.reload()
      })
    }
  }
}

function timeset31() {
  if (time[3].value==10 && question4) {
    time[3].value--
  }
}


function timeset32() {
  if (time[3].value==9 && question4) {
    time[3].value--
  }
}
function timeset33() {
  if (time[3].value==8 && question4) {
    time[3].value--
  }
}
function timeset34() {
  if (time[3].value==7 && question4) {
    time[3].value--
  }
}
function timeset35() {
  if (time[3].value==6 && question4) {
    time[3].value--
  }
}
function timeset36() {
  if (time[3].value==5 && question4) {
    time[3].value--
  }
}
function timeset37() {
  if (time[3].value==4 && question4) {
    time[3].value--
  }
}
function timeset38() {
  if (time[3].value==3 && question4) {
    time[3].value--
  }
}
function timeset39() {
  if (time[3].value==2 && question4) {
    time[3].value--
  }
}
function timeset40() {
  if (time[3].value==1 && question4) {
    time[3].value--
    if (wrong1[3].checked || wrong2[3].checked || wrong3[3].checked || correct[3].checked) {
      question4.style.animation = 'none'      
    }else{
      question4.style.animation = 'display 3s forwards ease-out'
      question4.addEventListener('animationend', function () {
        window.location.reload()
      })
    }
  }
}

function timeset41() {
  if (time[4].value==10 && question5) {
    time[4].value--
  }
}


function timeset42() {
  if (time[4].value==9 && question5) {
    time[4].value--
  }
}
function timeset43() {
  if (time[4].value==8 && question5) {
    time[4].value--
  }
}
function timeset44() {
  if (time[4].value==7 && question5) {
    time[4].value--
  }
}
function timeset45() {
  if (time[4].value==6 && question5) {
    time[4].value--
  }
}
function timeset46() {
  if (time[4].value==5 && question5) {
    time[4].value--
  }
}
function timeset47() {
  if (time[4].value==4 && question5) {
    time[4].value--
  }
}
function timeset48() {
  if (time[4].value==3 && question5) {
    time[4].value--
  }
}
function timeset49() {
  if (time[4].value==2 && question5) {
    time[4].value--
  }
}
function timeset50() {
  if (time[4].value==1 && question5) {
    time[4].value--
    if (wrong1[4].checked || wrong2[4].checked || wrong3[4].checked || correct[4].checked) {
      question5.style.animation = 'none'      
    }else{
      question5.style.animation = 'display 3s forwards ease-out'
      question5.addEventListener('animationend', function () {
        window.location.reload()
      })
    }
  }
}


function total() {
  let num = ['one', 'two', 'three', 'four', 'five']
  let includecorrect = correct[0].checked
  let includecorrect1 = correct[1].checked
  let includecorrect2 = correct[2].checked
  let includecorrect3 = correct[3].checked
  let includecorrect4 = correct[4].checked
  if (includecorrect && includecorrect1 && includecorrect2 && includecorrect3 && includecorrect4) {
    score.textContent = num[4]
  }else{
    if (includecorrect && includecorrect1 && includecorrect2 && includecorrect3 || includecorrect && includecorrect1 && includecorrect2 && includecorrect4 || includecorrect && includecorrect1 && includecorrect3 && includecorrect4 || includecorrect1 && includecorrect2 && includecorrect3 && includecorrect4 || includecorrect &&includecorrect2 && includecorrect3 && includecorrect4) {
      score.textContent = num[3]
    }else{
  
      if (includecorrect && includecorrect1 && includecorrect2  || includecorrect && includecorrect1 && includecorrect4 || includecorrect && includecorrect1 && includecorrect3 || includecorrect && includecorrect2 && includecorrect3|| includecorrect && includecorrect3 && includecorrect4 || includecorrect1 && includecorrect2 && includecorrect3 || includecorrect1 && includecorrect3 && includecorrect4 || includecorrect2 && includecorrect3 && includecorrect4) {
        score.textContent = num[2]
      }else{
  
        if (includecorrect && includecorrect1 || includecorrect && includecorrect2|| includecorrect && includecorrect3 || includecorrect1 && includecorrect2 || includecorrect1&& includecorrect4 || includecorrect2 && includecorrect3|| includecorrect2 && includecorrect4 || includecorrect3 && includecorrect4) {
          score.textContent = num[1]
        }else{
          if (includecorrect|| includecorrect1 || includecorrect2 || includecorrect3||includecorrect4) {
            score.textContent = num[0]
          }
        }
      }
    }
  }
  
  
}



// timeset2()