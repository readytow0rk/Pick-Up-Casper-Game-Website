const grid = document.querySelector('.grid')
const square = document.querySelectorAll('.squaresInside')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

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
    squaresInside.addEventListener('mousedown'() => {
        if (squaresInside.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null     
        }
    })
})

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