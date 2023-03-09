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

let settingsBtn = document.querySelector('#settingsBtn')

let buttonsLevel = document.querySelector('.buttonsLevel')

let difficulty = document.querySelector('#difficulty')

let diffBtnQ = document.querySelector('#btnSwitchQ')

let diffBtnW = document.querySelector('#btnSwitchW')

let diffBtnE = document.querySelector('#btnSwitchE')

let diffBtnR = document.querySelector('#btnSwitchR')

let diffBtnT = document.querySelector('#btnSwitchT')

let restart = document.querySelector('#restart')

let mainPage = document.querySelector('#mainPage')

let rules = document.querySelector('#rules')

let scoreText = document.querySelector('#scoreText')

let textRulesQ = document.querySelector('#textRulesQ') 

let textRefresh = document.querySelector('#textRefresh') 




// just for good looking 55 - 70
start.style.display = 'block'
    h.style.display = 'block'
    score.style.display = 'none'
    timeLeft.style.display = 'none'
    timeText.style.display = 'none'
    txt.style.display = 'block'
    hH.style.display = 'none'
    grid.style.display = 'none'
    buttonsLevel.style.display = 'none'
    difficulty.style.display = 'none'
    colorBtn.style.display = 'none'
    rules.style.display = 'block'
    scoreText.style.display = 'none'
    textRulesQ.style.display = 'block'
    textRefresh.style.display = 'none'
    

// FIRST lEVEL

diffBtnQ.addEventListener('click', () => {
    buttonsLevel.style.display = 'none'
    difficulty.style.display = 'none'
    colorBtn.style.display = 'none'
    start.style.display = 'none'
    h.style.display = 'block'
    score.style.display = 'block'
    timeLeft.style.display = 'block'
    timeText.style.display = 'block'
    txt.style.display = 'none'
    hH.style.display = 'none'
    grid.style.display = 'flex'
    textRulesQ.style.display = 'none'
    textRefresh.style.display = 'none'
    
    

    // logic of game
    let result = 0
    
    score.textContent = result
    let hitPosition
    let currentTime = 15
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
    timerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
    currentTime-- 
    timeLeft.textContent =  currentTime

    if(currentTime == 0 ){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('YOU CAUGHT' + result + 'ghosts')
    }

}


let countDownTimerId = setInterval(countDown, 1000)
     
});


//start second level 
diffBtnW.addEventListener('click', () => {
    buttonsLevel.style.display = 'none'
    difficulty.style.display = 'none'
    colorBtn.style.display = 'none'
    start.style.display = 'none'
    h.style.display = 'block'
    score.style.display = 'block'
    timeLeft.style.display = 'block'
    timeText.style.display = 'block'
    txt.style.display = 'none'
    hH.style.display = 'none'
    grid.style.display = 'flex'
    textRulesQ.style.display = 'none'
    textRefresh.style.display = 'none'
    

    // logic of game
    let result = 0
    
    score.textContent = result
    let hitPosition
    let currentTime = 15
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
    timerId = setInterval(randomSquare, 600)
}

moveMole()

function countDown() {
    currentTime-- 
    timeLeft.textContent =  currentTime

    if(currentTime == 0 ){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('YOU CAUGHT' + result + 'ghosts')
    }
    
}


let countDownTimerId = setInterval(countDown, 1000)
     
});

// start third level
diffBtnE.addEventListener('click', () => {
    buttonsLevel.style.display = 'none'
    difficulty.style.display = 'none'
    colorBtn.style.display = 'none'
    start.style.display = 'none'
    h.style.display = 'block'
    score.style.display = 'block'
    timeLeft.style.display = 'block'
    timeText.style.display = 'block'
    txt.style.display = 'none'
    hH.style.display = 'none'
    grid.style.display = 'flex'
    textRulesQ.style.display = 'none'
    textRefresh.style.display = 'none'


    // logic of game
    let result = 0
    
    score.textContent = result
    let hitPosition
    let currentTime = 15
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
    timerId = setInterval(randomSquare, 400)
}

moveMole()

function countDown() {
    currentTime-- 
    timeLeft.textContent =  currentTime

    if(currentTime == 0 ){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('YOU CAUGHT' + result + 'ghosts')
    }

}


let countDownTimerId = setInterval(countDown, 1000)
     
});


// start 4th level
diffBtnR.addEventListener('click', () => {
    buttonsLevel.style.display = 'none'
    difficulty.style.display = 'none'
    colorBtn.style.display = 'none'
    start.style.display = 'none'
    h.style.display = 'block'
    score.style.display = 'block'
    timeLeft.style.display = 'block'
    timeText.style.display = 'block'
    txt.style.display = 'none'
    hH.style.display = 'none'
    grid.style.display = 'flex'
    textRulesQ.style.display = 'none'
    textRefresh.style.display = 'none'


    // logic of game
    let result = 0
    
    score.textContent = result
    let hitPosition
    let currentTime = 15
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
    timerId = setInterval(randomSquare, 250)
}

moveMole()

function countDown() {
    currentTime-- 
    timeLeft.textContent =  currentTime

    if(currentTime == 0 ){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('YOU CAUGHT' + result + 'ghosts')
    }

}


let countDownTimerId = setInterval(countDown, 1000)
     
});

// start 5th level

diffBtnT.addEventListener('click', () => {
    buttonsLevel.style.display = 'none'
    difficulty.style.display = 'none'
    colorBtn.style.display = 'none'
    start.style.display = 'none'
    h.style.display = 'block'
    score.style.display = 'block'
    timeLeft.style.display = 'block'
    timeText.style.display = 'block'
    txt.style.display = 'none'
    hH.style.display = 'none'
    grid.style.display = 'flex'
    textRulesQ.style.display = 'none'
    textRefresh.style.display = 'none'


    // logic of game
    let result = 0
    
    score.textContent = result
    let hitPosition
    let currentTime = 15
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
    timerId = setInterval(randomSquare, 100)
}

moveMole()

function countDown() {
    currentTime-- 
    timeLeft.textContent =  currentTime

    if(currentTime == 0 ){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('YOU CAUGHT' + result + 'ghosts')
    }

}


let countDownTimerId = setInterval(countDown, 1000)
     
});


// finish with levels
mainPage.addEventListener('click', () => {
    start.style.display = 'block'
    h.style.display = 'block'
    score.style.display = 'none'
    timeLeft.style.display = 'none'
    timeText.style.display = 'none'
    txt.style.display = 'block'
    hH.style.display = 'none'
    grid.style.display = 'none'
    buttonsLevel.style.display = 'none'
    difficulty.style.display = 'none'
    colorBtn.style.display = 'none'
    rules.style.display = 'block'
    scoreText.style.display = 'none'
    textRulesQ.style.display = 'block'
    textRefresh.style.display = 'none'
    
});

settingsBtn.addEventListener('click', () => {
    start.style.display = 'none'
    h.style.display = 'none'
    score.style.display = 'none'
    timeLeft.style.display = 'none'
    timeText.style.display = 'none'
    txt.style.display = 'none'
    hH.style.display = 'none'
    grid.style.display = 'none'
    buttonsLevel.style.display = 'block'
    difficulty.style.display = 'block'
    colorBtn.style.display = 'block'
    textRulesQ.style.display = 'none'
    textRefresh.style.display = 'block'
});

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
    textRulesQ.style.display = 'none'
    textRefresh.style.display = 'none'
    let result = 0
    
    
    score.textContent = result
    let hitPosition
    let currentTime = 15
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
        alert('YOU CAUGHT' + result + 'ghosts')
    }

}


let countDownTimerId = setInterval(countDown, 1000)
     
});


// fewBtn(mainPage, settingsBtn)

// CHANGE COLOR

// colorBtn.addEventListener('click', () => {
// body.style.boxShadow = 'rgba(255, 255, 255, 0.5) 0px 0px 80px 0px inset'
// });


// colorBtn.addEventListener('click', () => {
// body.style.boxShadow = 'rgba(0, 255, 221, 0.5) 0px 0px 80px 0px inset'
// });

// colorBtn.addEventListener('click', () => {
// body.style.boxShadow = 'rgba(232, 105, 252, 0.5) 0px 0px 80px 0px inset'
// });

// colorBtn.addEventListener('click', () => {
// body.style.boxShadow = 'rgba(246, 255, 0, 0.5) 0px 0px 80px 0px inset'
// });

// colorBtn.addEventListener('click', () => {
// body.style.boxShadow = 'rgba(255, 0, 0, 0.5) 0px 0px 80px 0px inset'
// });

// colorBtn.addEventListener('click', () => {
// body.style.boxShadow = 'rgba(174, 0, 255, 0.5) 0px 0px 80px 0px inset'
// });


//


colorBtn.addEventListener('click',()=>{
    console.log(body.style.boxShadow)
if (body.style.boxShadow == 'rgba(0, 0, 0, 0.5) 0px 0px 80px 0px inset') {
    body.style.boxShadow = 'rgba(255, 0, 0, 0.5) 0px 0px 80px 0px inset'
}
else if (body.style.boxShadow  == 'rgba(255, 0, 0, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow  = 'rgba(0, 255, 221, 0.5) 0px 0px 80px 0px inset'
}
else if (body.style.boxShadow  == 'rgba(0, 255, 221, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow  = 'rgba(232, 105, 252, 0.5) 0px 0px 80px 0px inset'
}
else if (body.style.boxShadow  == 'rgba(232, 105, 252, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow  = 'rgba(255, 0, 157, 0.5) 0px 0px 80px 0px inset'
}
else if (body.style.boxShadow  == 'rgba(255, 0, 157, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow  = 'rgba(255, 255, 255, 0.5) 0px 0px 80px 0px inset'
}
else if (body.style.boxShadow  == 'rgba(255, 255, 255, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow  = 'rgba(246, 255, 0, 0.5) 0px 0px 80px 0px inset'
}
else if (body.style.boxShadow  == 'rgba(246, 255, 0, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow  = 'rgba(0, 0, 0, 0.5) 0px 0px 80px 0px inset'
}
else if (body.style.boxShadow  == 'rgba(0, 0, 0, 0.5) 0px 0px 80px 0px inset') {
body.style.boxShadow  = 'rgba(0, 255, 221, 0.5) 0px 0px 80px 0px inset'
}

else {
    body.style.boxShadow  = 'rgba(255, 0, 0, 0.5) 0px 0px 80px 0px inset'
  }
})



// FULLSCREEN MODE 

let myDocument = document.documentElement;
let btn = document.getElementById("fullScreen") 

btn.addEventListener('click', ()=> {
if(btn.textContent == 'Fullscreen'){
    if(myDocument.requestFullscreen){
        myDocument.requestFullscreen();
    }
    else if(myDocument.msRequestFullscreen){
        myDocument.msRequestFullscreen();
    }
    else if(myDocument.mozRequestFullscreen){
        myDocument.mozRequestFullscreen();
    }
    else if(myDocument.webkitRequestFullScreen ){
        myDocument.webkitRequestFullScreen();
    }

    btn.textContent = 'Exit Fullscreen';
}
else{
    if(document.exitFullscreen){
        document.exitFullscreen();
    }
    else if(document.msexitFullscreen){
        document.msexitFullscreen();
    }
    else if(document.mozexitFullscreen){
        document.mozexitFullscreen();
    } 
    else if(document.webkitexitFullscreen){
        document.webkitexitFullscreen
    }

    btn.textContent = 'Fullscreen';
} 
});
// #
  



    
// let myelement = document.querySelector('body')

// let boxShadow = window.getComputedStyle(body).boxShadow

// console.log(boxShadow)


// SWITCH CASE

// let result = '0';

// switch (qwerty) {
//     case 5:
        
//         break;

//     case 10:
        
//         break;

//     case 15:
        
//         break;

//     case 20:
        
//         break;

//     default:
//         break;
// }
