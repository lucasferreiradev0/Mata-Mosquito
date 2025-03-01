let getWidth = 0
let getHeight = 0

let mosquitoRandomPosition = setInterval(() => {
    createMosquito()
    
}, 500);

function getWidtHeight(){
    getWidth = window.innerWidth
    getHeight = window.innerHeight
}
getWidtHeight()

function createMosquito(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    }
    positionX = Math.floor(Math.random() * getWidth) - 100
    positionY = Math.floor(Math.random() * getHeight) - 100
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    let mosquito = document.createElement('img')
    mosquito.src = '../assets/image/mosquito.png'
    mosquito.classList = 'mosquito1'
    mosquito.style.top = `${positionY}px`
    mosquito.style.left = `${positionX}px`
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)
}

function randomSize() {
    let size = Math.floor(Math.random() * 3)

    console.log(size)
}