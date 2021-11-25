//We sum them up
let totalSum = 0
let cards = []
const newGameBtn = document.querySelector('#start-btn')
const drawBtn = document.querySelector('#draw-btn')

const msgEl = document.getElementById('msg-el')
const cardsEl = document.getElementById('cards-el')
const sumEl = document.getElementById('sum-el')


//We make a startGame that displays the cards and the sum, along with players name and chips


newGameBtn.addEventListener('click', startGame)
function startGame(){
  //We make an array containing the first 2 cards
  let firstCard = Math.floor(Math.random()*10+2) 
  let secondCard = Math.floor(Math.random()*10+2)
  drawBtn.removeAttribute("disabled"); 
  totalSum = firstCard + secondCard
   cards = [firstCard,secondCard]

  renderGame(totalSum)
}

//We make a function that checks if it is black jack. if it's under 21 or above
function renderGame(sum){

    //rendering the cards
    cardsEl.textContent = `Cards: `
    cards.forEach(element=>{
      cardsEl.textContent+=" "+ element
    })
  
    //render sum
    sumEl.textContent = `Sum: ${totalSum}`
  if(sum < 21){
    msgEl.textContent="Would you like to draw another card?"
  }else if(sum === 21 ){
    msgEl.textContent="BlackJack!"
  }
  else{
    msgEl.textContent="You are above 21..."
    drawBtn.setAttribute('disabled',"")
  }
}


//Make a function that draws another card and adds it to the sum

drawBtn.addEventListener('click',function(){
  let newCard = Math.floor(Math.random()*10+2)
  cards.push(newCard)
  totalSum+= newCard
  renderGame(totalSum)
})