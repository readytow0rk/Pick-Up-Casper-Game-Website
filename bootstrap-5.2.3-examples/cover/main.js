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
const refresher = document.querySelectorAll('.nav-link.fw-bold.py-1.px-0')
const color = document.querySelectorAll('.nav-link.fw-bold.py-1.px-0')
const body = document.querySelectorAll('d-flex.h-100.text-center.text-bg-dark')
const colorFirst = document.querySelector('.changeColorQ')

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

// square.forEach(squaresInside => {
//     squaresInside.addEventListener('mousedown'() => {
//         if (squaresInside.id == hitPosition){
//             result++
//             score.textContent = result
//             hitPosition = null     
//         }
//     })
// })


function moveMole() { 
    timerId = setInterval(randomSquare, 1000)
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


