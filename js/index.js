

const getComputerChoice = document.getElementById('computer-choice');
const getUserChoice = document.getElementById('user-choice');
const getResult = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id
getUserChoice.innerHTML = userChoice
generateComputerChoice()
getResults()

}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)

    if (randomNumber === 0) {
        computerChoice = 'rock';
    }
    if (randomNumber === 1) {
        computerChoice = 'paper';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    getComputerChoice.innerHTML = computerChoice;
}

const getResults = () => {
    if (computerChoice === userChoice) {
        result = 'It is a tie.'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lose!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lose!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lose!'
    }

    getResult.innerHTML = result;
}