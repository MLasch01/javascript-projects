const whoWon = require('../RPS.js');

describe("whoWon", function() {

    test ("returns 'TIE!' when player1 === player2.", function() {
        let result = whoWon('rock','rock' || 'paper','paper' || 'scissors','scissors');
    expect(result).toBe('TIE!');
    });

    test ("returns 'Player 2 wins!' when player1 = rock & player2 = paper.", function() {
        let result = whoWon('rock','paper');
    expect(result).toBe('Player 2 wins!');
    });

    test ("return 'Player 2 wins!' when player1 = paper & player2 = scissors.", function() {
        let result = whoWon('paper','scissors');
    expect(result).toBe('Player 2 wins!');
    });

    test ("return 'Player 2 wins!' when player1 = scissors & player2 = rock .", function() {
        let result = whoWon('scissors','rock');
    expect(result).toBe('Player 2 wins!');
    });

    test ("return 'Player 2 wins!' when player1 = fork & player2 = soup .", function() {
        let result = whoWon('fork','soup');
    expect(result).toBe('Player 2 wins!');
    });

});