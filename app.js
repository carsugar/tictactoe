
// Establish 'Game' class which manages who's turn it in, and the scoreboard
// Based on who's turn it is, mark an X or O based on click, and have it alternate
// Create a 'determine winner' function
// Establish detailed game parameters, not allowing clicks on already clicked areas
// Implement reset button
var player = 'X';

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

$(document).ready( () => {

        // Reset Listener
        $('#reset').on('click', () => {
            $('td').html('');
            if (player = 'O') {togglePlayer()};
        })

        // Cell Listeners
        $('#cell1').on('click', () => {
            if ($('#cell1').html() === '') {
                markCell($('#cell1'));
                togglePlayer();
            }
        })
        $(`#cell2`).on('click', () => {
            if ($('#cell2').html() === '') {
                markCell($('#cell2'));
                togglePlayer();
            }
        })
        $('#cell3').on('click', () => {
            if ($('#cell3').html() === '') {
                markCell($('#cell3'));
                togglePlayer();
            }
        })
        $('#cell4').on('click', () => {
            if ($('#cell4').html() === '') {
                markCell($('#cell4'));
                togglePlayer();
            }
        })
        $('#cell5').on('click', () => {
            if ($('#cell5').html() === '') {
                markCell($('#cell5'));
                togglePlayer();
            }
        })
        $('#cell6').on('click', () => {
            if ($('#cell6').html() === '') {
                markCell($('#cell6'));
                togglePlayer();
            }
        })
        $('#cell7').on('click', () => {
            if ($('#cell7').html() === '') {
                markCell($('#cell7'));
                togglePlayer();
            }
        })
        $('#cell8').on('click', () => {
            if ($('#cell8').html() === '') {
                markCell($('#cell8'));
                togglePlayer();
            }
        })
        $('#cell9').on('click', () => {
            if ($('#cell9').html() === '') {
                markCell($('#cell9'));
                togglePlayer();
            }
        })
    }
);
