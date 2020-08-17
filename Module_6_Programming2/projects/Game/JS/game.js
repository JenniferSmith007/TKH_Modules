let uschoice
let compchoice
const displayResult = document.getElementById('result')
const user = document.getElementById('player')
let result = results()
const pos_choice = document.querySelectorAll('.option')
const computer = document.getElementById('computer')
const randomNumber = Math.round(Math.random() * (3))

pos_choice.forEach(pos_choice => pos_choice.addEventListener('click', (e) => {
    uschoice= e.target.id
    generatedComputer()
    results()
    user.innerHTML = uschoice
    computer.innerHTML = compchoice
    displayResult.innerHTML = result
  }))

function generatedComputer() {
    if (randomNumber === 1) {
      return compchoice= 'rock'
    } else if (randomNumber === 2) {
      return compchoice = 'paper'
    } else if (randomNumber === 3) {
      return compchoice = 'scissors'
    }
  }

function results() {
    if (compchoice == uschoice) {
        return result = 'It Is A Tie'
    } else if (compchoice === 'paper' && uschoice === 'scissors') {
        return result = 'You Won'
    }else if (compchoice === 'paper' && uschoice === 'rock') {
        return result = 'You Lost'
    }else if (compchoice === 'rock' && uschoice === 'paper') {
        return result = 'You Won'
    }else if (compchoice === 'rock' && uschoice === 'scissors') {
        return result = 'You Lost'
    } else if (compchoice === 'scissors' && uschoice === 'paper') {
        return result = 'You Lost'
    }else if (compchoice === 'scissors' && uschoice === 'rock') {
        return result= 'You Won'
    }
}