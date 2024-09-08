const gameboard = (function () {
    const row = 3;
    const col = 3;
    const board = [];

    function createBoard(row, col) {
        for (let i = 0; i < row; i++) {
            board[i] = [];
            for (let j = 0; j < col; j++)
                board[i].push(0); 
            }
        }

    createBoard(row, col)

    return {
        row,
        col,
        board,
        createBoard
    }
})();


const players = (function () {
    function createPlayer() {
        const playerOneName = prompt("Enter player one name: ");
        const playerTwoName = prompt("Enter player two name: ");
        console.log(playerOneName, playerTwoName);

        let playerOne = true;
        let playerTwo = false;

        return {
            playerOneName,
            playerTwoName,
            playerOne,
            playerTwo
        };
    }

    const createPlayerInstance = createPlayer();
    
    return {
        createPlayerInstance
    };
})();

const game = (function () {
    function placePiece(row, col, board, player) {
        // Decrements index by 1 to make selections match gameboard start at index 1
        row--;
        col--;

        board[row][col] = (player === true ? 1 : -1);
        console.log(board);
        // checkWin(board);

        return {
            board
        };
    }

    function checkWin(board) {
        // Check rows
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] != 0 && 
                board[i][0] == board[i][1] && 
                board[i][1] == board[i][2]) {
                return true;
            }
        }

        // Check columns
        for (let j = 0; j < board.length; j++) {
            if (board[0][j] != 0 && 
                board[0][j] == board[1][j] && 
                board[1][j] == board[2][j]) {
                return true;
            }
        }

        // Check diagonals
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

        return false;
    }

    return {
        placePiece,
        checkWin
    };
})();

const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const playersInstance = players.createPlayerInstance;
game.placePiece(1, 3, board, playersInstance.playerOne);
console.log(board); // Outputs the updated board
console.log(game.checkWin(board)); // Outputs: false

// placePiece(1, 2, gameboard.board, playerOne);
// createPlayer();

