
document.getElementById('btn_start').onclick = function() {
    let level = document.getElementById('level').value

    if(level === ''){
        showError()
    } else {
        window.location.href = `src/pages/game.html?${level}`
    }
}

function showError(){
    const error = document.createElement('div')
    error.innerHTML = '<p><i class="fa-solid fa-triangle-exclamation"></i> Selecione o nível de dificulda para inciar o jogo!</p>'
    error.style.position = 'absolute'
    error.style.left = '50%'
    error.style.bottom = '-30%'
    error.style.opacity = '0'
    error.style.transform = 'translate(-50%)'
    error.style.backgroundColor = '#8C031C'
    error.style.color = '#fff'
    error.style.padding = '10px'
    error.style.borderRadius = '5px'
    error.style.transition = 'bottom 1s ease-out, opacity 1s ease-out'

    setTimeout(() => {
        error.style.bottom = '1%'
        error.style.opacity = '1'
    }, 10)

    setTimeout(() => {
        error.style.bottom = '-30%'
        error.style.opacity = '0'
    }, 3000);

    document.body.appendChild(error)
}