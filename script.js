
const gameboard = (function () {
    const uiBoard = document.querySelector(".board");
    const row = 3;
    const col = 3;
    const board = [];

    // create players
    const playerOne = createPlayer("One", true);
    const playerTwo = createPlayer("Two", false);

    function handleClick(event) {
        const newTile = event.target;
        const rowIndex = newTile.dataset.index[0];
        const colIndex = newTile.dataset.index[1];

        if (board[rowIndex][colIndex] === 0) {
            game.placePiece(rowIndex, colIndex, board, playerOne, newTile);
            newTile.removeEventListener('click', handleClick);
            console.log("Tile already occupied");
        }
    }

    function createBoard(row, col) {
        for (var i = 0; i < row; i++) {
            board[i] = [];
            for (var j = 0; j < col; j++) {
                board[i].push(0); 

                let newTile = document.createElement('label');
                newTile.classList.add('tile');
                newTile.dataset.index = `${i}${j}`;

                // add tiles to GUI
                newTile.addEventListener('click', handleClick);
                uiBoard.appendChild(newTile);
            }
        }
    }
    
    createBoard(row, col);

    return {
        row,
        col,
        board,
        createBoard
    };
})();

function createPlayer(name, isTurn) {
    return {
        name,
        isTurn
    };
}

const game = (function () {
    function placePiece(row, col, board, playerOne, newTile) {
        // const row = prompt("Enter player one name: ");
        // const col = prompt("Enter player two name: ");
        // decrements index by 1 to make selections match gameboard start at index 1
        // row--;
        // col--;
        board[row][col] = (playerOne.isTurn ? 1 : -1);
        // allow for turns
        playerOne.isTurn = !playerOne.isTurn;
        newTile.textContent = (playerOne.isTurn === false ? 'X' : 'O');
        console.log("p1: " + playerOne.isTurn)
        console.log(board);
        console.log(checkWin(board));

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







// game.placePiece(1, 1, board, playerOne);

// console.log(game.checkWin(board));
// game.placePiece(2, 2, board, playerOne);

// console.log(game.checkWin(board));
// game.placePiece(2, 3, board, playerOne);

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