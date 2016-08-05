$(document).ready( () => {
    // Reset Listener
    $('#reset').on('click', () => {
        $('td').html('');
        $('td').css({background: 'white'});
        if (player = 'O') {togglePlayer()};
        foundWinner = false;
        for (key in rows) {
            rows[key] = '';
        }
    })
    // Cell Listeners
    $('td').on('click', function() {
        if ($(this).html() === '' && !foundWinner) {
            markCell($(this));
            for (var row of this.classList) {rows[row] += player}
            togglePlayer();
            searchForWinner();
        }
    })
});

var player = 'X';
var foundWinner = false;
var player1Score = 0;
var player2Score = 0;
var rows = {row1: '', row2: '', row3: '',
            col1: '', col2: '', col3: '',
            diag1: '', diag2: ''};

var markCell = (element) => (element.html(player));

var togglePlayer = () => {
    player === 'X' ? (
        player = 'O',
        $('#message').html('Player 2, it\'s your turn!')
    ) : (
        player = 'X',
        $('#message').html('Player 1, it\'s your turn!')
    );
};

var searchForWinner = () => {
    var isFull = true;
    for (row in rows) {
        if (rows[row] === 'XXX' || rows[row] === 'OOO') { declareWinner(row) }
        if (rows[row].length !== 3) { isFull = false }
    }
    if (!foundWinner && isFull) { declareDraw() }
};

var declareWinner = (row) => {
    foundWinner = true;
    $('.'+row).css({background: '#eee'});
    rows[row] === 'XXX' ? (
        $('#message').html('Player 1 Wins!'),
        player1Score++,
        $('#player1-score').html(player1Score)
    ) : (
        $('#message').html('Player 2 Wins!'),
        player2Score++,
        $('#player2-score').html(player2Score)
    )
};

var declareDraw = () => {
    $('td').css({background: '#eee'});
    $('#message').html('It\'s a draw...');
}
