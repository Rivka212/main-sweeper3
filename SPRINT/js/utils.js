'use strict'

function renderBoard(board, selector) {
    var strHTML = ''
    var strHTML = '<table><tbody>'
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            const cell = board[i][j]

            var className = `cell cell-${i}-${j}`

            strHTML += `<td class="cell-click ${className}" onclick="onCellclicked(this, ${i}, ${j})" >
            </td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
    const elCells = document.querySelector('.board-cells')
    elCells.innerHTML = strHTML
    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}


// location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.board-cells`)
    elCell.innerHTML = value
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function getTime() {
    return new Date().toString().split(' ')[4];
}
