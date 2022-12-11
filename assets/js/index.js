

const userChoiceDisplay = document.createElement('h2');
const copmuterChoiceDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h2');

// displays the new elements in the HTML
const gameSpace = document.getElementById('game');
gameSpace.append(userChoiceDisplay, copmuterChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];

let userChoice;
let computerChoice;



const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User Choice: ' + userChoice;
    generateComputerChoice()
    choiceResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice;
    copmuterChoiceDisplay.innerHTML = 'Computer Choice: ' + randomChoice;
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameSpace.appendChild(button)
}

const choiceResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'You Win!'
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'You Lose!'
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockpaper':
            resultDisplay.innerHTML = 'Tie Game'
            break
    }
}
