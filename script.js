'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🙌 Correct Number!';
document.querySelector('.number').textContent = value;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let chance = 5;
let jackpot = 1000000;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  const jackpot = 1000000 * 2;
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🙌 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundImage =
      "url('data:image/jpeg;base64,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')";
    document.querySelector('h1').textContent = '🎉Congratulations!!';
    document.querySelector('.highscore').style.yellow;
    /*if (chance <= 5) {
      jackpot = chance;
      document.querySelector('.highscore').textContent = jackpot ** 2;
    }}
    /*if (chance <= jackpotPrize) {
      jackpotPrize * 2;
    }*/
    document.querySelector('.guess').style.backgroundSize = '10px';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '‼ Too high!';
    chance--;
    if (chance < 1)
      document.querySelector('.message').textContent = '😭 sorry you loss!';
    document.querySelector('.chance').textContent = chance;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '😓 Too low!';
    chance--;
    if (chance < 1)
      document.querySelector('.message').textContent = '😭 sorry you loss!';
    document.querySelector('.chance').textContent = chance;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  chance = 5;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let guess = Number(document.querySelector('.guess').value);
  console.log(chance, guess);
  document.querySelector('h1').textContent = 'Play Lotto now!';
  document.querySelector('.chance').textContent = '5';
  document.querySelector('.message').textContent = 'Start your bet now...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundImage =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVVTvHnWL96EvNb0i6NZ3POZvLWuZ_wFMvQ&usqp=CAU')";
});
