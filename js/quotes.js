const quote = document.querySelector('.lifeQuotes-txt > h4');
const author = document.querySelector('.lifeQuotes-txt > p');
const randomBtn = document.querySelector('.lifeQuotes-btn');
let todayQuote;

function showQuote(){
  todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
  quote.innerHTML = todayQuote.quote;
  author.innerHTML = todayQuote.author;
}

showQuote();
randomBtn.addEventListener("click", showQuote);
