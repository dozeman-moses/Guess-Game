var guessNum = Math.ceil(10 * Math.random());
var guessBox = document.getElementById('guess-box');
var entrBtn = document.getElementById('entr-btn');
var gameResult = document.getElementById('game-result');
var warnInfo = document.querySelector('.warning');
var userTry = 0;

warnInfo.textContent = 'You have 3 chances remaining';

entrBtn.addEventListener('click', function guessGame() {
    var userValue = guessBox.value;
    gameResult.textContent = userValue;

    if (userValue === guessNum) {
        gameResult.textContent = 'You are correct';
    } else {
        gameResult.textContent = 'You are wrong! Try again';
        userTry++;
        if (userTry === 3) {
            gameResult.textContent = 'GameOver';
            entrBtn.remove();
        }
    }

    warnInfo.textContent = 'You have ' + (3 - userTry) + ' chance(s) remaining';
})