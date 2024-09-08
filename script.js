const uiBoard = document.querySelector(".board");

const gameboard = (function () {
    const row = 3;
    const col = 3;
    const board = [];

    function createBoard(row, col) {
        for (var i = 0; i < row; i++) {
            board[i] = [];
            for (var j = 0; j < col; j++) {
                board[i].push(0); 

                // add tiles to GUI
                let newTile = document.createElement('label');
                newTile.textContent = `${i}${j}`;
                newTile.classList.add('tile');
                newTile.dataset.index = `${i}${j}`;
                newTile.addEventListener('click', event => {
                    console.log(newTile.dataset.index);
                    game.placePiece(newTile.dataset.index[0], newTile.dataset.index[1], board, playerOne);
                });
                uiBoard.appendChild(newTile);
            }
        }
    }
    console.log(uiBoard);
    createBoard(row, col)

    return {
        row,
        col,
        board,
        createBoard
    }
})();

function createPlayer(name, isTurn) {
    return {
        name,
        isTurn
    }
}

const game = (function () {
    function placePiece(row, col, board, player) {
        // const row = prompt("Enter player one name: ");
        // const col = prompt("Enter player two name: ");
        // decrements index by 1 to make selections match gameboard start at index 1
        // row--;
        // col--;
    
        board[row][col] = (player === true ? 1 : -1);
        (player == true ? false: true);
        console.log(board);
        console.log(checkWin(board));
        console.log("p1: " + playerOne.isTurn)
        console.log("p2: " + playerTwo.isTurn)

        return {
            board
        }
    }
    function checkWin(board) {
    //check rows
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] != 0 && 
            board[i][0] == board[i][1] && 
            board[i][1] == board[i][2]) {
            return true;
        }
    }
    //check columns
    for (let j = 0; j < board.length; j++) {
        if (board[0][j] != 0 && 
            board[0][j] == board[1][j] && 
            board[1][j] == board[2][j]) {
            return true;
        }
    }
    //check diagonals
    if (board[0][0] != 0 && 
        board[0][0] == board[1][1] && 
        board[1][1] == board[2][2]) {
        return true;
    }
    if (board[0][2] != 0 && 
        board[0][2] == board[1][1] && 
        board[1][1] == board[2][0]) {
        return true;
    }
    }
    return {
        placePiece,
        checkWin
    }
})();

// function screenController() {

// }





const board = gameboard.board;

const playerOne = createPlayer("One", true)
const playerTwo = createPlayer("Two", false);

// game.placePiece(1, 1, board, playerOne);

// console.log(game.checkWin(board));
// game.placePiece(2, 2, board, playerOne);

// console.log(game.checkWin(board));
// game.placePiece(2, 3, board, playerOne);
console.log(game.checkWin(board));

// const players = (function () {
//     function createPlayer() {
//         const playerOneName = "One";
//         const playerTwoName = "Two";

//         // const playerOneName = prompt("Enter player one name: ");
//         // const playerTwoName = prompt("Enter player two name: ");
//         console.log(playerOneName, playerTwoName);

//         var playerOne = true;
//         var playerTwo = false;

//         return {
//             playerOneName,
//             playerTwoName,
//             playerOne,
//             playerTwo
//         }
//     }

//     const createPlayerInstance = createPlayer()
    
//     return {
//         createPlayerInstance
//     }
// })();