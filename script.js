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
        console.log(playerOne, playerTwo);

        var playerOne = true;
        var playerTwo = false;

        return {
            playerOneName,
            playerTwoName,
            playerOne,
            playerTwo
        }
    }

    const createPlayerInstance = createPlayer()
    
    return {
        createPlayerInstance
    }
})();

function placePiece(row, col, board, player) {
    // decrements index by 1 to make selections match gameboard start at index 1
    row--;
    col--;

    // console.log(board[row][column]);
    board[row][col] = (player === true ? 1 : -2);

    checkWin(board);

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

console.log(gameboard.board);
// placePiece(1, 2, gameboard.board, playerOne);
// createPlayer();

/* Set up your project with HTML, CSS and Javascript files and get the Git repo all set up.
You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects, and you’re probably going to want an object to control the flow of the game itself.
Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories. If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
In this project, think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects. Take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!
If you’re having trouble, Building a house from the inside out is a great article that lays out a highly applicable example both of how you might approach tackling this project as well as how you might organize and structure your code. */