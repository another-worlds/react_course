
let cards = []
let blackjack = 21
let max = 11
score = 0
gameStatus=0
top_score = 0
//cards.push([9, 14])

GAME_STATUS_START = 0
GAME_STATUS_WIN = 1
GAME_STATUS_LOST = 2

welcome_message = "Welcome to the BlackJack game! Draw your card!"
lost_message = "You lost! Try again!"
win_message = "Congrats, you won! Wanna play another round?"

top_score_el = document.getElementById("top-score-el")
card_el = document.querySelector("#card-el")
start_message_el = document.getElementById("start-message-el")
current_sum_el = document.getElementById("current-sum-el")
get_card_button = document.getElementById("get-card-button")
score_el = document.getElementById("score-el")


function startGame() {
    
    if (gameStatus == GAME_STATUS_WIN) { setTopScore(score);  createWinMessage() }
    else if (gameStatus == GAME_STATUS_LOST) { createLostMessage()}
    else if (gameStatus == GAME_STATUS_START) { createWelcomeMessage() }
    score = 1;
    gameStatus = 0
    cards = []
    clearCards()
    get_card_button.textContent = "GET A NEW CARD"
}


function setTopScore(score) { 
    if (score > top_score) { 
        top_score = score
        top_score_el.textContent = top_score
    }
}

function clearCards() {
    card_el.textContent = ""
}

function createWelcomeMessage() { start_message_el.textContent = welcome_message} 
function createLostMessage() { start_message_el.textContent = lost_message }
function createWinMessage() {start_message_el.textContent = win_message }

function checkWin() {

    score_el.textContent = score
    sum = cards.reduce(function(a,b){return a+b})
    console.log(sum)
    current_sum_el.textContent = sum
    if (sum == 21) { gameStatus = GAME_STATUS_WIN }
    else if (sum > 21) { gameStatus = GAME_STATUS_LOST }

    if (gameStatus != GAME_STATUS_START) {startGame()}
    score++
}

function getCard() {
    let card = getRandomCard(max)
    renderCard(card)
    cards.push(card)
    checkWin()
}

function getRandomCard(max) {
    let card = Math.random() * 13
    card = Math.floor(card)
    console.log(card)
    if (card == 11) { return 1 }
    else if (card > 8) { return 10 }
    return card
}

function renderCard(card) {
    card_el.textContent += card += " "
}


