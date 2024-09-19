let firstcard = Math.floor(Math.random()*20)
let secondcard = Math.floor(Math.random()*20)
let message = " "

let cards = [firstcard , secondcard]
let sum = firstcard + secondcard
let hasBlackJack = false
let isAlive = true


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:   " + sum

if(sum <= 20){
message = "Do you want to draw a new card?"
}else if (sum===21){
    message = "You've got Blackjack!"
    hasBlackJack = true
}else{
    message = "You're out of the game!"
    isAlive = false
}
 messageEl.textContent = message
 }

 function newCard(){
    let card = Math.floor(Math.random()*20)
    sum += card
    cards.push(card)
    renderGame()
 }


