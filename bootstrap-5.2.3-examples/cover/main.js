const grid = document.querySelector('.grid')
const square = document.querySelectorAll('.squaresInside')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const timeText = document.querySelector('#Time-text')
const hH = document.querySelector('h2')
const score = document.querySelector('#score')
const start = document.querySelector('.btn.btn-lg.btn-secondary.fw-bold.border-white.bg-white')
const h = document.querySelector('h1')
const txt = document.querySelector('.lead')
let body = document.querySelector('body')
const colorFirst = document.querySelector('.changeColorQ')
let colorBtn = document.querySelector('#colorCall')


// Hide text and show game
start.addEventListener('click', () => {
    start.style.display = 'none'
    h.style.display = 'block'
    score.style.display = 'block'
    timeLeft.style.display = 'block'
    timeText.style.display = 'block'
    txt.style.display = 'none'
    hH.style.display = 'none'
    grid.style.display = 'flex'
    let result = 0
let hitPosition
let currentTime = 10
let timerId = null

function randomSquare(){
    square.forEach(squaresInside =>{
        squaresInside.classList.remove('mole')
    })

    
    let randomSquare = square[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole') 

    hitPosition = randomSquare.id
}

square.forEach(squaresInside => {
    squaresInside.addEventListener('click', () => {
        if (squaresInside.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null     
        }
    })
})


function moveMole() { 
    timerId = setInterval(randomSquare, 300)
}

moveMole()

function countDown() {
    currentTime-- 
    timeLeft.textContent =  currentTime

    if(currentTime == 0 ){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! YOUR SCORE IS ' + result)
    }

}


let countDownTimerId = setInterval(countDown, 1000)
     
});




// try 1
colorBtn.addEventListener('click',()=>{
if (body.style.boxShadow = 'rgba(0, 0, 0, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow = 'rgba(255, 255, 255, 0.5) 0px 0px 80px 0px inset'
}
else if (body.style.boxShadow  = 'rgba(255, 255, 255, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow  = 'rgba(0, 255, 221, 0.5) 0px 0px 80px 0px inset'
}
else {
    body.style.boxShadow  = 'rgba(232, 105, 252, 0.5) 0px 0px 80px 0px inset'
  }
})
// try 2




    
// let myelement = document.querySelector('body')

// let boxShadow = window.getComputedStyle(body).boxShadow

// console.log(boxShadow)




