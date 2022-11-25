let turn = "X"
let winImage = document.querySelector('.gameInfo img')
let resetBtn = document.querySelector('#reset')
let winLine = document.querySelector('.win-line')
let container = document.querySelector('.container')
let spinner = document.querySelector('.dot-spinner')
let winStatus = false

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}



// ----- WIN LOGIC ----- //
const checkWin = () => {

    let boxtext = document.querySelectorAll('.boxtext')

    if (boxtext[0].innerText === boxtext[1].innerText && boxtext[1].innerText === boxtext[2].innerText && boxtext[0].innerText != "") {
        winLine.classList.add('one-h')
        container.style['pointer-events'] = 'none'
        winStatus = true
        alert(`${boxtext[0].innerText} Won!`)
        if(boxtext[0].innerText == 'X'){
            winImage.style.opacity = '1'
            start()
        }
    }
    else if (boxtext[3].innerText === boxtext[4].innerText && boxtext[4].innerText === boxtext[5].innerText && boxtext[3].innerText != "") {
        winLine.classList.add('two-h')
        container.style['pointer-events'] = 'none'
        winStatus = true
        alert(`${boxtext[3].innerText} Won!`)
        if(boxtext[3].innerText == 'X'){
            winImage.style.opacity = '1'
            start()
        }
    }
    else if (boxtext[6].innerText === boxtext[7].innerText && boxtext[7].innerText === boxtext[8].innerText && boxtext[6].innerText != "") {
        winLine.classList.add('three-h')
        container.style['pointer-events'] = 'none'
        winStatus = true
        alert(`${boxtext[6].innerText} Won!`)
        if(boxtext[6].innerText == 'X'){
            winImage.style.opacity = '1'
            start()
        }
    }
    else if (boxtext[0].innerText === boxtext[3].innerText && boxtext[3].innerText === boxtext[6].innerText && boxtext[0].innerText != "") {
        winLine.classList.add('one-v')
        container.style['pointer-events'] = 'none'
        winStatus = true
        alert(`${boxtext[0].innerText} Won!`)
        if(boxtext[0].innerText == 'X'){
            winImage.style.opacity = '1'
            start()
        }
    }
    else if (boxtext[1].innerText === boxtext[4].innerText && boxtext[4].innerText === boxtext[7].innerText && boxtext[1].innerText != "") {
        winLine.classList.add('two-v')
        container.style['pointer-events'] = 'none'
        winStatus = true
        alert(`${boxtext[1].innerText} Won!`)
        if(boxtext[1].innerText == 'X'){
            winImage.style.opacity = '1'
            start()
        }
    }
    else if (boxtext[2].innerText === boxtext[5].innerText && boxtext[5].innerText === boxtext[8].innerText && boxtext[2].innerText != "") {
        winLine.classList.add('three-v')
        container.style['pointer-events'] = 'none'
        winStatus = true
        alert(`${boxtext[2].innerText} Won!`)
        if(boxtext[2].innerText == 'X'){
            winImage.style.opacity = '1'
            start()
        }
    }
    else if (boxtext[0].innerText === boxtext[4].innerText && boxtext[4].innerText === boxtext[8].innerText && boxtext[0].innerText != "") {
        winLine.classList.add('cross-backward')
        container.style['pointer-events'] = 'none'
        winStatus = true
        alert(`${boxtext[0].innerText} Won!`)
        if(boxtext[0].innerText == 'X'){
            winImage.style.opacity = '1'
            start()
        }
    }
    else if (boxtext[2].innerText === boxtext[4].innerText && boxtext[4].innerText === boxtext[6].innerText && boxtext[2].innerText != "") {
        winLine.classList.add('cross-forward')
        container.style['pointer-events'] = 'none'
        winStatus = true
        alert(`${boxtext[2].innerText} Won!`)
        if(boxtext[2].innerText == 'X'){
            winImage.style.opacity = '1'
            start()
        }
    }
}

// ----- BOX TURN CHANGE ----- //
let boxes = document.getElementsByClassName('play-box')
Array.from(boxes).forEach((element) => {
    element.addEventListener('click', function (e) {
        if (e.target.innerText == '') {
            e.target.innerHTML = `<span class="boxtext">${turn}</span>`
            checkWin()
            element.classList.remove('play-box')
            element.style['pointer-events'] = 'none'
            computerTurn()
        }
        else {
            alert('select another box')
        }
    })
})

let computerTurn = () => {
    if (!winStatus) {
        let boxes = document.getElementsByClassName('play-box')
        let leftBoxes = Array.from(boxes)
        const randomNumber = Math.floor(Math.random() * leftBoxes.length)

        setTimeout(() => {
            turn = changeTurn()
            leftBoxes[randomNumber].innerHTML = `<span class="boxtext">${turn}</span>`
            leftBoxes[randomNumber].classList.remove('play-box')
            leftBoxes[randomNumber].classList.remove('highlight-box')
            leftBoxes[randomNumber].style['pointer-events'] = 'none'
            spinner.style.display = 'none'
            container.classList.remove('blur')
            checkWin()
            turn = changeTurn()
        }, 2000);

        leftBoxes[randomNumber].classList.add('highlight-box')
        container.classList.add('blur')
        spinner.style.display = 'flex'
    }
}


// ----- RESET BTN ----- //
const resetGame = () => {
    location = '/'
}
resetBtn.addEventListener('click', function () {
    location = '/'
})

// confetti effect
const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};