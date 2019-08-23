var quoteArr = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.']
var userSub = document.querySelector('.form');
var button = document.querySelector('.button')
var showInput = document.querySelector('.quote-state')
var userInput = document.querySelector('.user-input-view')
var quote = document.querySelector('.random-quote')
var ball = document.querySelector('.eight-ball')

button.addEventListener('click', shakeBall);

function shakeBall() {
  var randomNum = Math.floor(Math.random() * (quoteArr.length));
  var pickQuote = quoteArr[randomNum];
    showInput.classList.remove('quote-state-hide')
    userInput.innerText = `"${userSub.value}"`;
    ball.classList.add('hide');
    quote.innerText = pickQuote;
}
