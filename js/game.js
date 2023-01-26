'use strict'

const MINE = '&#128163'
const FLAG = '&#127987'

var gBoard
var gLevel
var gElSelectedCell = null
var pos


// var Intreval


gLevel = { SIZE: 4, MINES: 2 }

const gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0,
}


function onInit() {
    console.log('hello')


}

console.log(buildBoard())
gBoard = buildBoard()
renderBoard(gBoard, '.board-container')

function buildBoard() {
    const size = 4
    const board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {

            const cell = {
                minesAroundCount: 4,
                isShown: false,
                isMine: false,
                isMarked: true,
            }

            board[i][j] = cell
        }
    }
    board[2][2].isMine = true
    board[1][1].isMine = true

    return board
}

console.log(onCellClicked())
function onCellClicked(elCell, i, j) {
    const cell = gBoard[i][j]

    console.log('Cell clicked: ', elCell, i, j)

    // if (!cell.isMine && !cell.isMarked && !cell.isShown)
    //     cell.isShown
    const elCells = document.getElement("board-cells")[i][j].cell
    cell[i][j].innerHTML = cell.minesAroundCount

}

//      elCell.classList.toggle('selected')
//     // if (gElSelectedCell) {
//     //     gElSelectedCell.classList.remove('selected')
//     // }
//     // gElSelectedCell = (elCell !== gElSelectedCell) ? elCell : null
// //     if (gElSelectedSeat) onShowSeatDetails({ i: i, j: j })
// //     else onHideSeatDetails()
// // 

// }
console.log(setMinesNegsCount(2, 2))
function setMinesNegsCount() {
    var minesAroundCount = 0
    // const cell = gBoard[pos.i][pos.j]
    // var cells = []

    for (var i = pos.i - 1; i <= pos.i + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (var j = pos.j - 1; j <= pos.j + 1; j++) {
            if (j < 0 || j >= gBoard[i].length) continue
            if (i === pos.i && j === pos.j) continue

            const cell = gBoard[i][j]
            if (cell.isMine) cell.minesAroundCount++
        }
    }
    var elMinesAroundCount = document.querySelector('.negs-board-cells')
    elMinesAroundCount.innerText = minesAroundCount

    return cell
}


console.log(onRightClick())
function onRightClick() {
    window.addEventListener('contextmenu', (event) => {
        event.preventDefault()
        console.log('mouse right-click is prevented')
    })
    return onCellMarked()
}

console.log(onCellMarked())
function onCellMarked() {
    const cell = gBoard[i][j]

    if (onRightClick()) {

        gBoard[i][j].isMarked = true
        gBoard[i][j] === FLAG

    }
}


function checkGameOver() {
    console.log('Game Over')
    if (gBoard[i][j].isMine = true && FLAG) {
        if (gBoard[i][j].isShown = true) {
            return ("Game Over")
        }
    }
}


function expandShown(board, elCell, i, j) {
    if (!gBoard[i][j].isMine)
        console.log("hi");
}