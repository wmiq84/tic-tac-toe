

const gameboard = (function () {
    const uiBoard = document.querySelector(".board");
    const row = 3;
    const col = 3;
    const board = [];

    // create players
    const playerOne = createPlayer("One", true);

    function handleClick(event) {
        const newTile = event.target;
        const rowIndex = newTile.dataset.index[0];
        const colIndex = newTile.dataset.index[1];

        if (board[rowIndex][colIndex] === 0) {
            game.placePiece(rowIndex, colIndex, board, playerOne, newTile);
            newTile.removeEventListener('click', handleClick);
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
    
    function start(row, col) {
        btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            while (uiBoard.children.length) {
                uiBoard.removeChild(uiBoard.children[0]);
            };
            createBoard(row, col);
        });
    }

    start(row, col);

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
        board[row][col] = (playerOne.isTurn ? 1 : -1);
        // allow for turns
        console.log("agg");
        playerOne.isTurn = !playerOne.isTurn;
        newTile.textContent = (playerOne.isTurn === false ? 'X' : 'O');
        checkWin(board, playerOne);
        return {
            board
        }
        
    }

    function checkWin(board, playerOne) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] != 0 && 
                board[i][0] == board[i][1] && 
                board[i][1] == board[i][2]) {
                let win = true;
                displayWin(win, playerOne);     
            }
        }
        //check columns
        for (let j = 0; j < board.length; j++) {
            if (board[0][j] != 0 && 
                board[0][j] == board[1][j] && 
                board[1][j] == board[2][j]) {
                const win = true;
                displayWin(win, playerOne);     
            }
        }
        //check diagonals
        if (board[0][0] != 0 && 
            board[0][0] == board[1][1] && 
            board[1][1] == board[2][2]) {
            let win = true;
            displayWin(win, playerOne);
        }
        if (board[0][2] != 0 && 
            board[0][2] == board[1][1] && 
            board[1][1] == board[2][0]) {
            let win = true;
            displayWin(win, playerOne);
        }
    }

    function displayWin(win, playerOne) {
        const uiBoard = document.querySelector(".board");
        const nameOne = document.querySelector("#first-name");
        const nameTwo = document.querySelector("#second-name");
        const winLabel = document.querySelector(".win");
        if (win === true){
            if (playerOne.isTurn) {
                winLabel.textContent = nameOne.value + " wins!"
            }
            else {
                winLabel.textContent = nameTwo.value + " wins!"
            }
            while (uiBoard.children.length) {
                uiBoard.removeChild(uiBoard.children[0]);
            }
        }
    }
    return {
        placePiece,
        checkWin
    }
})();
