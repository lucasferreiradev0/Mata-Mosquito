let getWidth = 0
let getHeight = 0
let heart = 1
let x = 1
let timeGame = 0
let timeLevel = 0

let level = window.location.search.replace('?', '')

if(level === 'normal'){
    timeGame = 40
    timeLevel = 2000
} else if(level === 'medio'){
    timeGame = 45
    timeLevel = 1500
} else if(level === 'dificil'){
    timeGame = 50
    timeLevel = 1000
} else if(level === 'hardcore'){
    timeGame = 55
    timeLevel = 700
}

let stopwatch = setInterval(() => {
    if(timeGame < 0){
        clearInterval(mosquitoRandomPosition)
        clearInterval(stopwatch)
        window.location.href = 'win.html'
    } else {
        document.getElementById('time').innerHTML = timeGame
        timeGame--
    }
}, 1000)

let mosquitoRandomPosition = setInterval(() => {
    createMosquito()
}, 1500);

function getWidtHeight(){
    getWidth = window.innerWidth
    getHeight = window.innerHeight
}
getWidtHeight()

function createMosquito(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(heart > 3){
            clearInterval(mosquitoRandomPosition)
            clearInterval(stopwatch)
            window.location.href = 'lose.html'
        } else {
            document.getElementById(`v${x}`).src = '../assets/image/vazio.png'
            x++
        }
        heart++
    }
    positionX = Math.floor(Math.random() * getWidth) - 100
    positionY = Math.floor(Math.random() * getHeight) - 100
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    let mosquito = document.createElement('img')
    mosquito.src = '../assets/image/mosquito.png'
    mosquito.classList = `${randomSize()} ${randomSide()}`
    mosquito.style.top = `${positionY}px`
    mosquito.style.left = `${positionX}px`
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}

function randomSize() {
    let size = Math.floor(Math.random() * 3)
    switch(size){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function randomSide(){
    let side = Math.floor(Math.random() * 2)
    switch(side){
        case 0:
            return 'left'
        case 1:
            return 'right'
    }
}