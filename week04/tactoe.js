const daBoard = document.querySelector('.daBoard');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = '0';
let player = player1;

//Player1 and then Player2
function yourTurn(event) {
    console.log(event.target);
    event.target.innerHTML = player;
    if (player === player1) player = player2;
    else player = player1;
}

// function resetDaBoard() {
//     const daBoard = document.querySelector('.daBoard');
//     for (let i=0; i < daBoard.children.length; i++) {
//         daBoard.children[i].innerText = '';
//     }
//     const children = Array.from(daBoard.children);
//     const empty = children.filter(function(child) {
//         return child.innerText == 'X' || child.innerText == 'O';
//     });
//     console.log(empty);
// }

function resetDaBoard() {
    const daBoard = document.querySelector('.daBoard');
    for (let i=0; i < daBoard.children.length; i++) {
        daBoard.children[i].innerText = '';
    }
    // Always start with player1 or X
    if (player) player = player1;
}

daBoard.addEventListener('click', yourTurn);
resetButton.addEventListener('click', resetDaBoard);