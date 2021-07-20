function setGame(board) {
    let firstOrder = true;
    board.addEventListener('click', e => {
        if(firstOrder) e.target.innerText = 'X';
        else e.target.innerText = 'O';
        firstOrder = !firstOrder;
        win();
    });
    function win() {
        ///
        finish();
    }
    function finish() {}
}

window.onload = () => {
    let boards = document.querySelectorAll('.tictactoe');
    for(const board of boards) setGame(board);
}