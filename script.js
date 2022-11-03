// properties //

let player1Score = 0
let player2Score = 0
let player1Turn = true 
let winningScore = 100
let losingScore = 101

// variables to store dom refrences //

const player1T = document.getElementById("player1Throw")
const player2T = document.getElementById("player2Throw")
const player1S = document.getElementById("player1Scoreboard")
const player2S = document.getElementById("player2ScoreBoard")
const message = document.getElementById("message")
const throwButton = document.getElementById("throw-Button")
const resetButton = document.getElementById("reset-Button")
const playerOneContinue = document.getElementById("playerOne-continue")
const playerTwoContinue = document.getElementById("playerTwo-continue")
const firstThrowButton = document.getElementById("firstThrow-Button")
const secondThrowButton = document.getElementById("secondThrow-Button")


function showDisplayButton() {
  throwButton.style.display = "none"
  resetButton.style.display = "block"
}

function firstThrowB() {
  return firstThrowButton.addEventListener("click", function(){
  const randomNumber = Math.floor(Math.random() * 20) + 1
  player1Score += randomNumber
  player1S.textContent = player1Score
  player1T.textContent = String(randomNumber)
  // player1T.classList.remove("active")
  // player2T.classList.add("active")
  message.textContent = "Player one's turn"
  if (player1Score > winningScore) {
  message.textContent = "Player one Out!"
  firstThrowButton.style.display = "none"
  showDisplayButton()
  }else if (player1Score === winningScore) {
  message.textContent = "victory for player One"
  firstThrowButton.style.display = "none"
  showDisplayButton()
    }
    //  if (player1Score > winningScore) {
    //    message.textContent = "Player one Out!"
    //     firstThrowButton.style.display = "none"
    //       showDisplayButton()
    // } else if (player1Score === winningScore) {
    //   message.textContent = "victory for player one"
    //    firstThrowButton.style.display = "none"
    // showDisplayButton()
    // }
  })
}
  firstThrowB()

function secondThrowB() {
  return secondThrowButton.addEventListener("click", function(){
  const randomNumber = Math.floor(Math.random() * 20) + 1
  player2Score += randomNumber
  player2S.textContent = player2Score
  player2T.textContent = String(randomNumber)
      // player2T.classList.remove("active")
      // player1T.classList.add("active")
  message.textContent = "Player one's turn"
  if (player2Score > winningScore) {
  message.textContent = "Player Two Out!"
  secondThrowButton.style.display = "none"
  showDisplayButton()
  }else if (player2Score === winningScore) {
  message.textContent = "victory for player two"
  secondThrowButton.style.display = "none"
  showDisplayButton()
    }
      
  })
}
  secondThrowB()


throwButton.addEventListener("click", function(){
  const randomNumber = Math.floor(Math.random() * 20) + 1

  //1. update the Score for each other
  //2. Display the Score in their boxes
  if (player1Turn) {
  player1Score += randomNumber
  
  player1S.textContent = player1Score
  player1T.textContent = String(randomNumber)
  if (randomNumber === 20) {
  alert("Player 1 Hit a Bull's Eye!!!")
  } 
  player1T.classList.remove("active")
  player2T.classList.add("active")
  message.textContent = "Player two's turn"
} else {
  
  player2Score += randomNumber
  player2S.textContent = player2Score
  player2T.textContent = String(randomNumber)
  if (randomNumber === 20) {
  alert("Player 2 Hit a Bull's Eye!!!")
  } 
  player2T.classList.remove("active")
  player1T.classList.add("active")
  message.textContent = "Player one's turn"
  }

  if (player1Score >= winningScore) {
  message.textContent = "victory for player one"
  showDisplayButton()
} else if (player2Score >= winningScore) {
  message.textContent = "victory for player two"
  showDisplayButton()
  }


  
  if (player2Score > winningScore) {
  message.textContent = "Player Two Out!"
  playerTwoContinue.style.display = "none"
  playerOneContinue.style.display = "block"
  firstThrowButton.style.display = "none"
  firstThrowB()
  showDisplayButton()
  } else if (player1Score > winningScore) {
  message.textContent = "Player One Out!"
  playerOneContinue.style.display = "none"
  playerTwoContinue.style.display = "block"
  secondThrowButton.style.display = "none"
  secondThrowB()
  showDisplayButton()
  }
  
  player1Turn = !player1Turn

  })

playerOneContinue.addEventListener("click", function(){
  throwButton.style.display = "none"
  playerOneContinue.style.display = "none"
  resetButton.style.display = "none"
  firstThrowButton.style.display = "block"
  
})

playerTwoContinue.addEventListener("click", function(){
  throwButton.style.display = "none"
  playerTwoContinue.style.display = "none"
  resetButton.style.display = "none"
  secondThrowButton.style.display = "block"
})

resetButton.addEventListener("click", function() {
  reset()
})

function reset() {
  message.textContent = "player One's Turn"
  player1S.textContent = 0
  player2S.textContent = 0
  player1T.textContent = "-"
  player2T.textContent = "-"
  player1Score = 0
  player2Score = 0
  player1Score = true 
  resetButton.style.display = "none"
  throwButton.style.display = "block"
  playerTwoContinue.style.display = "none"
  playerOneContinue.style.display = "none"
  player2T.classList.remove("active")
  player1T.classList.add("active")
}